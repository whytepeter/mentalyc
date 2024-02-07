import React, { useState, useEffect, useRef } from "react";
import { BaseModal } from "@/components/BaseModal";
import { Button } from "@/components/Button";
import RecordingPanel from "@/components/Recordings/RecordingPanel";
import { toast } from "react-hot-toast";

type RecordingSessionType = {
  sessionName: string;
  isRecording: Boolean;
  setIsRecording: (val: boolean) => void;
};

export default function RecordingSession({
  sessionName,
  isRecording,
  setIsRecording,
}: RecordingSessionType) {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [maxDuration, setMaxDuration] = useState<number>(60);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [recordingStatus, setRecordingStatus] = useState<string>("Idle");
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isRecording) {
      startRecording();

      // Start timer to track recording duration
      let duration = 0;
      const id = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
        duration++;
        console.log(duration, maxDuration);
        if (duration === maxDuration) {
          stopRecording();
          clearInterval(id);
        }
      }, 1000);
      setIntervalId(id);

      return () => {
        clearInterval(id);
      };
    }
  }, [isRecording]);

  const clearDurationInterval = (): void => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      recorder.onstop = () => {
        const recordedBlob = new Blob(chunks, { type: "audio/wav" });
        setRecordedBlob(recordedBlob);
        console.log("Recording stopped");

        //Set audio
        const audioURL = URL.createObjectURL(recordedBlob);
        if (audioElementRef.current) {
          audioElementRef.current.src = audioURL;
        }
        setRecordingStatus("Recording Stopped");
      };

      recorder.onerror = () => {
        setRecordingStatus("Recording Error");
        setIsRecording(false);
      };

      recorder.start();
      setIsRecording(true);
      setRecordingStatus("Recording Started");
      setMediaRecorder(recorder);
    } catch (error) {
      console.error("Error starting recording:", error);
      setRecordingStatus("Recording Error");
    }
  };

  const stopRecording = (): void => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      setRecordingDuration(0);
    }

    clearDurationInterval();
  };

  const uploadRecording = async () => {
    if (!recordedBlob) return;
    try {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("audio", recordedBlob, "recording.wav");
      formData.append("sessionName", sessionName);

      const response = await fetch("YOUR_UPLOAD_URL", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        toast.error("Failed to upload recording");
        return;
      }

      toast.success("Recording uploaded successfully");
    } catch (error: any) {
      console.error("Error uploading recording:", error);
      toast.error(error?.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 w-full sm:max-w-2xl">
        <p
          onClick={() => {
            setIsUploading(true);
          }}
          className="text-[20px] "
        >
          Name: <span className="text-gray-400">{sessionName}</span>{" "}
        </p>

        {isRecording ? (
          <RecordingPanel
            duration={recordingDuration}
            maxDuration={maxDuration}
            stopRecording={stopRecording}
          />
        ) : (
          <>
            <audio ref={audioElementRef} controls></audio>

            <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-4">
              <Button
                onClick={startRecording}
                color="default"
                className="w-full"
              >
                Record Again
              </Button>
              <Button onClick={uploadRecording} className="w-full">
                Upload Recording
              </Button>
            </div>
          </>
        )}
      </div>

      <BaseModal
        showDismissButton={false}
        size="small"
        open={isUploading}
        onClose={() => {
          setIsUploading(false);
        }}
      >
        <div className="mb-6 text-center">
          <h3
            onClick={() => {
              setIsUploading(false);
            }}
            className="font-bold text-xl mb-1"
          >
            Uploading recording
          </h3>
        </div>

        <div className="flex items-center justify-center gap-2">
          Uploading...
        </div>
      </BaseModal>
    </>
  );
}

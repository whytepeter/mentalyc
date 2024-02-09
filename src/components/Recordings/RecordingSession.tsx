import React, { useState, useEffect, useRef } from "react";
import { useUpload } from "@/hooks/useUpload";
import { BaseModal } from "@/components/BaseModal";
import { Button } from "@/components/Button";
import Loader from "@/components/Loader";
import RecordingPanel from "@/components/Recordings/RecordingPanel";

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
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState<number>(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const [recordingStatus, setRecordingStatus] = useState<string>("");

  const { uploadRecording, isUploading } = useUpload();

  useEffect(() => {
    if (isRecording) {
      startRecording();
      // Start timer to track recording duration
      if (!recordingStatus) return;

      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      return () => {
        clearInterval(id);
      };
    }
  }, [isRecording, recordingStatus]);

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
      setMediaRecorder(recorder);

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

        setRecordingStatus("");
      };

      recorder.onerror = () => {
        setIsRecording(false);
        setRecordingStatus("");
      };

      recorder.start();
      setIsRecording(true);
      setRecordingStatus("Recording started");
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = (): void => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      setTime(0);
    }

    clearDurationInterval();
  };

  const handleUpload = (): void => {
    if (!recordedBlob) return;
    uploadRecording(recordedBlob, sessionName, time);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 w-full sm:max-w-2xl">
        <p className="text-[20px] ">
          Name: <span className="text-gray-400">{sessionName}</span>{" "}
        </p>

        {isRecording ? (
          <RecordingPanel time={time} stopRecording={stopRecording} />
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
              <Button onClick={handleUpload} className="w-full">
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
        onClose={() => {}}
      >
        <div className="mb-4 text-center">
          <h3 className="font-bold text-xl mb-1">Uploading recording</h3>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Loader />
        </div>
      </BaseModal>
    </>
  );
}

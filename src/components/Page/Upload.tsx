import CloseIcon from "@/icons/Close";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { convertAudioToBlob, getAudioDuration } from "@/utils";
import { useUpload } from "@/hooks/useUpload";
import SelectAudioFile from "../SelectAudioFile";
import UploadModal from "../UploadModal";

export default function RecordingPage() {
  const [sessionName, setSessionName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();

  const { uploadRecording, isUploading } = useUpload();

  const handleClose = (): void => {
    router.replace("/dashboard");
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    if (!sessionName) {
      toast.error("Session is required");
      return;
    }

    const audioBlob = await convertAudioToBlob(selectedFile);
    const audioLength = (await getAudioDuration(audioBlob)) || 0;

    uploadRecording(audioBlob, sessionName, audioLength);
  };

  return (
    <>
      <section className="mb-24 flex gap-6 flex-col items-center">
        <div className="w-full flex justify-between  mb-6 items-center">
          <div className="md:text-[20px] mb-6">Upload your recording</div>
          <div onClick={handleClose} className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>

        <div className="w-full sm:max-w-xl flex flex-col gap-8">
          <SelectAudioFile onSelectFile={setSelectedFile} />

          {selectedFile && (
            <div className="w-full flex flex-col gap-6">
              <TextField
                value={sessionName}
                onInputChange={setSessionName}
                placeholder="Enter session name"
              />
              <Button onClick={handleUpload}>Upload Audio</Button>
            </div>
          )}
        </div>
      </section>

      <UploadModal isUploading={isUploading} />
    </>
  );
}

import RecordingSession from "@/components/Recordings/RecordingSession";
import CloseIcon from "@/icons/Close";
import { Button } from "@/components/Button";
import { BaseModal } from "@/components/BaseModal";
import { TextField } from "@/components/TextField";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Recording } from "@/types";
import { toast } from "react-hot-toast";

export default function RecordingPage() {
  const router = useRouter();
  const [startRecording, setStartRecording] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [sessionName, setSessionName] = useState<string>("");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClose = (): void => {
    if (isRecording) {
      setShowConfirm(true);
      return;
    }
    router.replace("/dashboard");
  };

  const closeConfirm = () => {
    setShowConfirm(false);
  };

  const startSession = (): void => {
    if (sessionName.trim() !== "") {
      setIsRecording(true);
      setStartRecording(true);
      return;
    }
    toast.error("Session name is required");
  };

  return (
    <>
      <section className="mb-24 flex gap-6 flex-col items-center">
        <div className="w-full flex justify-between  mb-6 items-center">
          <div className="md:text-[20px] mb-6">
            Recording {isRecording ? "In Progress" : "Session"}
          </div>
          <div onClick={handleClose} className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>

        <div className="w-full sm:max-w-xl flex flex-col gap-8">
          {!startRecording ? (
            <>
              <TextField
                value={sessionName}
                onInputChange={setSessionName}
                placeholder="Enter session name"
              />
              <Button onClick={startSession}>Start Recording</Button>
            </>
          ) : (
            <RecordingSession
              sessionName={sessionName}
              isRecording={isRecording}
              setIsRecording={setIsRecording}
            />
          )}
        </div>
      </section>

      <BaseModal
        showDismissButton={false}
        size="small"
        open={showConfirm}
        onClose={closeConfirm}
      >
        <div className="mb-6 text-center">
          <h3 className="font-bold text-xl mb-1">Are you sure?</h3>
          <p className="text-gray-400"> A recording session is ongoing</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button
            onClick={() => {
              closeConfirm();
              router.replace("/dashboard");
            }}
          >
            Yes
          </Button>
          <Button color="default" onClick={closeConfirm}>
            Uhm, No
          </Button>
        </div>
      </BaseModal>
    </>
  );
}

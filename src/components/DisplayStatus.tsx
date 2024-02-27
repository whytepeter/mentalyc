import React, { useEffect, useState } from "react";
import { Recording } from "@/types";
import Progress from "./Progress";
import useSocket from "@/hooks/useSocket";

type StatusProps = {
  recording: Recording;
};

type progressUpdateType = {
  recording: Recording;
  progress: number;
};

export default function DisplayStatus({ recording }: StatusProps) {
  const socket = useSocket();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Listen for 'progressUpdate' event from the server
    if (!socket) return;
    socket.on("onProcessingUpdate", handleProgressUpdate);
  }, [socket]);

  const handleProgressUpdate = (data: progressUpdateType) => {
    if (recording?.id === data.recording.id) {
      setProgress(data.progress);
    }
  };
  return (
    <div>
      {recording?.status === "DONE" ? (
        <span className="bg-gradient text-white rounded-full text-xs px-4 py-2">
          {recording.status}
        </span>
      ) : (
        <Progress progress={progress} />
      )}
    </div>
  );
}

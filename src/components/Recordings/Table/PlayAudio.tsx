import { BaseModal } from "@/components/BaseModal";
import { Button } from "@/components/Button";
import { Recording } from "@/types";
import React, { useRef, useState } from "react";

type AudioPlayerProps = {
  recording: Recording;
};

export default function PlayAudio({ recording }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startPlaying = (): void => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const stopPlaying = (): void => {
    setIsPlaying(false);
    if (!audioRef.current) return;
    audioRef.current.pause();
  };

  return (
    <>
      <Button onClick={startPlaying} className="bg-">
        Play
      </Button>

      <audio
        className="hidden"
        ref={audioRef}
        src={recording.mp3}
        controls
      ></audio>

      <BaseModal size="small" open={isPlaying} onClose={stopPlaying}>
        <div className="mb-4 text-center">
          <h3 className="font-bold text-xl mb-1">{recording?.name}</h3>
        </div>

        <div className="flex items-center justify-center gap-2">Playing..</div>
      </BaseModal>
    </>
  );
}

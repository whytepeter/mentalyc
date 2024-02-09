import CloseIcon from "@/icons/Close";
import PlayIcon from "@/icons/Play";
import { Recording } from "@/types";
import React, { useRef, useState } from "react";

type AudioPlayerProps = {
  recording: Recording;
};

export default function PlayAudio({ recording }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (): void => {
    if (!audioRef.current) return;
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying((prev) => !prev);
  };

  const closePlayer = (): void => {
    setIsPlaying(false);
    if (!audioRef.current) return;
    audioRef.current.pause();
  };

  return (
    <>
      <button onClick={togglePlay} className="flex items-center gap-1 text-sm">
        <PlayIcon /> Play
      </button>

      <div
        className={`${
          isPlaying ? "flex" : "hidden"
        } fixed inset-0 backdrop-blur-[1px] bg-black/10  items-center justify-center`}
      >
        <div className="max-w-md bg-white rounded-2xl p-4 border flex flex-col gap-2">
          <div className="text-base sm:text-lg text-center flex items-center justify-between">
            <span>{recording?.name}</span>
            <span onClick={closePlayer} className="cursor-pointer">
              <CloseIcon />
            </span>
          </div>
          <audio
            className=""
            ref={audioRef}
            src={recording.audioUrl}
            controls
          ></audio>
        </div>
      </div>
    </>
  );
}

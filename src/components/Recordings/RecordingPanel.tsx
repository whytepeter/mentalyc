import Microphone from "@/icons/Microphone";
import { Button } from "@/components/Button";
import { formatTime } from "@/utils";

type RecordingPanelType = {
  isPaused: boolean;
  time: number;
  pauseRecording: () => void;
  stopRecording: () => void;
};

export default function RecordingPanel({
  isPaused,
  time,
  pauseRecording,
  stopRecording,
}: RecordingPanelType) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full   items-center justify-center gap-4">
        <div
          className={`${
            !isPaused
              ? "animate__animated animate__pulse animate__infinite "
              : ""
          }sm:w-28 sm:h-28 bg-gradient p-2 bg-slate-200 rounded-full`}
        >
          <div className="w-full h-full border border-white flex items-center justify-center rounded-full">
            <Microphone />
          </div>
        </div>
      </div>

      <div className="text-center text-[20px] text-primary">
        {formatTime(time)}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button onClick={pauseRecording} color="default" className="w-full">
          {isPaused ? "Play" : "Pause"}
        </Button>
        <Button onClick={stopRecording} className="w-full">
          Stop
        </Button>
      </div>
    </div>
  );
}

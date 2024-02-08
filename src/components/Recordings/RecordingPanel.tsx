import Microphone from "@/icons/Microphone";
import { Button } from "@/components/Button";
import { formatTime } from "@/utils";

type RecordingPanelType = {
  time: number;
  stopRecording: () => void;
};

export default function RecordingPanel({
  time,
  stopRecording,
}: RecordingPanelType) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full   items-center justify-center gap-4">
        <div className="animate__animated animate__pulse animate__infinite sm:w-28 sm:h-28 bg-gradient p-2 bg-slate-200 rounded-full">
          <div className="w-full h-full border border-white flex items-center justify-center rounded-full">
            <Microphone />
          </div>
        </div>
      </div>

      <div className="text-center text-[20px] text-primary">
        {formatTime(time)}
      </div>

      <Button onClick={stopRecording} className="w-full">
        Done
      </Button>
    </div>
  );
}

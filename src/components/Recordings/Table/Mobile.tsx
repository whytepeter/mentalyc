import { Recordings } from "@/types";
import PlayAudio from "./PlayAudio";
import DisplayStatus from "@/components/DisplayStatus";

type TableProps = {
  recordings: Recordings;
};

export default function Mobile({ recordings }: TableProps) {
  return (
    <div className="w-full block md:hidden">
      {recordings.map((recording) => (
        <div
          key={recording?.id}
          className="flex flex-col gap-2  border-b border-primary p-4"
        >
          <div className="flex items-end gap-4 justify-between text-sm">
            <span className="text-dark-300">Name</span>
            <span className="text-right text-dark-400 font-medium">
              {recording?.name}
            </span>
          </div>
          <div className="flex items-end gap-4 justify-between text-sm">
            <span className="text-dark-300">Timestamp</span>
            <span className="text-right text-dark-400 font-medium">
              {recording?.timestamp}
            </span>
          </div>
          <div className="flex items-end gap-4 justify-between text-sm">
            <span className="text-dark-300">Length</span>
            <span className="text-right text-dark-400 font-medium">
              {recording?.length}
            </span>
          </div>
          <div className="flex items-end gap-4 justify-between text-sm">
            <DisplayStatus recording={recording} />
            <span className="text-right text-dark-400 font-medium">
              <PlayAudio recording={recording} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

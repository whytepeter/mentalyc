import { Recordings } from "@/types";

type TableProps = {
  recordings: Recordings;
};

export function Table({ recordings }: TableProps) {
  return (
    <div className="grid grid-cols-1 gap-2">
      <header>
        <div className="grid grid-cols-4 gap-4 px-4">
          <div className="font-medium">Session</div>
          <div className="font-medium">Timestamp</div>
          <div className="font-medium">Length</div>
          <div className="font-medium">Status</div>
        </div>
      </header>
      <div>
        {recordings.map((recording, index) => (
          <div
            key={`table-${index}`}
            className="grid text-sm grid-cols-4 gap-4 bg-slate-50 border-b border-primary p-4"
          >
            <div className="">{recording.name}</div>
            <div className="line-clamp-1">{recording.timestamp}</div>
            <div className="">{recording.length}</div>
            <div className="">
              <span
                className={`${
                  recording?.status === "PROCESSING"
                    ? "bg-slate-200 text-grey-100"
                    : "bg-gradient text-white"
                } rounded-full text-sm px-4 py-2 `}
              >
                {recording.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Recordings } from "@/types";
import React from "react";
import PlayAudio from "./PlayAudio";

type TableProps = {
  recordings: Recordings;
};

export default function Desktop({ recordings }: TableProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-2  hidden md:block">
        <header>
          <div className="grid grid-cols-5 gap-4 px-4">
            <div className="font-medium">Session</div>
            <div className="font-medium">Timestamp</div>
            <div className="font-medium">Length</div>
            <div className="font-medium">Status</div>
            <div className="font-medium">
              <span className="sr-only">Action</span>
            </div>
          </div>
        </header>

        <div className="max-h-[450px] overflow-auto">
          {recordings.map((recording) => (
            <div
              key={`table-${recording.id}`}
              className="grid text-sm  items-center grid-cols-5 gap-4 bg-slate-50 border-b border-primary p-4"
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
                  } rounded-full text-xs px-4 py-2 `}
                >
                  {recording.status}
                </span>
              </div>
              <div className="">
                <PlayAudio recording={recording} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Recordings } from "@/types";
import { Table } from "./Table";

const recordings: Recordings = [
  {
    name: "Session #1",
    timestamp: String(new Date()),
    length: "10 min",
    status: "DONE",
  },
  {
    name: "Session #1",
    timestamp: String(new Date()),
    length: "10 min",
    status: "PROCESSING",
  },
];

export function RecordingList() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="font-medium">My Recordings</h3>
        <Table recordings={recordings} />
      </div>
    </>
  );
}

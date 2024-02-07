import React, { useState, useEffect } from "react";
import { Recordings } from "@/types";
import { Table } from "./Table";
import { toast } from "react-hot-toast";
import Loader from "@/components/Loader";
import http from "@/utils/api";

import io from "socket.io-client";
const url = process.env.NEXT_PUBLIC_API_URL;
const socket = io(url!);

const data: Recordings = [
  {
    id: "1",
    name: "Session #1",
    timestamp: String(new Date()),
    length: "10 min",
    status: "DONE",
  },
  {
    id: "2",
    name: "Session #1",
    timestamp: String(new Date()),
    length: "10 min",
    status: "PROCESSING",
  },
];

export function RecordingList() {
  const [recordings, setRecordings] = useState<Recordings | null>(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecordings = async () => {
      setLoading(true);
      try {
        const response = await http<Recordings>("GET");
        setRecordings(response);
      } catch (error: any) {
        toast.error(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecordings();

    // Listen for 'statusUpdate' event from the server
    socket.on("onStatusUpdate", (updatedRecordings: Recordings) => {
      setRecordings(updatedRecordings);
    });

    // Clean up socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="font-medium">My Recordings</h3>
        {recordings ? (
          <Table recordings={recordings} />
        ) : (
          loading && (
            <div className="flex items-center justify-center gap-2">
              <Loader />
            </div>
          )
        )}
      </div>
    </>
  );
}

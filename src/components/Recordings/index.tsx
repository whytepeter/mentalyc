import React, { useState, useEffect } from "react";
import { Recordings, ResponseType } from "@/types";
import { Table } from "./Table";
import { toast } from "react-hot-toast";
import Loader from "@/components/Loader";
import http from "@/utils/api";
import useSocket from "@/hooks/useSocket";

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
  const socket = useSocket();
  const [recordings, setRecordings] = useState<Recordings | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecordings = async () => {
      setLoading(true);
      try {
        const response = await http<ResponseType>("GET");
        if (!response.success) return;
        setRecordings(response?.data);
      } catch (error: any) {
        toast.error(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecordings();

    // Listen for 'statusUpdate' event from the server
    if (!socket) return;
    socket.on("onStatusUpdate", handleStatusUpdate);
  }, [socket]);

  const handleStatusUpdate = (updatedRecording: Recordings[number]) => {
    console.log("CODE UPDATED");
    console.log(updatedRecording);
    setRecordings((prevRecordings) =>
      prevRecordings
        ? prevRecordings.map((prevRecording) =>
            prevRecording.id === updatedRecording.id
              ? updatedRecording
              : prevRecording
          )
        : null
    );
    toast.success(`${updatedRecording?.name}, done proccessing`);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="font-medium">My Recordings</h3>

        {recordings && recordings.length ? (
          <Table recordings={recordings} />
        ) : (
          !loading && <div className="text-center my-4">No Recordings yet</div>
        )}

        {!recordings && loading && (
          <div className="flex items-center justify-center gap-2">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

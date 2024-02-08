import React, { useState, useEffect } from "react";
import { Recordings, Recording, ResponseType } from "@/types";
import { Table } from "./Table";
import { toast } from "react-hot-toast";
import Loader from "@/components/Loader";
import http from "@/utils/api";
import useSocket from "@/hooks/useSocket";

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
        setRecordings(response.data);
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
    setRecordings((prevRecordings) => {
      const updatedRecordings = prevRecordings?.map((record) =>
        record.id === updatedRecording.id ? updatedRecording : record
      );
      return updatedRecordings;
    });
    toast.success(`${updatedRecording?.name}, done proccessing`);
  };

  return (
    <>
      <div className="flex flex-col gap-5 pb-8">
        <h3 className="font-medium">
          Recordings -
          <span className="text-primary-100">{recordings?.length || 0}</span>{" "}
        </h3>

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

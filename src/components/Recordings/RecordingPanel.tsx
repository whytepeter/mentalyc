import React, { useState, useEffect, useRef } from "react";
import Play from "@/icons/Play";

type RecordingPanelType = {
  duration: number;
  maxDuration: number;
  stopRecording: () => void;
};

export default function RecordingPanel({
  duration,
  maxDuration,
  stopRecording,
}: RecordingPanelType) {
  return (
    <>
      <div className="flex w-full  items-center gap-4">
        <div className="cursor-pointer bg-gradient w-12 h-12 flex items-center justify-center rounded-full">
          <Play />
        </div>
        <div className="relative overflow-hidden flex-1 w-full  p-4 bg-slate-100 ">
          <div
            style={{
              width: `${Math.round(duration * (100 / maxDuration))}%`,
            }}
            className={` h-4 z-10 bg-primary-100 absolute left-0 top-1/2 -translate-y-1/2`}
          ></div>
          <div className="absolute  left-0 top-1/2 -translate-y-1/2 w-full border-2 border-dashed border-primary-100"></div>
        </div>
        <div className=" text-primary text-xl font-medium">
          {duration}:{maxDuration}
        </div>
      </div>

      <button
        onClick={stopRecording}
        className="p-2 rounded-full bg-gradient text-white h-20 w-20 flex items-center justify-center"
      >
        <div className="p-2 w-full h-full rounded-full border border-white flex items-center justify-center">
          Stop
        </div>
      </button>
    </>
  );
}

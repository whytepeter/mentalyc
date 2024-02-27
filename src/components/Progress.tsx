import React from "react";

interface ProgressProps {
  progress: Number;
}

export default function Progress({ progress = 0 }: ProgressProps) {
  return (
    <div className="bg-gray-200 w-full h-6 rounded-full overflow-hidden relative">
      <div
        style={{ width: `${progress}%` }}
        className="bg-gradient  h-full transition-all duration-200"
      ></div>
    </div>
  );
}

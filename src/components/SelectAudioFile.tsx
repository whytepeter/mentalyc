import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@/icons/Close";
import toast from "react-hot-toast";

interface AudioUploadProps {
  onSelectFile: (audioFile: File | null) => void;
}

export default function SelectAudioFile({ onSelectFile }: AudioUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleSelectChange = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      if (target.files) {
        const file = target.files[0];
        if (file && file.type.startsWith("audio/")) {
          setSelectedFile(file);
          setFileName(file.name);
          onSelectFile(file);
        } else {
          setSelectedFile(null);
          setFileName("");
          onSelectFile(null);
          toast.error("Invalid file selected. Please choose an audio file.");
        }
      }
    };

    if (fileInputRef.current) {
      fileInputRef.current.addEventListener("change", handleSelectChange);
    }

    return () => {
      if (fileInputRef.current) {
        fileInputRef.current.removeEventListener("change", handleSelectChange);
      }
    };
  }, [fileInputRef]);

  const handleClear = () => {
    setSelectedFile(null);
    setFileName("");
    onSelectFile(null);
    if (!fileInputRef.current) return;
    fileInputRef.current.value = ""; // Clear the file input element
  };

  return (
    <div className="flex flex-col gap-6">
      <input
        type="file"
        accept="audio/*"
        ref={fileInputRef}
        className="hidden"
      />

      <div className="border border-dashed   rounded-2xl  cursor-pointer ">
        {!selectedFile && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full p-4"
          >
            Select Audio File
          </div>
        )}

        {selectedFile && (
          <div className="flex items-center justify-between p-4 w-full h-full">
            <span>
              File Name: <span className="text-gray-600">{fileName}</span>{" "}
            </span>
            <span onClick={handleClear}>
              <CloseIcon />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

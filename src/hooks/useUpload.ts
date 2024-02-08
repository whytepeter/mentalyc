import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { calculateLength } from "@/utils";
import { ResponseType } from "@/types";
import { toast } from "react-hot-toast";
import http from "@/utils/api";

export const useUpload = () => {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);

  const uploadRecording = async (recordedBlob: Blob, sessionName: string) => {
    if (!recordedBlob) return;

    try {
      setIsUploading(true);

      const length = (await calculateLength(recordedBlob)) || "N/A";
      const timestamp = new Date().toLocaleString();

      const formData = new FormData();
      formData.append("audio", recordedBlob);
      formData.append("name", sessionName);
      formData.append("length", length);
      formData.append("timestamp", timestamp);

      const headers = {
        "Content-Type": "multipart/form-data",
      };

      const res = await http<ResponseType>("POST", formData, headers);
      if (res.success) {
        toast.success(res?.message);
        router.replace("/dashboard");
      } else {
        toast.error("Failed to upload recording");
      }
    } catch (error: any) {
      console.error("Error uploading recording:", error);
      toast.error(error?.message);
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadRecording, isUploading };
};

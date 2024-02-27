import React from "react";
import { BaseModal } from "./BaseModal";
import Progress from "./Progress";

interface UploadModalProps {
  isUploading: boolean;
  progress: Number;
}

export default function UploadModal({
  isUploading,
  progress = 0,
}: UploadModalProps) {
  return (
    <BaseModal
      showDismissButton={false}
      size="small"
      open={isUploading}
      onClose={() => {}}
    >
      <div className="mb-4 text-center">
        <h3 className="font-bold text-xl mb-1">Uploading recording</h3>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Progress progress={progress} />
      </div>
    </BaseModal>
  );
}

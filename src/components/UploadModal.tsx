import React from "react";
import { BaseModal } from "./BaseModal";
import Loader from "./Loader";

interface UploadModalProps {
  isUploading: boolean;
}

export default function UploadModal({ isUploading }: UploadModalProps) {
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
        <Loader />
      </div>
    </BaseModal>
  );
}

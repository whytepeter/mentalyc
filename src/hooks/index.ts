type uploadType = {
  recordedBlob: Blob;
  sessionName: string;
};

export const uploadRecording = async ({
  recordedBlob,
  sessionName,
}: uploadType) => {
  if (!recordedBlob) return;
  try {
    const formData = new FormData();
    formData.append("audio", recordedBlob, "recording.wav");
    formData.append("sessionName", sessionName);

    const response = await fetch("YOUR_UPLOAD_URL", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload recording");
    }

    console.log("Recording uploaded successfully");
    // Handle success, if needed
  } catch (error) {
    console.error("Error uploading recording:", error);
    // Handle error, if needed
  }
};

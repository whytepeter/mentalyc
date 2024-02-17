export const randomRange = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start)) + start;
};

export const formatAudioLength = (time: number): string => {
  const timeStr = formatTime(time).split(":");
  const minutes = timeStr[1];
  const seconds = timeStr[2];

  const length = `${minutes}m:${seconds}s`;
  return length;
};

export const formatTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const convertAudioToBlob = async (file: File): Promise<Blob> => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const audioBlob = new Blob([arrayBuffer], { type: file.type });
      resolve(audioBlob);
    };

    reader.onerror = reject;
  });
};

export async function getAudioDuration(
  audioBlob: Blob
): Promise<number | undefined> {
  const url = URL.createObjectURL(audioBlob);

  return new Promise<number | undefined>((resolve, reject) => {
    const audio = document.createElement("audio");
    audio.muted = true;
    const source = document.createElement("source");
    source.src = url;
    audio.preload = "metadata";
    audio.appendChild(source);

    audio.onloadedmetadata = () => {
      resolve(audio.duration);
    };

    audio.onerror = () => {
      reject(new Error("Failed to load audio metadata"));
    };
  });
}

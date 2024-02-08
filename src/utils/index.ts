export const randomRange = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start)) + start;
};

export const calculateLength = (blob: Blob): string => {
  let length = "";
  const audioURL = URL.createObjectURL(blob);
  const audio = new Audio(audioURL);

  audio.addEventListener("canplaythrough", function () {
    const durationInSeconds = audio.duration;
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60)
      .toString()
      .padStart(2, "0");
    length = `${minutes}m:${seconds}s`;
  });
  audio.load();
  return length;
};

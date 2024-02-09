export const randomRange = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start)) + start;
};

export const calculateLength = (time: number): string => {
  const timeStr = formatTime(time).split(":");
  console.log(timeStr);
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

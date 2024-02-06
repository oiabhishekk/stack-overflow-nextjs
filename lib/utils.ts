import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getTimeStamp(createdAt: string): string {
  const createdAtDate: Date = new Date(createdAt);
  const now: Date = new Date();
  const elapsedMilliseconds: number = now.getTime() - createdAtDate.getTime();

  // Define time units in milliseconds
  const minuteInMs: number = 60 * 1000;
  const hourInMs: number = 60 * minuteInMs;
  const dayInMs: number = 24 * hourInMs;
  const monthInMs: number = 30 * dayInMs;
  const yearInMs: number = 365 * dayInMs;

  // Calculate time difference in relative terms
  if (elapsedMilliseconds < minuteInMs) {
    const seconds: number = Math.round(elapsedMilliseconds / 1000);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < hourInMs) {
    const minutes: number = Math.round(elapsedMilliseconds / minuteInMs);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < dayInMs) {
    const hours: number = Math.round(elapsedMilliseconds / hourInMs);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < monthInMs) {
    const days: number = Math.round(elapsedMilliseconds / dayInMs);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < yearInMs) {
    const months: number = Math.round(elapsedMilliseconds / monthInMs);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years: number = Math.round(elapsedMilliseconds / yearInMs);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
}
export function formatLargeNumber(number: number): string {
  const absNumber = Math.abs(number);

  if (absNumber < 1e3) {
    return number.toString();
  } else if (absNumber < 1e6) {
    return (number / 1e3).toFixed(1) + 'k';
  } else if (absNumber < 1e9) {
    return (number / 1e6).toFixed(1) + 'M';
  } else if (absNumber < 1e12) {
    return (number / 1e9).toFixed(1) + 'B';
  } else {
    return number.toString();
  }
}

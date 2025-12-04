import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the correct image path - Next.js automatically handles basePath
 * @param path - The image path starting with /
 * @returns The path as-is (Next.js will add basePath automatically)
 */
export function getImagePath(path: string): string {
  return path;
}

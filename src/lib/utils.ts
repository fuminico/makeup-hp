import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the correct image path with basePath prefix for GitHub Pages
 * @param path - The image path starting with /
 * @returns The full path with basePath if in production
 */
export function getImagePath(path: string): string {
  const basePath = '/makeup-hp';
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

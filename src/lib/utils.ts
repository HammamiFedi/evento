import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

// Function to merge Tailwind CSS classes with clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to capitalize the first letter of a string
export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to format date to a human-readable string
// e.g Saturday, October 18
export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  });
}

// Sleeper Function
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

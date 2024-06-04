import "server-only";
import { unstable_cache } from "next/cache";
import prisma from "./db";
import { capitalize } from "./utils";
import { notFound } from "next/navigation";

// Function to Fetch the events from the DataBase
export const fetchEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.event.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;

  if (city === "all") {
    totalCount = await prisma.event.count();
  } else {
    totalCount = await prisma.event.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return { events, totalCount };
});

// Function to Fetch a single event from the DataBase
export const fetchEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.event.findUnique({
    where: {
      slug,
    },
  });

  if (!event) return notFound();

  return event;
});

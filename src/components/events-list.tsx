import React from "react";

import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";

import { fetchEvents } from "@/lib/server-utils";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({ city, page = 1 }: EventListProps) {
  const { events, totalCount } = await fetchEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  if (!events.length) {
    return <p>No events found</p>;
  }

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}

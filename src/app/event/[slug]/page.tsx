import { Metadata } from "next";
import Image from "next/image";

import H1 from "@/components/h1";
import SectionContent from "@/components/section-content";
import SectionHeading from "@/components/section-heading";

import { formatDate } from "@/lib/utils";
import { fetchEvent } from "@/lib/server-utils";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = params;

  const event = await fetchEvent(slug);

  return {
    title: event.name,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = params;

  const event = await fetchEvent(slug);

  return (
    <main>
      <section className="flex justify-center items-center relative overflow-hidden">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          priority
          className="object-cover blur-3xl z-0"
        />

        <div className="flex flex-col md:flex-row gap-6 md:gap-16 relative z-1 py-14 md:py-20">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">{formatDate(event.date)}</p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg uppercase mt-5 md:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-2 border-white/10 hover-effect">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center py-16 px-5 space-y-4 min-h-[75vh]">
        <section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </section>
        <section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </section>
      </div>
    </main>
  );
}

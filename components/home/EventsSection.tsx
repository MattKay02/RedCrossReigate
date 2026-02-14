import Link from "next/link";
import { events } from "@/lib/data/events";
import { EventCard } from "@/components/shared/EventCard";

export function EventsSection() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="bg-light py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What&apos;s On This Week
          </h2>
          <p className="mt-2 text-dark/60">
            Live music, quizzes, sports, and drink deals
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/whats-on"
            className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}

import { events } from "@/lib/data/events";
import { EventCard } from "@/components/shared/EventCard";

export default function WhatsOnPage() {
  return (
    <div className="pb-20 md:pb-0">
      <section className="bg-dark py-16 text-center text-white">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          What&apos;s On
        </h1>
        <p className="mt-2 text-light/70">
          Live music, quizzes, sports screenings, and more
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}

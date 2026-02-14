import Image from "next/image";
import type { Event } from "@/lib/data/events";

const categoryColors: Record<Event["category"], string> = {
  "live-music": "bg-primary text-white",
  sports: "bg-accent text-white",
  quiz: "bg-secondary text-dark",
  karaoke: "bg-purple-600 text-white",
  offer: "bg-primary-light text-white",
};

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-dark/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-40 w-full">
        <Image
          src={event.image}
          alt={`${event.title} event`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[event.category]}`}
          >
            {event.category.replace("-", " ")}
          </span>
          <span className="text-xs text-dark/50">{event.day}</span>
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold">
          {event.title}
        </h3>
        <p className="mt-1 text-sm text-dark/60">{event.description}</p>
        <p className="mt-2 text-sm font-medium text-primary">{event.time}</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import type { DrinkItem } from "@/lib/data/drinks";

interface DrinkCardProps {
  drink: DrinkItem;
}

export function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-dark/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-40 w-full">
        <Image
          src={drink.image}
          alt={drink.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold">{drink.name}</h3>
        <p className="mt-1 text-sm text-dark/60">{drink.description}</p>
      </div>
    </div>
  );
}

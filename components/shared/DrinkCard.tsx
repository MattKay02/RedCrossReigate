import type { DrinkItem } from "@/lib/data/drinks";
import { formatPrice } from "@/lib/utils";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface DrinkCardProps {
  drink: DrinkItem;
}

export function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-dark/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <ImagePlaceholder
        alt={`${drink.name} - ${drink.category}`}
        className="h-40 w-full"
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold">{drink.name}</h3>
          <span className="shrink-0 font-semibold text-primary">
            {formatPrice(drink.price)}
          </span>
        </div>
        <p className="mt-1 text-sm text-dark/60">{drink.description}</p>
      </div>
    </div>
  );
}

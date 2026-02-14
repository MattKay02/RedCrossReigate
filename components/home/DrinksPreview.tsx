import Link from "next/link";
import { drinks } from "@/lib/data/drinks";
import { DrinkCard } from "@/components/shared/DrinkCard";

export function DrinksPreview() {
  const featuredDrinks = drinks.filter((d) => d.featured).slice(0, 4);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Our Drinks
          </h2>
          <p className="mt-2 text-dark/60">
            From craft beers to handcrafted cocktails
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/drinks"
            className="inline-block rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View Full Drinks Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

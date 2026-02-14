import { drinks } from "@/lib/data/drinks";
import { DrinkCard } from "@/components/shared/DrinkCard";

export function DrinksPreview() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            On Tap
          </h2>
          <p className="mt-2 text-dark/60">
            A selection of what we&apos;re pouring
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        <p className="mt-8 text-center text-lg font-medium text-dark/70">
          ...and many more beers available on tap
        </p>
      </div>
    </section>
  );
}

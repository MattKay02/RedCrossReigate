import { drinks } from "@/lib/data/drinks";
import { DrinkCard } from "@/components/shared/DrinkCard";

export default function DrinksPage() {
  return (
    <div className="pb-20 md:pb-0">
      <section className="bg-dark py-16 text-center text-white">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          On Tap
        </h1>
        <p className="mt-2 text-light/70">
          A selection of what we&apos;re pouring
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-medium text-dark/70">
          ...and many more beers available on tap
        </p>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { drinks, drinkCategories } from "@/lib/data/drinks";
import { DrinkCard } from "@/components/shared/DrinkCard";

export default function DrinksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredDrinks =
    activeCategory === "all"
      ? drinks
      : drinks.filter((d) => d.category === activeCategory);

  return (
    <div className="pb-20 md:pb-0">
      <section className="bg-dark py-16 text-center text-white">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          Drinks Menu
        </h1>
        <p className="mt-2 text-light/70">
          Something for every taste
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "bg-dark/5 text-dark/70 hover:bg-dark/10"
            }`}
          >
            All
          </button>
          {drinkCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? "bg-primary text-white"
                  : "bg-dark/5 text-dark/70 hover:bg-dark/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Drinks grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        {filteredDrinks.length === 0 && (
          <p className="mt-12 text-center text-dark/50">
            No drinks in this category yet.
          </p>
        )}
      </section>
    </div>
  );
}

import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const usps = [
  {
    title: "Dog Friendly",
    description: "Four-legged friends are always welcome at The Red Cross.",
  },
  {
    title: "Beer Garden",
    description: "Enjoy your drinks in our lovely outdoor garden space.",
  },
  {
    title: "Live Sports",
    description: "Catch all the big matches on our screens.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-light py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Your Local in Reigate
            </h2>
            <p className="mt-4 text-dark/70 leading-relaxed">
              The Red Cross is a traditional yet vibrant drinks-only pub in the
              heart of Reigate. Whether you&apos;re popping in for a quick pint,
              settling in for a cocktail evening, or bringing the dog for a lazy
              Sunday afternoon — you&apos;re always welcome.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {usps.map((usp) => (
                <div
                  key={usp.title}
                  className="rounded-lg border border-dark/10 bg-white p-4"
                >
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {usp.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark/60">
                    {usp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ImagePlaceholder
            alt="Interior of The Red Cross pub - warm and welcoming"
            className="h-80 rounded-lg md:h-96"
          />
        </div>
      </div>
    </section>
  );
}

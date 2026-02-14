import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export default function AboutPage() {
  return (
    <div className="pb-20 md:pb-0">
      <section className="bg-dark py-16 text-center text-white">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          About The Red Cross
        </h1>
        <p className="mt-2 text-light/70">
          Your local in the heart of Reigate
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-bold">Our Story</h2>
              <p className="mt-3 leading-relaxed text-dark/70">
                The Red Cross has been a cornerstone of the Reigate community
                for years. As a drinks-only pub, we focus on what we do best —
                serving great drinks in a welcoming atmosphere.
              </p>
              <p className="mt-3 leading-relaxed text-dark/70">
                Whether you&apos;re a real ale enthusiast, or
                just looking for a nice glass of wine, we&apos;ve got something
                for you. Our carefully curated drinks menu changes regularly to
                keep things fresh and exciting.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold">What We Offer</h2>
              <ul className="mt-3 space-y-2 text-dark/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Dog-friendly — your four-legged friends are always welcome
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Beautiful beer garden for sunny days
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Live sports shown on big screens
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Regular karaoke and entertainment
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Weekly pub quiz nights
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <ImagePlaceholder
              alt="The Red Cross pub exterior - traditional English pub"
              className="h-64 rounded-lg"
            />
            <ImagePlaceholder
              alt="Beer garden at The Red Cross - outdoor seating"
              className="h-64 rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

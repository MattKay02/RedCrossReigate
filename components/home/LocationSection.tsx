import { GoogleMap } from "@/components/shared/GoogleMap";
import { hours, PUB_INFO } from "@/lib/data/hours";

export function LocationSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Find Us
          </h2>
          <p className="mt-2 text-dark/60">{PUB_INFO.address}</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <GoogleMap className="overflow-hidden rounded-lg" />

          <div>
            <h3 className="font-heading text-2xl font-semibold">
              Opening Hours
            </h3>
            <table className="mt-4 w-full">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="border-b border-dark/10">
                    <td className="py-3 font-medium">{h.day}</td>
                    <td className="py-3 text-right text-dark/70">
                      {h.open} – {h.close === "00:00" ? "Midnight" : h.close}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <a
                href={PUB_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

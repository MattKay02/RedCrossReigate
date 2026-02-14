import { GoogleMap } from "@/components/shared/GoogleMap";
import { hours, PUB_INFO } from "@/lib/data/hours";

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-0">
      <section className="bg-dark py-16 text-center text-white">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-2 text-light/70">
          We&apos;d love to hear from you
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold">Get In Touch</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="mt-1 text-dark/70">{PUB_INFO.address}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold">Opening Hours</h2>
              <table className="mt-4 w-full">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className="border-b border-dark/10">
                      <td className="py-3 font-medium">{h.day}</td>
                      <td className="py-3 text-right text-dark/70">
                        {h.open} –{" "}
                        {h.close === "00:00" ? "Midnight" : h.close}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <GoogleMap className="h-96 overflow-hidden rounded-lg" />
        </div>
      </section>
    </div>
  );
}

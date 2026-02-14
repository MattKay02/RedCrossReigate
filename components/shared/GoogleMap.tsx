import { PUB_INFO } from "@/lib/data/hours";

interface GoogleMapProps {
  className?: string;
}

export function GoogleMap({ className }: GoogleMapProps) {
  return (
    <div className={className}>
      <iframe
        src={PUB_INFO.googleMapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 300 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${PUB_INFO.name}`}
      />
    </div>
  );
}

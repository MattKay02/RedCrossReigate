export interface OpeningHours {
  day: string;
  open: string;
  close: string;
}

export const hours: OpeningHours[] = [
  { day: "Monday", open: "11:00", close: "23:00" },
  { day: "Tuesday", open: "11:00", close: "23:00" },
  { day: "Wednesday", open: "11:00", close: "23:00" },
  { day: "Thursday", open: "11:00", close: "00:00" },
  { day: "Friday", open: "11:00", close: "01:00" },
  { day: "Saturday", open: "11:00", close: "01:00" },
  { day: "Sunday", open: "12:00", close: "23:00" },
];

export const PUB_INFO = {
  name: "The Red Cross",
  address: "96 High Street, Reigate, Surrey, RH2 9AP",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Red+Cross+96+High+Street+Reigate+RH2+9AP",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.9646144841777!2d-0.21230418713853286!3d51.23814657163561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e5baf1f0fad7%3A0x7387faf13bc81d4c!2sRed%20Cross%20Reigate!5e0!3m2!1sen!2suk!4v1771099424165!5m2!1sen!2suk",
} as const;

export function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay();
  const currentHours = hours[day === 0 ? 6 : day - 1];

  const [openH, openM] = currentHours.open.split(":").map(Number);
  const [closeH, closeM] = currentHours.close.split(":").map(Number);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = openH * 60 + openM;
  const closeMinutes =
    closeH === 0 ? 24 * 60 : closeH * 60 + closeM;

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

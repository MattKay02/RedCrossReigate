export interface Event {
  id: string;
  title: string;
  description: string;
  day: string;
  time: string;
  image?: string;
  category: "live-music" | "sports" | "quiz" | "karaoke" | "offer";
}

export const events: Event[] = [
  {
    id: "1",
    title: "Quiz Night",
    description:
      "Test your knowledge at our weekly pub quiz. Teams of up to 6. Prizes for the top 3!",
    day: "Every Wednesday",
    time: "7:00 PM",
    category: "quiz",
  },
  {
    id: "2",
    title: "Karaoke Night",
    description:
      "Grab the mic and show off your vocals. All welcome, no judgement!",
    day: "Every Thursday",
    time: "8:00 PM",
    category: "karaoke",
  },
  {
    id: "3",
    title: "Premier League",
    description:
      "Catch all the Premier League action on our big screens. Drink deals available during matches.",
    day: "Every Matchweek",
    time: "12:30 PM",
    category: "sports",
  }
];

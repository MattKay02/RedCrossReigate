export interface DrinkItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const drinks: DrinkItem[] = [
  {
    id: "1",
    name: "Guinness",
    description:
      "The iconic Irish stout. Rich, creamy, and perfectly poured with its signature velvety head.",
    image: "/images/guinness.jpg",
  },
  {
    id: "2",
    name: "Heineken",
    description:
      "A crisp, refreshing premium lager with a balanced bitter taste brewed with pure malt.",
    image: "/images/Heineken.jpg",
  },
  {
    id: "3",
    name: "Cruzcampo",
    description:
      "A smooth Spanish lager with a light, easy-drinking character and subtle malty sweetness.",
    image: "/images/cruzcampo.webp",
  },
  {
    id: "4",
    name: "Birra Moretti",
    description:
      "A traditional Italian lager with a distinctive bitter taste and delicate balance of malt and hops.",
    image: "/images/birra-moretti.webp",
  },
];

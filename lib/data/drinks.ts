export interface DrinkItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "beer" | "wine" | "spirits" | "cocktails" | "soft-drinks";
  image?: string;
  featured?: boolean;
}

export const drinks: DrinkItem[] = [
  {
    id: "1",
    name: "Red Cross IPA",
    description: "Our signature house IPA with citrus and pine notes",
    price: 5.5,
    category: "beer",
    featured: true,
  },
  {
    id: "2",
    name: "Surrey Gold Ale",
    description: "A smooth, golden ale brewed locally in Surrey",
    price: 4.8,
    category: "beer",
    featured: true,
  },
  {
    id: "3",
    name: "Pilsner Lager",
    description: "Crisp and refreshing Czech-style pilsner",
    price: 5.0,
    category: "beer",
  },
  {
    id: "4",
    name: "Guinness",
    description: "The classic Irish stout, perfectly poured",
    price: 5.2,
    category: "beer",
  },
  {
    id: "5",
    name: "Sauvignon Blanc",
    description: "Marlborough, New Zealand — crisp with tropical fruit",
    price: 6.5,
    category: "wine",
    featured: true,
  },
  {
    id: "6",
    name: "Malbec",
    description: "Mendoza, Argentina — rich and velvety with dark fruit",
    price: 6.5,
    category: "wine",
  },
  {
    id: "7",
    name: "Prosecco",
    description: "Light and bubbly Italian sparkling wine",
    price: 7.0,
    category: "wine",
  },
  {
    id: "8",
    name: "Espresso Martini",
    description: "Vodka, coffee liqueur, and fresh espresso",
    price: 9.5,
    category: "cocktails",
    featured: true,
  },
  {
    id: "9",
    name: "Aperol Spritz",
    description: "Aperol, prosecco, and a splash of soda",
    price: 8.5,
    category: "cocktails",
  },
  {
    id: "10",
    name: "Gin & Tonic",
    description: "Premium gin with Fever-Tree tonic and fresh botanicals",
    price: 7.5,
    category: "spirits",
    featured: true,
  },
  {
    id: "11",
    name: "Jameson Irish Whiskey",
    description: "Smooth triple-distilled Irish whiskey",
    price: 4.5,
    category: "spirits",
  },
  {
    id: "12",
    name: "Coca-Cola",
    description: "Classic Coca-Cola served ice cold",
    price: 2.5,
    category: "soft-drinks",
  },
  {
    id: "13",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 3.0,
    category: "soft-drinks",
  },
  {
    id: "14",
    name: "Fever-Tree Tonic Water",
    description: "Premium Indian tonic water",
    price: 2.5,
    category: "soft-drinks",
  },
];

export const drinkCategories = [
  { value: "beer", label: "Beers" },
  { value: "wine", label: "Wines" },
  { value: "spirits", label: "Spirits" },
  { value: "cocktails", label: "Cocktails" },
  { value: "soft-drinks", label: "Soft Drinks" },
] as const;

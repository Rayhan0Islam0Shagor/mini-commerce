export type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rating;
  amount: number;
};

type rating = {
  rate: number;
  count: number;
};

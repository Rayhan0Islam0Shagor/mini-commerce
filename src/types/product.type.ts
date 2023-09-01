export type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ratingType;
  amount: number;
};

export type ratingType = {
  rate: number;
  count: number;
};

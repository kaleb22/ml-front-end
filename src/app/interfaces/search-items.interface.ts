export interface SearchItems {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ItemDetails extends Item {
  author: Author;
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  Location: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface IProduct {
  id: number;
  alias: string;
  title: string;
  price: string;
  img: string;
}

export interface ICartItem {
  product: IProduct;
  count: number;
}

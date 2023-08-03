interface CartState {
  product: ItemCart[];
  totalItem: number;
  totalPrice: number;
}

interface ItemCart {
  productId: number;
  title: string;
  price: number;
  category: string;
  image: string;
  qty: number;
  total: number;
}

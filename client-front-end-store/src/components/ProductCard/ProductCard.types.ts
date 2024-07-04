export default interface IProductCard {
  title: string;
  image: any;
  hoverImage: any;
  price: number;
  priceBefore: number;
  to: string;
  status: "HOT" | "SALE" | "NEW" | "NONE";
}

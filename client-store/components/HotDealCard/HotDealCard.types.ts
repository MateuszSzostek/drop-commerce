export default interface IHotDealCard {
  id: string;
  discountPrecentages: number;
  name: string;
  price: number;
  priceBefore: number;
  timeInSeconds: number;
  rating?: number;
  image: any;
  imageHover: any;
}

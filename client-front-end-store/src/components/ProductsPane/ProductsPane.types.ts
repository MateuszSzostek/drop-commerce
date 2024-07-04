export default interface IProductsPane {
  id: string;
  title?: string;
  extraSliderClass?: string;
  sliders: {
    name: string;
    target: string;
    products: {
      title: string;
      image: any;
      hoverImage: any;
      price: number;
      priceBefore: number;
      to: string;
      status: "HOT" | "SALE" | "NEW" | "NONE";
    }[];
  }[];
}

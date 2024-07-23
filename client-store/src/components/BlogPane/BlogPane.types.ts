export default interface IBlogPane {
  id: string;
  title?: string;
  extraSliderClass?: string;
  posts: {
    title: string;
    image: any;
    author: string;
    timestamp: number;
    description: string;
    to: string;
  }[];
}

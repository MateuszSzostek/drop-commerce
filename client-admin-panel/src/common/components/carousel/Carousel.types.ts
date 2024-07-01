import { CarouselProps } from "antd"

export interface ICarousel extends CarouselProps {
  /**
   * Is this the version displayed on the landing page or inside the app?
   */
  styleType?: CarouselStyleType
}
export enum CarouselStyleType {
  PRIMARY = "primary",
}

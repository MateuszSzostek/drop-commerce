import { Carousel as AntCarousel } from "antd"
import { ICarousel, CarouselStyleType } from "./Carousel.types"
import { PropsWithChildren } from "react"
import "./Carousel.styles.scss"

export default function Carousel({ children = "Carousel Content", styleType = CarouselStyleType.PRIMARY, ...props }: PropsWithChildren<ICarousel>) {
  return (
    <AntCarousel {...props} className={`carousel carousel--${styleType} ${props.className}`}>
      {children}
    </AntCarousel>
  )
}

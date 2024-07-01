import { PropsWithChildren } from "react"
import { IIcon, IconStyleType } from "./Icon.types"
import "./Icon.style.scss"

export default function Icon({ image, styleType = IconStyleType.PRIMARY, width, height, className }: PropsWithChildren<IIcon>) {
  return <img src={image} className={`icon icon--${styleType} ${className}`} data-cy style={{ width: `${width}px`, height: `${height}px` }} />
}

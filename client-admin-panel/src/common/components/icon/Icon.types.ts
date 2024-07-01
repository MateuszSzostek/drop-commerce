export interface IIcon {
  /**
   * Is this the primary or secondary button?
   */
  styleType?: IconStyleType
  image: string
  width: number
  height: number
  className?: string
}
export enum IconStyleType {
  PRIMARY = "primary",
}

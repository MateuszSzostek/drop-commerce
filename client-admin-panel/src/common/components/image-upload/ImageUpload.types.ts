import { UploadProps } from "antd"

export interface IImageUpload extends UploadProps {
  /**
   * Which version of typography is it?
   */
  styleType?: ImageUploadStyleType
}
export enum ImageUploadStyleType {
  PRIMARY = "primary",
}

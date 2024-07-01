import { Divider as AntDivider } from "antd"
import { PropsWithChildren } from "react"
import { IDivider, DividerStyleType } from "./Divider.types"
import "./Divider.style.scss"

export default function Divider({ children = "", styleType = DividerStyleType.PRIMARY, ...props }: PropsWithChildren<IDivider>) {
  return (
    <AntDivider className={`divider divider--${styleType}`} {...props}>
      {children}
    </AntDivider>
  )
}

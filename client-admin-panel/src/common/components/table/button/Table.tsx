import { Table as AntTable } from "antd"
import { PropsWithChildren } from "react"
import { ITable, TableStyleType } from "./Table.types"
import "./Table.style.scss"

export default function Table({ children = <></>, styleType = TableStyleType.PRIMARY, ...props }: PropsWithChildren<ITable>) {
  return (
    <AntTable className={`table table--${styleType}`} {...props} data-cy>
      {children}
    </AntTable>
  )
}

import { PropsWithChildren } from "react"
import { IDisposable } from "./Disposable.types"
import "./Disposable.style.scss"
import useDisposable from "./useDisposable"

export default function Disposable({ children = "", timeToDispose, onDispose }: PropsWithChildren<IDisposable>) {
  const { isVisible, isPlayingFadeAnimation } = useDisposable({ timeToDispose, onDispose })

  return <>{isVisible && <div className={`disposable ${isPlayingFadeAnimation && "dispose"}`}>{children}</div>}</>
}

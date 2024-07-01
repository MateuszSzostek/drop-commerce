import { useState, useEffect } from "react"

import { IUseDisposableProps, IUseDisposableReturn } from "./Disposable.types"

export default function useDisposable({ timeToDispose, onDispose }: IUseDisposableProps): IUseDisposableReturn {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [isPlayingFadeAnimation, setIsPlayingFadeAnimation] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
      onDispose && onDispose()
    }, timeToDispose)

    setTimeout(
      () => {
        setIsPlayingFadeAnimation(true)
      },
      Math.max(timeToDispose - 1000, 0),
    )
  }, [])

  return { isVisible, isPlayingFadeAnimation }
}

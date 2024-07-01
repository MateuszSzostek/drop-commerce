export interface IDisposable {
  //time in miliseconds to dispose the component
  timeToDispose: number
  onDispose?: () => void
}

export interface IUseDisposableProps {
  //time in miliseconds to dispose the component
  timeToDispose: number
  onDispose?: () => void
}

export interface IUseDisposableReturn {
  isVisible: boolean
  isPlayingFadeAnimation: boolean
}

export enum SCREEN {
  ZERO_VALUE = 0,
  SMARTPHONE = 320,
  MINI_TABLET = 480,
  TABLET = 768,
  DESKTOP = 992,
  LARGE_DESKTOP = 1200,
}

export const getScreen = (width: number) => {
  const arr = [
    SCREEN.ZERO_VALUE,
    SCREEN.SMARTPHONE,
    SCREEN.MINI_TABLET,
    SCREEN.TABLET,
    SCREEN.DESKTOP,
    SCREEN.LARGE_DESKTOP,
  ]

  for (let i = 0; i < arr.length; i++) {
    if (width < arr[i]) {
      return arr[i - 1]
    }
  }

  return SCREEN.LARGE_DESKTOP
}
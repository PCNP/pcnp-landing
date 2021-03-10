import { useEffect, useLayoutEffect, useState } from 'react'

import { getScreen, SCREEN } from './tsUtils'


const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useScreenSize = () => {
  const [screen, setSize] = useState(SCREEN.ZERO_VALUE)

  useIsomorphicLayoutEffect(() => {
    const updateSize = () => {
      const newValue = getScreen(window.innerWidth)

      if (newValue !== screen) {
        setSize(getScreen(window.innerWidth))
      }
    }

    window.addEventListener('resize', updateSize)
    
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [screen])

  return screen
}
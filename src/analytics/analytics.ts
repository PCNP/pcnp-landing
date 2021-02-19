import { NextRouter } from 'next/dist/client/router'
import { useEffect } from 'react'


export const YM_TRACKING_ID = ''

declare global {
  interface Window {
    ym: any
  }
}

export const pageView = (url: URL): void => {
  if (process.env.NODE_ENV === 'production') {
    // https://yandex.ru/support/metrica/objects/hit.html
    window.ym(YM_TRACKING_ID, 'hit', url)
  }
}

export const useAnalytics = (router: NextRouter) => {
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageView(url)
    }
  
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
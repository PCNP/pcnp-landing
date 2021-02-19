import React from 'react'

import { YM_TRACKING_ID } from 'src/analytics/analytics'


export const AnalyticsScripts: React.FC = () => {
  return (
    <>
      { /* eslint-disable max-len */ }
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={
          {
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${YM_TRACKING_ID}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }
        }
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_TRACKING_ID}`}
            alt=''
            style={
              {
                position: 'absolute',
                left: -9999,
              }
            }
          />
        </div>
      </noscript>
      { /* eslint-disable max-len */ }
    </>
  )
}

import Script from 'next/script'
import React from 'react'

function Analytics() {
  return (
    <>
      <script async
        src={`https://www.googletagmanager.com/gtag/js?id=G-4PE4JSE030`}
      />

      <script 
      dangerouslySetInnerHTML={{
        __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4PE4JSE030',{
            page_path: window.location.pathname,
          });
        `
      }}
      />
    </>
  )
}

export default Analytics
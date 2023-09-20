import Script from 'next/script'
import React from 'react'

function Analytics() {
  return (
    <>
      <script async
        src={`https://www.googletagmanager.com/gtag/js?id=AW-11334924122`}
      />

      <script 
      dangerouslySetInnerHTML={{
        __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11334924122',{
            page_path: window.location.pathname,
          });
        `
      }}
      />
    </>
  )
}

export default Analytics
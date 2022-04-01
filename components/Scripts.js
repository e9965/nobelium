import Script from 'next/script'
import BLOG from '@/blog.config'

const Scripts = () => (
  <>
  
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.js" integrity="sha384-0fdwu/T/EQMsQlrHCCHoH10pkPLlKA1jL5dFyUOvB3lfeT2540/2g6YgSi2BL14p"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/contrib/mhchem.min.js" integrity="sha384-UEY9IRPkV+TTTY7nK1wSrfhWPDJy9wr4PmYg3DLPcN5F4NDlIwGZkWtWveKR/45c"></script>
    {BLOG.analytics && BLOG.analytics.provider === 'ackee' && (
      <Script
        src={BLOG.analytics.ackeeConfig.tracker}
        data-ackee-server={BLOG.analytics.ackeeConfig.dataAckeeServer}
        data-ackee-domain-id={BLOG.analytics.ackeeConfig.domainId}
      />
    )}
    {/* {BLOG.autoCollapsedNavBar === true && (
      <Script strategy="lazyOnload">
        {`var windowTop=0;
          function scrollTrigger(){
              let scrollS = window.scrollY;
              let nav = document.querySelector('.sticky-nav');
              if(scrollS >= windowTop){
                  nav.style.opacity = 0;
                  windowTop = scrollS;
              }else{
                  nav.style.opacity = 1;
                  windowTop = scrollS;
              }
          };
          window.addEventListener('scroll',scrollTrigger);`}
      </Script>
    )} */}
    {BLOG.analytics && BLOG.analytics.provider === 'ga' && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.analytics.gaConfig.measurementId}`}
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${BLOG.analytics.gaConfig.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
  </>
)

export default Scripts

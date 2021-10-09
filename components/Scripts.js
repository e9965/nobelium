import Script from 'next/script'
import BLOG from '@/blog.config'

const Scripts = () => (
  <>
    <script src="https://blog.co2fe.cf/usr/waifu/auto_waifu.js"></script>
  <script>
var s1 = '2022-04-23';//设置为你的建站时间
s1 = new Date(s1.replace(/-/g, "/"));
s2 = new Date();
var days = s1.getTime() - s2.getTime();
days =parseInt( days / (1000 * 60 * 60 * 24));
var number_of_years = parseInt(days/365);
days%=365;
var number_of_months = parseInt(days/30);
days%=30;
var number_of_days = parseInt(days);
var timeHTML="距離DSE還剩下：";
if(number_of_years)
    timeHTML+=number_of_years+"年";
if(number_of_months)
    timeHTML+=number_of_months+"月";
if(number_of_days)
    timeHTML+=number_of_days+"天。";
document.getElementById('times').innerHTML = timeHTML;
  </script>
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

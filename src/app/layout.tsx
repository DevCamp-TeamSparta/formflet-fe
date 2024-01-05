import './globals.css';
import Script from 'next/script';
import ModalPortal from '@/components/modal/ModalPortal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="formflet" />
        <meta property="og:url" content="https://app.formflet.co" />
        <meta
          property="og:description"
          content="노션 웹사이트 제작부터 폼 빌딩, 데이터 관리까지 해주는 올인원 모집 서비스!"
        />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Script
          id="channelTalk"
          dangerouslySetInnerHTML={{
            __html: `(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
            ChannelIO('boot', {
              "pluginKey": "${process.env.NEXT_PUBLIC_CHANNEL_TALK_API_KEY}",
            });`,
          }}
        />
        {children}
        <ModalPortal />
      </body>
    </html>
  );
}

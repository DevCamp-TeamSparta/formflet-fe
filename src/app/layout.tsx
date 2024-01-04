import Header from '@/components/basic/Header';
import './globals.css';
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
        {/* <meta property='og:image' content='' /> */}
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Header />
        {children}
        <ModalPortal />
      </body>
    </html>
  );
}

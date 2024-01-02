import './globals.css';
import ModalPortal from '@/components/modal/ModalPortal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="폼플렛 제목" />
        <meta property="og:description" content="폼플렛 설명" />
        {/* <meta property="og:image" content={} /> */}
        <meta property="og:url" content="https://app.formflet.co" />
      </head>
      <body>
        {children}
        <ModalPortal />
      </body>
    </html>
  );
}

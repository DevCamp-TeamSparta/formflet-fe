import './globals.css';
import ModalPortal from '@/components/modal/ModalPortal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ModalPortal />
      </body>
    </html>
  );
}

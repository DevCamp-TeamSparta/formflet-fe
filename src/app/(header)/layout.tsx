import Header from '@/components/basic/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="pt-[128px]">{children}</div>
    </div>
  );
}

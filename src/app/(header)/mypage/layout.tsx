import NavHeader from '@/components/basic/NavHeader';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavHeader />
      {children}
    </div>
  );
}

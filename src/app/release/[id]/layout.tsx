import NavHeader from '@/components/basic/NavHeader';

export default function ReleaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavHeader />
      {children}
    </div>
  );
}

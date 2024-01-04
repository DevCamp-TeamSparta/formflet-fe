export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="pt-[128px]">{children}</div>
    </div>
  );
}

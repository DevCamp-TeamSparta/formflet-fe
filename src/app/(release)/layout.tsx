export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="w-full h-[72px] flex flex-col justify-end items-center gap-[22px] shrink-0 pt-[22px]" />
      <hr className="text-gray-light-active self-stretch" />
      {children}
    </div>
  );
}

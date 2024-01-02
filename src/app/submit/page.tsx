import MadeLogo from '@/components/MadeLogo';

export default function SubmitPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center gap-[30px] flex-[1_0_0] self-stretch">
        <p className="h1-bold text-gray-dark-active">응답이 제출되었습니다.</p>
        <MadeLogo />
      </div>
    </div>
  );
}

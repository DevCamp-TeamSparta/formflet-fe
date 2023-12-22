import FlexLogo from '../../public/svg/FlexLogo';

export default function SuccessSubmit() {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px] flex-[1_0_0] self-stretch">
      <p className="h1-bold text-gray-dark-active">응답이 제출되었습니다.</p>
      <p className="b1-bold text-gray-dark-active flex justify-center items-center">
        Made by
        <FlexLogo />
      </p>
    </div>
  );
}

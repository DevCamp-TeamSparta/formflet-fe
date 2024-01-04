import ImacImage from '../../public/svg/ImacImage';

export default function Home() {
  return (
    <div className="flex flex-col items-center relative w-full h-full pt-[120px]">
      <div className="flex flex-col h-full items-center gap-5 ">
        <p className="t1-bold text-purple-normal-normal">모집의 시작부터 끝까지, 폼플렛</p>
        <p className="h2 text-gray-dark-active">
          노션 웹사이트 제작부터 폼 빌딩, 데이터 관리까지 해주는 올인원 모집 서비스!
        </p>
        <p className="h2 text-gray-dark-active">
          번거롭던 모집 프로세스를 폼플렛으로 스마트하게 해결하세요!
        </p>
        <ImacImage />
      </div>
      <div className="fixed w-1/2 flex justify-center bottom-10 left-1/2 transform -translate-x-1/2  box-shadow-normal box-active-shadow-normal py-5 px-5 rounded-lg">
        <p className="h2-bold text-gray-dark-active">2024.01.05 (금) 출시예정</p>
      </div>
    </div>
  );
}

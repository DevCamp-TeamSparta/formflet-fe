import Link from 'next/link';
import ImacImage from '../../public/svg/ImacImage';
import PATH from '@/constants/path/Path';

export default function Home() {
  return (
    <div className="flex flex-col items-center relative w-full h-full pt-[120px]">
      <div className="flex flex-col items-center h-full gap-5 ">
        <p className="t1-bold text-purple-normal-normal">모집의 시작부터 끝까지, 폼플렛</p>
        <p className="h2 text-gray-dark-active">
          노션 웹사이트 제작부터 폼 빌딩, 데이터 관리까지 해주는 올인원 모집 서비스!
        </p>
        <p className="h2 text-gray-dark-active">
          번거롭던 모집 프로세스를 폼플렛으로 스마트하게 해결하세요!
        </p>
        <ImacImage />
      </div>
      <Link
        className="fixed flex justify-center w-1/2 px-5 py-5 transform -translate-x-1/2 rounded-lg bottom-10 left-1/2 box-shadow-normal box-active-shadow-normal"
        href={PATH.ROUTE.LOGIN}
      >
        <p className="h2-bold text-purple-normal-active">로그인 하러 가기</p>
      </Link>
    </div>
  );
}

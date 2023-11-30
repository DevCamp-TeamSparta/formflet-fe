import Link from 'next/link';
import PATH from '@/constants/path/Path';
import Logout from '@/components/common/Logout';

export default function Home() {
  return (
    <>
      <Link href={PATH.ROUTE.LOGIN}>로그인</Link>
      <Logout />
      <Link href={PATH.ROUTE.JOIN}>회원가입</Link>
    </>
  );
}

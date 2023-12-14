import Link from 'next/link';
import PATH from '@/constants/path/Path';

export default function Home() {
  return (
    <>
      <Link href={PATH.ROUTE.LOGIN}>로그인</Link>
      <Link href={PATH.ROUTE.JOIN}>회원가입</Link>
    </>
  );
}

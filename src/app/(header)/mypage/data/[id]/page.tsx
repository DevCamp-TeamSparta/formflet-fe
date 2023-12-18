import DataDetailContainer from '@/containers/mypage/data/[id]/DataDetailContainer';

const Dummy = {
  name: '김르탄',
  age: 30,
  gender: '남',
  phone: '0101234567812341234',
  job: '개발자',
  email: 'rtan@gmail.com',
  career: '3년',
  email2: 'rtan@gmail.com',
  email3: 'rtan@gmail.com',
};

const Dummies = Array(100).fill(Dummy);

export default function DataDetailPage() {
  return <DataDetailContainer data={Dummies} />;
}

import DataItem from '@/containers/mypage/data/DataItem';

const Dummy = [
  {
    id: 1,
    title: 'Web1',
    status: 'Exist',
    num: 200,
  },
  {
    id: 2,
    title: 'Web2',
    status: 'None',
    num: 0,
  },
];

export default function DataListContainer() {
  return (
    <div className="py-[40px] w-[850px] space-y-[20px]">
      {Dummy.map((d) => (
        <DataItem key={d.title} data={d} />
      ))}
    </div>
  );
}

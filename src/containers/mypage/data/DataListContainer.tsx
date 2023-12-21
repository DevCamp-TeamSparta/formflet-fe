'use client';

import { useEffect } from 'react';
import DataItem from '@/containers/mypage/data/DataItem';
import pages from '@/services/api/pages/pages';

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
  const replyList: Array<PageList[]> = [];
  useEffect(() => {
    const fetchData = async () => {
      const response = await pages();

      return response.data.data;
    };
    fetchData()
      .then((result) => {
        replyList.push(result);
      })
      .catch((e) => console.log(e));
    console.log(replyList);
  }, []);
  return (
    <div className="py-[40px] w-[850px] space-y-[20px]">
      {Dummy.map((d) => (
        <DataItem key={d.title} data={d} />
      ))}
    </div>
  );
}

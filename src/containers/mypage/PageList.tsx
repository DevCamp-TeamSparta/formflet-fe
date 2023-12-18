'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import pages from '@/services/api/pages/pages';
import PATH from '@/constants/path/Path';
import { StateSetString } from '@/types/type';

export default function PageList({ setIsVisibled }: StateSetString) {
  const [pageList, setPageList] = useState<PageList[]>([]);

  const fetchPages = async (): Promise<PageList[]> => {
    try {
      const response = await pages();
      const { data } = response.data;

      return data;
    } catch (e) {
      console.error('Error fetching pages:', e);

      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPages();

      if (data.length >= 1) {
        setIsVisibled('hidden');
      } else {
        setIsVisibled('visible');
      }

      setPageList(data);
    };

    fetchData().catch((e) => alert(e));
  }, [setIsVisibled]);

  return (
    <div>
      {pageList &&
        pageList.map((item) => (
          <Link
            className="flex w-[848px] h-[108px] justify-center items-center bg-gray-light-normal border border-gray-light-active box-shadow-normal px-8 py-[26px] mb-4  rounded-lg border-solid "
            key={item.id}
            href={`${PATH.ROUTE.EDIT}/${item.id}`}
          >
            <div className="flex w-[336.667px] flex-col  items-center gap-0.5 shrink-0">
              <p className="b1-bold text-gray-dark-active">{item.title}</p>
              <p className="b2 text-gray-dark-active">{item.domain}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

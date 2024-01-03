'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import pages from '@/services/api/pages/pages';
import PATH from '@/constants/path/Path';
import { SetStateString } from '@/types/type';
import ArrowRightCircle from '../../../public/svg/ArrowRightCircle';

export default function PageList({ setStateString }: SetStateString) {
  const [pageList, setPageList] = useState<PageList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await pages();

        const { data } = response.data;

        if (data.length >= 4) {
          setStateString('hidden');
        } else {
          setStateString('visible');
        }

        setPageList(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData().catch(() => {});
  }, []);

  return (
    <div>
      {pageList &&
        pageList.map((item) => (
          <Link
            className="flex w-[848px] h-[108px] justify-between items-center bg-white border border-gray-light-active hover:border-gray-normal-normal box-shadow-normal px-[64px] py-[26px] mb-4 rounded-lg border-solid "
            key={item.id}
            href={`${PATH.ROUTE.EDIT}/${item.id}`}
          >
            <div className="flex flex-col items-start gap-0.5 shrink-0">
              <p className="b1-bold text-gray-dark-active">{item.title}</p>
              <p className="b2 text-gray-dark-active">{item.domain}</p>
            </div>
            <ArrowRightCircle color="#484848" />
          </Link>
        ))}
    </div>
  );
}

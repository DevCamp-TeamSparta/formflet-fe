'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import pages from '@/services/api/pages/pages';

const fetchPages = async () => {
  try {
    const response = await pages();
    const data = response.data.data;
    return data;
  } catch (e) {
    console.error('Error fetching pages:', e);
    return [];
  }
};

export default function PageList() {
  const [pageList, setPageList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPages();
      setPageList(data);
    };

    fetchData(); // 함수 호출
  }, []);

  return (
    <div>
      {pageList &&
        pageList.map((item) => (
          <Link
            className="flex w-[848px] h-[108px] justify-center items-center bg-gray-light-normal border border-gray-light-active box-shadow-normal px-8 py-[26px] mb-4  rounded-lg border-solid "
            key={item.id}
            href={`/release/${item.id}`}
          >
            <div className="flex w-[336.667px] flex-col  items-center gap-0.5 shrink-0">
              <p className="b1-bold text-gray-dark-active">{item.title}</p>
              <p className="b2 text-gray-dark-active">{`${item.customDomain}.formflet.co/`}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

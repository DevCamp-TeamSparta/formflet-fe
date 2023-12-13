'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import pages from '@/services/api/pages/pages';

const fetchPages = async () => {
  try {
    const response = await pages();
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error('Error fetching pages:', error);
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
    <div className="flex-col">
      {pageList &&
        pageList.map((item) => (
          <Link key={item.id} href={`/mypage/edit/${item.id}`}>
            <div>
              <p>{item.title}</p>
              <p>{item.customDomain}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

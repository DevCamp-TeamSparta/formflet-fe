'use client';

import { CSSProperties } from 'react';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism.css';
import { Code } from 'react-notion-x/build/third-party/code';
import '../../styles/notion.css';
import { NotionRenderer } from 'react-notion-x';
import { useFontStore } from '@/containers/mypage/store';

interface NotionProps {
  recordMap: string;
}
export default function NotionComponent({ recordMap }: NotionProps) {
  const recordMapJson = JSON.parse(recordMap);
  const font = useFontStore((state) => state.font);
  return (
    <div style={{ '--notion-font': font } as CSSProperties}>
      <NotionRenderer
        recordMap={recordMapJson}
        components={{
          Code,
        }}
        fullPage
      />
    </div>
  );
}

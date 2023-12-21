'use client';

import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism.css';
import '../../styles/notion.css';
import { NotionRenderer } from 'react-notion-x';
import { useFontStore } from '@/store/store';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
);

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
          Collection,
          Equation,
        }}
        fullPage
      />
    </div>
  );
}

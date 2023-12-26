'use client';

import { CSSProperties } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { useFontStore } from '@/store/store';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism.css';
import '../../styles/notion.css';

interface NotionProps {
  recordMap: string;
}
export default function NotionComponent({ recordMap }: NotionProps) {
  const recordMapJson = JSON.parse(recordMap);
  const font = useFontStore((state) => state.font);
  return (
    <div style={{ '--notion-font': font } as CSSProperties}>
      <NotionRenderer
        disableHeader
        recordMap={recordMapJson}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
        }}
        fullPage
      />
    </div>
  );
}

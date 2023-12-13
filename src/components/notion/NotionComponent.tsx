'use client';

import { CSSProperties, useRef } from 'react';
import styles from '../../styles/notion.css';
import 'prismjs/themes/prism-tomorrow.css';
import {
  useRemoveTopbar,
  useSetAnchorSrc,
  useSetFrameWidth,
  useSetImageSrc,
  useSetToggle,
} from '@/hooks/pages/NotionHooks';
import { useFontStore } from '@/containers/mypage/store';

export default function NotionComponent({
  notionBodyHTML,
  domainName,
}: {
  notionBodyHTML: string;
  domainName: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useSetToggle(ref);
  useRemoveTopbar(ref);
  useSetFrameWidth(ref);
  useSetImageSrc(ref, domainName);
  useSetAnchorSrc(ref, domainName);

  const font = useFontStore((state) => state.font);
  return (
    <div style={{ '--notion-font-family': font } as CSSProperties}>
      <div
        ref={ref}
        className={`notion-content ${styles.pseudoBefore} ${styles.layout} ${styles.layoutFull}  ${styles.layoutContent}`}
        dangerouslySetInnerHTML={{ __html: notionBodyHTML }}
      />
    </div>
  );
}

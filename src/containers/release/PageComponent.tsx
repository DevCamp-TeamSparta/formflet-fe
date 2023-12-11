'use client';

import { useRef } from 'react';
import {
  useSetAnchorSrc,
  useSetFrameWidth,
  useSetImageSrc,
  useSetToggle,
} from '@/hooks/pages/pageHooks';
import styles from '../../styles/notion.css';

export default function PageComponent({
  notionBodyHTML,
  domainName,
}: {
  notionBodyHTML: string;
  domainName: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useSetToggle(ref);
  useSetFrameWidth(ref);
  useSetImageSrc(ref, domainName);
  useSetAnchorSrc(ref, domainName);

  return (
    <div>
      <div
        ref={ref}
        className={`notion-content ${styles.pseudoBefore} ${styles.layout} ${styles.layoutFull}  ${styles.layoutContent}`}
        dangerouslySetInnerHTML={{ __html: notionBodyHTML }}
      />
    </div>
  );
}

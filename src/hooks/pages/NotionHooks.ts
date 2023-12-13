import React, { useEffect, useRef } from 'react';
import useFontStore from '@/containers/mypage/store';

export function useSetToggle(ref: React.RefObject<HTMLElement>) {
  const isClicked = useRef(false);
  const font = useFontStore((state) => state.font);
  useEffect(() => {
    if (!ref.current) return undefined;
    const toggles = ref.current.querySelectorAll('div[aria-label="닫기"]');
    const addClickEvent = (event: Event) => {
      const toggle = event.currentTarget as HTMLElement;
      const svg = toggle.querySelector('svg');
      const sibling = toggle.parentElement?.nextElementSibling;
      if (sibling) {
        Array.from(sibling.children).forEach((element, index) => {
          if (index === 0) return;
          const child = element as HTMLElement;
          if (child instanceof HTMLElement) {
            if (child.style.display === 'none') {
              child.style.display = 'flex';
              if (svg) {
                svg.style.transform = 'rotate(180deg)';
              }
            } else {
              child.style.display = 'none';
              if (svg) {
                svg.style.transform = 'rotate(90deg)';
              }
            }
          }
        });
      }
      toggle.click();
    };
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', addClickEvent);
    });
    if (!isClicked.current) {
      isClicked.current = true;
      // toggles.forEach((toggle) => {
      //   toggle.click();
      // });
    }
    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener('click', addClickEvent);
      });
    };
  }, [ref, font]);
}

export function useSetFrameWidth(ref: React.RefObject<HTMLElement>) {
  const font = useFontStore((state) => state.font);
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current.querySelector('.notion-frame');
    if (!element) return;
    if (element instanceof HTMLElement) {
      element.style.width = '100%';
    }
    const cursor = ref.current.querySelector('.notion-cursor-listener');
    if (!cursor) return;
    if (cursor instanceof HTMLElement) {
      cursor.style.width = '100%';
    }
  }, [ref, font]);
}

export function useSetImageSrc(ref: React.RefObject<HTMLElement>, domainName: string) {
  const font = useFontStore((state) => state.font);
  useEffect(() => {
    if (ref.current) {
      const images = ref.current.querySelectorAll('img');
      images.forEach((img) => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('https://')) {
          const imgSrc = `https://${domainName}${src}`;
          img.setAttribute('src', imgSrc);
        }
      });
    }
  }, [ref, domainName, font]);
}

export function useSetAnchorSrc(ref: React.RefObject<HTMLElement>, domainName: string) {
  useEffect(() => {
    if (ref.current) {
      const anchors = ref.current.querySelectorAll('a');
      anchors.forEach((anchor) => {
        const src = anchor.getAttribute('href');
        if (src && !src.startsWith('https://')) {
          const anchorSrc = `https://${domainName}${src}`;
          anchor.setAttribute('href', anchorSrc);
        }
      });
    }
  }, [ref, domainName]);
}

export function useRemoveTopbar(ref: React.RefObject<HTMLElement>) {
  const font = useFontStore((state) => state.font);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const topbar = ref.current.querySelector('header');
    if (!topbar) return;
    while (topbar.hasChildNodes()) {
      const child = topbar.firstChild;
      if (child) {
        topbar.removeChild(child);
      }
    }
  }, [ref, font]);
}

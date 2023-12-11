import React, { useEffect } from 'react';

export function useSetToggle(ref: React.RefObject<HTMLElement>) {
  let clicked = false;
  useEffect(() => {
    if (!ref.current) return;

    const toggles = ref.current.querySelectorAll('div[aria-label="닫기"]');

    const addClickEvent = (event: Event) => {
      const toggle = event.currentTarget as HTMLElement;
      const svg = toggle.querySelector('svg');
      const sibling = toggle.parentElement.nextElementSibling;
      Array.from(sibling.children).forEach((child, index) => {
        if (index === 0) return;
        if (child instanceof HTMLElement) {
          if (child.style.display === 'none') {
            child.style.display = 'flex';
            svg.style.transform = 'rotate(180deg)';
          } else {
            child.style.display = 'none';
            svg.style.transform = 'rotate(90deg)';
          }
        }
      });
    };
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', addClickEvent);
    });
    if (!clicked) {
      clicked = true;
      toggles.forEach((toggle: HTMLElement) => {
        toggle.click();
      });
    }
    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener('click', addClickEvent);
      });
    };
  }, [ref.current]);
}

export function useSetFrameWidth(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current.querySelector('.notion-frame');
    if (!element) return;
    if (element instanceof HTMLElement) {
      element.style.width = '100%';
    }
  }, [ref.current]);
}

export function useSetImageSrc(ref: React.RefObject<HTMLElement>, domainName: string) {
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
  }, [ref, domainName]);
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

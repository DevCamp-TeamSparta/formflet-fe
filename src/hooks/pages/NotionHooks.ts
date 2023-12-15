import React, { useEffect } from 'react';

export function useSetToggle(ref: React.RefObject<HTMLElement>) {
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
    };
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', addClickEvent);
    });

    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener('click', addClickEvent);
      });
    };
  }, [ref]);
}

export function dummy() {}

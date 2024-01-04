'use client';

import React, { useEffect, useRef } from 'react';
import NotionComponent from '@/components/notion/NotionComponent';
import { useCtaStore, useDisplayStore, usePageStore, useFormStore } from '@/store/store';
import EditForm from './EditForm';
import EditFormView from './EditFormView';
import EditFormExample from './EditFormExample';
import CtaComponent from '@/components/cta/CtaComponent';
import { LoadState } from '@/types/type';

export default function EditDisplay({ isLoaded }: LoadState) {
  const { display } = useDisplayStore((state) => ({
    display: state.display,
    setDisplay: state.setDisplay,
  }));
  const pageStore = usePageStore();
  const { form } = useFormStore((state) => ({
    form: state.form,
  }));
  const ctaStore = useCtaStore();

  const resizer = useRef<HTMLDivElement>(null);
  const leftSide = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const resizerCurrent = resizer.current;

    const mouseMoveHandler = (e: MouseEvent): void => {
      if (!resizerCurrent || !leftSide.current) return;

      const dx = e.clientX - resizerCurrent.getBoundingClientRect().left;
      const parentElement = resizerCurrent.parentNode as HTMLElement;

      if (parentElement) {
        const newLeftWidth =
          ((leftSide.current.getBoundingClientRect().width + dx) * 100) /
          parentElement.getBoundingClientRect().width;
        leftSide.current.style.width = `${newLeftWidth}%`;
      }
    };

    const mouseUpHandler = (): void => {
      document.body.style.removeProperty('cursor');

      if (leftSide.current && rightSide.current) {
        leftSide.current.style.removeProperty('user-select');
        leftSide.current.style.removeProperty('pointer-events');
        rightSide.current.style.removeProperty('user-select');
        rightSide.current.style.removeProperty('pointer-events');
      }

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    const mouseDownHandler = (): void => {
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };
    if (resizerCurrent) {
      resizerCurrent.addEventListener('mousedown', mouseDownHandler);
    }

    return () => {
      if (resizerCurrent) {
        resizerCurrent.removeEventListener('mousedown', mouseDownHandler);
      }
    };
  }, [display]);

  return (
    <div className="m-[20px_20px_20px_0] grow w-full min-h-full border rounded-[8px] border-gray-light-active overflow-hidden">
      {
        {
          display: isLoaded && (
            <div>
              <NotionComponent recordMap={pageStore.pageContent} />
              <div className="fixed bottom-10 left-[58%] transform -translate-x-1/2">
                {ctaStore.ctaStatus && (
                  <CtaComponent
                    params={{
                      subdomain: '',
                    }}
                  />
                )}
              </div>
            </div>
          ),
          form: (
            <div className="flex w-full h-full">
              <div
                ref={leftSide}
                className="flex w-1/2 flex-col items-start gap-5 box-shadow-normal p-[30px]"
              >
                <EditFormExample />
                <EditForm />
              </div>
              <div
                ref={resizer}
                className="cursor-ew-resize h-full w-2.5 bg-gray-light-active shrink-0"
              />
              <div ref={rightSide} className="flex items-center overflow-hidden">
                <EditFormView form={form} formId={0} />
              </div>
            </div>
          ),
        }[display]
      }
    </div>
  );
}

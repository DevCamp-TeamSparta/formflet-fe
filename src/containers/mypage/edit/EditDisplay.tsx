'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import NotionComponent from '@/components/notion/NotionComponent';
import pageContent from '@/services/api/pages/pageContent';
import {
  useCtaStore,
  useDisplayStore,
  usePageStore,
  useFontStore,
  useFormStore,
} from '@/store/store';
import EditForm from './EditForm';
import EditFormView from './EditFormView';
import Button from '@/components/basic/Button';
import NotionIcon from '../../../../public/svg/NotionIcon';
import DeskAlt from '../../../../public/svg/DeskAlt';
import EditFormExample from './EditFormExample';
import CtaComponent from '@/components/cta/CtaComponent';

export default function EditDisplay({ pageId }: PageProps) {
  const [isloaded, setIsLoaded] = useState(false);
  const { display, setDisplay } = useDisplayStore((state) => ({
    display: state.display,
    setDisplay: state.setDisplay,
  }));
  const pageStore = usePageStore();
  const { setFont } = useFontStore((state) => ({ setFont: state.setFont }));
  const { formStatus, form, setFormALl } = useFormStore((state) => ({
    formStatus: state.formStatus,
    form: state.form,
    setFormALl: state.setFormAll,
  }));
  const ctaStore = useCtaStore();

  const handleDisplay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.id === 'display-notion') {
      setDisplay('notion');
    }
    if (target.id === 'display-form') {
      setDisplay('form');
    }
  };

  useEffect(() => {
    setDisplay('notion');
    const getPageContent = async () => {
      const response = await pageContent({ pageId });
      return response.data.data;
    };
    const fetchPage = async (): Promise<void> => {
      const pageData = await getPageContent();
      pageStore.setDomain(pageData.domain);
      pageStore.setPageId(pageData.id);
      pageStore.setPageContent(pageData.pageDetail.content);
      pageStore.setUrl(pageData.url);
      setFont(pageData.pageFont.type);
      setFormALl(pageData.form[0]);
      ctaStore.setCtaAll(pageData.cta);

      setIsLoaded(true);
    };
    fetchPage().catch((e) => alert(e));
  }, [pageId]);

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
          notion: isloaded && (
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
              <div ref={rightSide} className="flex items-center flex-grow">
                <EditFormView form={form} formId={0} />
              </div>
            </div>
          ),
        }[display]
      }
      <div
        className={clsx(
          'fixed flex h-10 rotate-90 items-start gap-2 justify-between box-shadow-normal bg-purple-normal-normal px-2.5 py-2 rounded-[0px_0px_8px_8px] right-px top-[191px]',
          {
            visible: formStatus,
            invisible: !formStatus,
          },
        )}
      >
        <Button onClick={(e) => handleDisplay(e)} disabled={display === 'notion'}>
          <NotionIcon id="display-notion" color={display === 'notion' ? 'white' : '#D8B0FF'} />
        </Button>
        <Button onClick={(e) => handleDisplay(e)} disabled={display === 'form'}>
          <DeskAlt id="display-form" color={display === 'form' ? 'white' : '#D8B0FF'} />
        </Button>
      </div>
    </div>
  );
}

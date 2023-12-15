'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import NotionComponent from '@/components/notion/NotionComponent';
import pageContent from '@/services/api/pages/pageContent';
import { useDisplayStore, useDomainStore, useFontStore, useFormStore } from '../store';
import EditForm from './EditForm';
import EditPreView from './EditPreView';
import Button from '@/components/basic/Button';
import NotionIcon from '../../../../public/svg/NotionIcon';
import DeskAlt from '../../../../public/svg/DeskAlt';
import EditFormExample from './EditFormExample';

export default function EditDisplay({ pageId }: PageProps) {
  const [isloaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState({
    id: 0,
    content: '',
    url: '',
  });
  const { display, setDisplay } = useDisplayStore((state) => ({
    display: state.display,
    setDisplay: state.setDisplay,
  }));
  const { setDomain } = useDomainStore((state) => ({ setDomain: state.setDomain }));
  const { setFont } = useFontStore((state) => ({ setFont: state.setFont }));
  const { formStatus, setFormStatus, setForm } = useFormStore((state) => ({
    formStatus: state.formStatus,
    setFormStatus: state.setFormStatus,
    setForm: state.setForm,
  }));

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
    const getPageContent = async () => {
      const response = await pageContent({ pageId });
      return response.data.data;
    };
    const fetchPage = async (): Promise<void> => {
      const pageData = await getPageContent();
      setDomain(pageData.domain);
      setPage({
        id: pageData.id,
        content: pageData.pageContent.content,
        url: pageData.url,
      });
      setFont(pageData.pageFont.type);
      setFormStatus(pageData.form.status);
      setForm(pageData.form.guide);
      setIsLoaded(true);
    };
    fetchPage();
  }, [pageId, setDomain, setFont, setForm, setFormStatus]);

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
          notion: isloaded && <NotionComponent notionBodyHTML={page.content} />,
          form: (
            <div className="flex border border-gray-normal-normal w-full h-full">
              <div
                ref={leftSide}
                className="flex flex-grow flex-col items-start gap-5 box-shadow-normal p-[30px] rounded-[8px_0px_0px_8px] border-solid"
              >
                <EditFormExample />
                <EditForm />
              </div>
              <div ref={resizer} className="cursor-ew-resize h-full w-2.5 bg-gray-light-active" />
              <div ref={rightSide} className="flex flex-grow items-center">
                <EditPreView />
              </div>
            </div>
          ),
        }[display]
      }

      <div
        className={clsx(
          'flex z-10 h-10 rotate-90 items-start gap-2 absolute box-shadow-normal bg-purple-normal-normal px-2.5 py-2 rounded-[0px_0px_8px_8px] right-0.5 top-[191px]',
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

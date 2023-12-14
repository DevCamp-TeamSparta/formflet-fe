'use client';

import React, { useEffect, useState } from 'react';
import NotionComponent from '@/components/notion/NotionComponent';
import pageContent from '@/services/api/pages/pageContent';
import { useDisplayStore, useDomainStore } from '../store';
import EditForm from './EditForm';
import EditPreView from './EditPreView';
import Button from '@/components/basic/Button';
import NotionIcon from '../../../../public/svg/NotionIcon';
import DeskAlt from '../../../../public/svg/DeskAlt';

export default function EditDisplay({ pageId }: PageProps) {
  const [isloaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState({
    id: 0,
    content: '',
    url: '',
  });
  const { display, setDisplay } = useDisplayStore((state) => state);
  const { setDomain } = useDomainStore((state) => state);

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
      setIsLoaded(true);
    };
    fetchPage();
  }, [pageId, setDomain]);

  return (
    <div className="m-[20px_20px_20px_0] grow w-full min-h-full border rounded-[8px] border-gray-light-active overflow-hidden">
      {/* <div className="flex justify-end items-start flex-[1_0_0] self-stretch pl-0 pr-5 py-5"> */}
      {
        {
          notion: isloaded && (
            <NotionComponent
              notionBodyHTML={page.content}
              domainName={new URL(page.url).hostname}
            />
          ),
          form: (
            <div className="flex justify-end items-start flex-[1_0_0] self-stretch">
              <EditForm />
              <EditPreView />
            </div>
          ),
        }[display]
      }
      <div className="flex z-10 h-10 rotate-90 items-start gap-2 absolute box-shadow-normal bg-purple-normal-normal px-2.5 py-2 rounded-[0px_0px_8px_8px] right-1 top-[191px]">
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

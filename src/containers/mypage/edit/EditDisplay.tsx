'use client';

import { useEffect, useState } from 'react';
import NotionComponent from '@/components/notion/NotionComponent';
import pageContent from '@/services/api/pages/pageContent';
import { useEditPageStore } from '../store';
import EditForm from './EditForm';
import EditPreView from './EditPreView';

export default function EditDisplay({ pageId }: PageProps) {
  const [isloaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState({
    id: 0,
    content: '',
    url: '',
  });
  const editPage = useEditPageStore((state) => state.editPage);
  useEffect(() => {
    const getPageContent = async () => {
      const response = await pageContent({ pageId });
      return response.data.data;
    };
    const fetchPage = async () => {
      const pageData = await getPageContent();
      console.log(pageData);
      setPage({
        id: pageData.id,
        content: pageData.pageContent.content,
        url: pageData.url,
      });
      setIsLoaded(true);
      console.log('pageData : ', pageData);
    };
    fetchPage()
      .then((result) => console.log(result))
      .catch((result) => console.error(result));
  }, [pageId]);

  return (
    <div className="m-[20px_20px_20px_0] grow w-full min-h-full border rounded-[8px] border-gray-light-active overflow-hidden">
      {
        {
          notion: isloaded && <NotionComponent notionBodyHTML={page.content} />,
          form: (
            <div className="flex h-[840px] justify-center items-start">
              <EditForm />
              <EditPreView />
            </div>
          ),
        }[editPage]
      }
    </div>
  );
}

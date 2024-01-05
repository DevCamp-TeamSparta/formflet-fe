'use client';

import { useEffect, useState } from 'react';
import EditDisplay from './EditDisplay';
import EditSidebar from './EditSidebar';
import pageContent from '@/services/api/pages/pageContent';
import { useCtaStore, useFontStore, useFormStore, usePageStore } from '@/store/store';
import useModalStore from '@/store/modalStore';
import RouteBackModal from '@/components/modal/RouteBackModal';

export default function EditPageContainer({ pageId }: PageIdProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pageStore = usePageStore();
  const ctaStore = useCtaStore();
  const { setFont } = useFontStore((state) => ({ setFont: state.setFont }));
  const { setFormALl } = useFormStore((state) => ({
    setFormALl: state.setFormAll,
  }));
  const setModal = useModalStore((state) => state.setModal);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    const browserPreventEvent = (e: (modal: React.ReactNode) => void) => {
      window.history.pushState(null, '', window.location.href);
      e(<RouteBackModal />);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', () => {
      browserPreventEvent(setModal);
    });
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', () => {
        browserPreventEvent(setModal);
      });
    };
  }, []);

  useEffect(() => {
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
    fetchPage().catch(() => {});
  }, [pageId]);

  return (
    <div className="flex">
      <EditSidebar />
      <EditDisplay isLoaded={isLoaded} />
    </div>
  );
}

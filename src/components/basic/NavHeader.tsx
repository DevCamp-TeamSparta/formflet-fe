'use client';

import { useParams, usePathname } from 'next/navigation';
import axios from 'axios';
import PATH from '@/constants/path/Path';
import Button from './Button';
import CopyIcon from '../../../public/svg/CopyIcon';
import SaveIcon from '../../../public/svg/SaveIcon';
import ReloadIcon from '../../../public/svg/ReloadIcon';
import pageSave from '@/services/api/pages/pageSave';
import { useCtaStore, usePageStore, useFontStore, useFormStore } from '@/store/store';

export default function NavHeader() {
  const pathName = usePathname();
  const params = useParams();
  const path = params.pageId as string;
  const navList = PATH.ROUTE.NAV_LIST;

  let navItem = '';
  navList.forEach((item) => {
    if (item.href === pathName) {
      navItem = item.text;
    }
  });

  const { domain, url, pageContent, setPageContent } = usePageStore((state) => ({
    domain: state.domain,
    url: state.url,
    pageContent: state.pageContent,
    setPageContent: state.setPageContent,
  }));
  const { font } = useFontStore((state) => ({ font: state.font }));
  const { formStatus, form, createForm } = useFormStore((state) => ({
    formStatus: state.formStatus,
    form: state.form,
    createForm: state.createForm,
  }));
  const { ctaStatus, ctaContent, ctaLink, ctaFontSize, ctaFontColor, ctaBackColor } = useCtaStore(
    (state) => ({
      ctaStatus: state.ctaStatus,
      ctaContent: state.ctaContent,
      ctaLink: state.ctaLink,
      ctaFontSize: state.ctaFontSize,
      ctaFontColor: state.ctaFontColor,
      ctaBackColor: state.ctaBackColor,
    }),
  );

  const handleSave = async (): Promise<void> => {
    const data = {
      content: pageContent,
      font: {
        type: font,
      },
      form: {
        status: formStatus,
        guide: form,
        createForm,
      },
      cta: {
        status: ctaStatus,
        content: ctaContent,
        link: ctaLink,
        fontSize: ctaFontSize,
        fontColor: ctaFontColor,
        backgroundColor: ctaBackColor,
      },
    };
    const response = await pageSave(path, data);

    // TODO: 성공 시 모달창 띄우기
    if (response.status === 200) {
      alert('성공!');
    }
  };

  const handleRefresh = async () => {
    await axios
      .post<{ page: Record<string, object> }>('/api/notion', {
        url,
      })
      .then((response) => {
        const content = JSON.stringify(response.data.page);
        setPageContent(content);
      });
  };

  const handleWindowOpen = () => {
    window.open(`https://${domain}`);
  };

  return (
    <header className="w-full top-[64px] h-[64px] fixed flex flex-col justify-between items-center shrink-0 z-10 bg-white">
      {pathName.startsWith('/mypage/edit') ? (
        <div className="w-[849px] justify-between items-center flex pt-[12px]">
          <Button
            className="flex w-[762px] h-9 justify-between items-center shrink-0 border border-gray-light-active box-shadow-normal px-5 py-4 rounded-lg border-solid b1-bold text-gray-dark-active"
            onClick={handleWindowOpen}
          >
            {domain}
            <CopyIcon />
          </Button>
          <Button className="w-6 h-6 shrink-0" onClick={() => handleRefresh()}>
            <ReloadIcon />
          </Button>
          <Button className="w-6 h-6 shrink-0" onClick={() => handleSave()}>
            <SaveIcon />
          </Button>
        </div>
      ) : (
        <div className="w-[850px] h-9 flex justify-between items-center shrink-0 pt-[22px]">
          <p className="b1-bold text-gray-dark-active">{navItem}</p>
        </div>
      )}
      <hr className="self-stretch text-gray-light-active" />
    </header>
  );
}

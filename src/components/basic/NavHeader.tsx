'use client';

import { useParams, usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';
import Button from './Button';
import CopyIcon from '../../../public/svg/CopyIcon';
import SaveIcon from '../../../public/svg/SaveIcon';
import ReloadIcon from '../../../public/svg/ReloadIcon';
import pageSave from '@/services/api/pages/pageSave';
import { useCtaStore, useDomainStore, useFontStore, useFormStore } from '@/store/store';
import PageRefresh from '@/services/api/pages/pageRefresh';

export default function NavHeader() {
  const pathName = usePathname();
  // const path = pathName.charAt(pathName.length - 1);
  const params = useParams();
  const path = params.pageId as string;
  const navList = PATH.ROUTE.NAV_LIST;

  let navItem = '';
  navList.forEach((item) => {
    if (item.href === pathName) {
      navItem = item.text;
    }
  });

  const domain = useDomainStore((state) => state.domain);
  const { font } = useFontStore((state) => ({ font: state.font }));
  const { formStatus, form } = useFormStore((state) => ({
    formStatus: state.formStatus,
    form: state.form,
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
      font: {
        type: font,
      },
      form: {
        status: formStatus,
        guide: form,
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
    const response = await pageSave(data, path);

    // TODO: 성공 시 모달창 띄우기
    if (response.status === 200) {
      alert('성공!');
    }
  };

  // TODO: 새로고침 모달창 넣기
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const [isRefreshNotion, setIsRefreshNotion] = useState(false);

  const handleRefresh = async () => {
    // if (isRefreshNotion) {
    await PageRefresh(path);
    // setIsOpenModal(false);
    window.location.reload();
    // }
  };

  return (
    <header className="w-full h-[72px] flex flex-col justify-end items-center gap-[22px] shrink-0 pt-[22px]">
      {pathName.startsWith('/mypage/edit') ? (
        <div className="w-[849px] justify-between items-center h-9 flex">
          <Button className="flex w-[762px] h-9 justify-between items-center shrink-0 border border-gray-light-active box-shadow-normal px-5 py-4 rounded-lg border-solid">
            <p className="text-gray-dark-active text-base not-italic font-bold leading-7">
              {domain}
            </p>
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
        <div className="w-[850px] h-9 flex justify-between items-center shrink-0">
          <p className="b1-bold text-gray-dark-active">{navItem}</p>
        </div>
      )}
      <hr className="text-gray-light-active self-stretch" />
    </header>
  );
}

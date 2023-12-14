'use client';

import { usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';
import Button from './Button';
import CopyIcon from '../../../public/svg/CopyIcon';
import SaveIcon from '../../../public/svg/SaveIcon';
import ReloadIcon from '../../../public/svg/ReloadIcon';
import pageSave from '@/services/api/pages/pageSave';
import { useDomainStore, useFontStore } from '@/containers/mypage/store';

export default function NavHeader() {
  const pathName = usePathname();
  const path = pathName.charAt(pathName.length - 1);
  const navList = PATH.ROUTE.NAV_LIST;

  let navItem = '';

  navList.forEach((item) => {
    if (item.href === pathName) {
      navItem = item.text;
    }
  });
  const domain = useDomainStore((state) => state.domain);
  const font = useFontStore((state) => state.font);

  const data = {
    type: font,
  };
  const handleSubmit = async () => {
    const response = await pageSave(data, path);

    console.log(response);
  };

  return (
    <header className="w-full h-[72px] flex flex-col justify-end items-center gap-[22px] shrink-0 pt-[22px]">
      {pathName.startsWith('/mypage/edit') ? (
        <div className="w-[849px] justify-between items-center h-9 flex">
          <Button className="flex w-[762px] h-9 justify-between items-center shrink-0 border border-[color:var(--Grey-light-active,#E1E2E2)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] px-5 py-4 rounded-lg border-solid">
            <p className="text-[color:var(--Grey-dark-active,#484848)] text-base not-italic font-bold leading-7">
              {domain}
            </p>
            <CopyIcon />
          </Button>
          <Button className="w-6 h-6 shrink-0">
            <ReloadIcon />
          </Button>
          <Button className="w-6 h-6 shrink-0" onClick={() => handleSubmit}>
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

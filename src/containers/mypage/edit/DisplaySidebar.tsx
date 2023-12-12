import clsx from 'clsx';
import { useState } from 'react';
import { Fonts, PageHeader } from '@/containers/mypage/edit/constants';
import Toggle from '@/components/basic/Toggle';

export default function DisplaySidebar() {
  const [fonts, setFonts] = useState(Fonts[0].name);
  function onClickFont(name: string) {
    setFonts(name);
  }
  return (
    <div className="space-y-[20px] p-[20px]">
      <div className="p-[20px] border border-gray-light-active rounded-[8px] flex flex-col gap-[20px]">
        <p className="b1-bold text-gray-dark-active">페이지 상단 기능 설정</p>
        <div className="flex flex-col gap-[20px] [&>div]:b2 [&>div]:text-gray-dark-active">
          {PageHeader.map(({ name, text, svg }) => (
            <div key={`page-header-${name}`} className="flex items-center gap-[20px]">
              <div className="w-[20px] h-[20px] p-[2px] rounded-[8px] flex items-center justify-center bg-gray-light-normal">
                {svg}
              </div>
              <p>{text}</p>
              <div className="ml-auto">
                <Toggle />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[20px] border border-gray-light-active rounded-[8px] flex flex-col gap-[20px]">
        <p className="b1-bold text-gray-dark-active">스타일 설정</p>
        <p className="b2-bold text-gray-dark-active">폰트 스타일</p>

        <div className="flex flex-col gap-[10px]">
          {Fonts.map(({ name, text }) => (
            <button
              key={`font-${name}`}
              type="button"
              className={clsx(
                'w-full h-[40px] b2-bold flex items-center px-[20px] border rounded-[8px] shadow-[0_2px_4px_0_rgba(0,0,0,0.10)]',
                {
                  'text-purple-normal-normal bg-purple-light-normal border-purple-normal-normal':
                    fonts === name,
                  'text-gray-dark-active bg-gray-light-normal border-gray-light-active':
                    fonts !== name,
                },
              )}
              onClick={() => onClickFont(name)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

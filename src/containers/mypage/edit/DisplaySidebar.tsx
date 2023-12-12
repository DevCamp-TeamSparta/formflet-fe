import clsx from 'clsx';
import { FontFamily, Fonts } from '@/containers/mypage/edit/constants';
import { useFontStore } from '@/containers/mypage/store';

export default function DisplaySidebar() {
  const { font, setFont } = useFontStore();
  function onClickFont(name: string) {
    setFont(name);
  }
  return (
    <div className="space-y-[20px] p-[20px]">
      <div className="p-[20px] border border-gray-light-active rounded-[8px] flex flex-col gap-[20px]">
        <p className="b1-bold text-gray-dark-active">스타일 설정</p>
        <p className="b2-bold text-gray-dark-active">폰트 스타일</p>
        <div className="flex flex-col gap-[10px]">
          {Fonts.map(({ name, text }) => (
            <button
              key={`font-${name}`}
              type="button"
              className={clsx(
                `w-full h-[40px] b2-bold flex items-center px-[20px] border rounded-[8px] shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] ${FontFamily[name]}`,
                {
                  'text-purple-normal-normal bg-purple-light-normal border-purple-normal-normal':
                    font === name,
                  'text-gray-dark-active bg-gray-light-normal border-gray-light-active':
                    font !== name,
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

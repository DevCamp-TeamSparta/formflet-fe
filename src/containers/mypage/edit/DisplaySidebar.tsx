import clsx from 'clsx';
import { FontFamily, Fonts, FONT_SIZE } from '@/constants/editProps/editPage';
import { useFormStore, useFontStore, useCtaStore } from '@/store/store';
import EmptyStar from '../../../../public/svg/EmptyStar';
import Toggle from '@/components/basic/Toggle';

export default function DisplaySidebar() {
  const { font, setFont } = useFontStore();
  function onClickFont(name: string) {
    setFont(name);
  }

  const formStatus = useFormStore((state) => state.formStatus);
  const ctaStore = useCtaStore();

  const handleCta = () => {
    if (formStatus) {
      return;
    }
    ctaStore.setCtaStatus(!ctaStore.ctaStatus);
    if (ctaStore.ctaStatus) {
      ctaStore.resetCta();
    }
  };

  return (
    <div className="space-y-[20px] p-[20px]">
      <div className="p-[20px] border border-gray-light-active box-shadow-normal rounded-[8px] flex flex-col gap-[20px]">
        <p className="b1-bold text-gray-dark-active">CTA(Call To Action) 버튼</p>
        <div className="flex flex-col gap-[20px] [&>div]:b2 [&>div]:text-gray-dark-active">
          <div key="page-header-form" className="flex items-center gap-[20px]">
            <div className="w-[20px] h-[20px] p-[2px] rounded-[8px] flex items-center justify-center bg-gray-light-normal">
              <EmptyStar />
            </div>
            <p>CTA 버튼 추가</p>
            <div className="ml-auto">
              <Toggle isChecked={ctaStore.ctaStatus} onClick={handleCta} />
            </div>
          </div>
        </div>
        <div className="flex items-center self-stretch justify-center h-0">
          <hr className="flex w-[282px] h-0 justify-center items-center text-gray-light-active" />
        </div>
        <div className="flex h-[78px] flex-col justify-end items-start gap-4 self-stretch pt-1.5">
          <label className="b2-bold text-gray-dark-active">버튼 내용</label>
          <input
            className="flex w-[282px] h-10 items-center gap-2.5 shrink-0 border border-gray-normal-normal box-shadow-normal focus:box-active-shadow-normal disabled:bg-gray-light-normal text-gray-dark-hover px-5 py-4 rounded-lg border-solid"
            type="text"
            value={ctaStore.ctaContent}
            disabled={!ctaStore.ctaStatus}
            onChange={(e) => ctaStore.setCtaContent(e.target.value)}
            placeholder="Click me!"
          />
        </div>
        <div className="flex h-[78px] flex-col justify-end items-start gap-4 self-stretch pt-1.5">
          <label className="b2-bold text-gray-dark-active">링크</label>
          <input
            className="flex w-[282px] h-10 items-center gap-2.5 shrink-0 border border-gray-normal-normal box-shadow-normal focus:box-active-shadow-normal disabled:bg-gray-light-normal text-gray-dark-hover px-5 py-4 rounded-lg border-solid"
            type="text"
            value={ctaStore.ctaLink}
            disabled={!ctaStore.ctaStatus || (ctaStore.ctaStatus && formStatus)}
            placeholder="폼페이지로 이동"
            onChange={(e) => ctaStore.setCtaLink(e.target.value)}
          />
        </div>
        <p className="b2-bold text-gray-dark-active">색상 및 스타일</p>
        <div className="flex h-[78px] flex-col justify-end items-start gap-4 self-stretch pt-1.5">
          <label className="b2 text-gray-dark-active">글자 크기</label>
          <select
            className="flex w-[282px] h-10 justify-between items-center shrink-0 border border-gray-normal-normal box-shadow-normal px-5 rounded-lg border-solid"
            value={ctaStore.ctaFontSize}
            disabled={!ctaStore.ctaStatus}
            onChange={(e) => ctaStore.setCtaFontSize(e.target.value)}
          >
            {FONT_SIZE.map((item) => (
              <option key={item.id} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center self-stretch justify-between">
          <p className="b2 text-gray-dark-active">글자색</p>
          <div className="flex items-center justify-end">
            <input
              className="w-[62px] b2 text-gray-dark-active"
              value={ctaStore.ctaFontColor}
              onChange={(e) => ctaStore.setCtaFontColor(e.target.value)}
              maxLength={7}
              disabled={!ctaStore.ctaStatus}
            />
            <div
              className="border border-solid border-gray-normal-normal w-[22px] h-[22px] rounded-full"
              style={{ backgroundColor: ctaStore.ctaFontColor }}
            />
          </div>
        </div>
        <div className="flex items-center self-stretch justify-between">
          <p className="b2 text-gray-dark-active">배경색</p>
          <div className="flex items-center justify-between">
            <input
              className="w-[62px] b2 text-gray-dark-active"
              value={ctaStore.ctaBackColor}
              onChange={(e) => ctaStore.setCtaBackColor(e.target.value)}
              maxLength={7}
              disabled={!ctaStore.ctaStatus}
            />
            <div
              className="border border-solid border-gray-normal-normal w-[22px] h-[22px] rounded-full"
              style={{ backgroundColor: ctaStore.ctaBackColor }}
            />
          </div>
        </div>
      </div>
      <div className="p-[20px] border border-gray-light-active box-shadow-normal rounded-[8px] flex flex-col gap-[20px]">
        <p className="b1-bold text-gray-dark-active">스타일 설정</p>
        <p className="b2-bold text-gray-dark-active">폰트 스타일</p>
        <div className="flex flex-col gap-[10px]">
          {Fonts.map(({ name, text }) => (
            <button
              key={`font-${name}`}
              type="button"
              className={clsx(
                `w-full h-[40px] b2-bold flex items-center px-[20px] border hover:border-gray-normal-normal rounded-[8px] box-shadow-normal ${FontFamily[name]}`,
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

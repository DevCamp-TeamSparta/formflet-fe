import Toggle from '@/components/basic/Toggle';
import FormSquareIcon from '../../../../public/svg/FormSquareIcon';
import EmptyStar from '../../../../public/svg/EmptyStar';
import { useCtaStore, useFormStore } from '../store';

export default function FormSidebar() {
  const { formStatus, setFormStatus } = useFormStore((state) => ({
    formStatus: state.formStatus,
    setFormStatus: state.setFormStatus,
  }));

  const { ctaStatus, setCtaStatus, ctaContent, setCtaContent, ctaLink, setCtaLink } = useCtaStore();

  return (
    <div className="space-y-[20px] p-[20px]">
      <div className="p-[20px] border border-gray-light-active box-shadow-normal rounded-[8px] flex flex-col gap-[20px]">
        <p className="b1-bold text-gray-dark-active">폼</p>
        <div className="flex flex-col gap-[20px] [&>div]:b2 [&>div]:text-gray-dark-active">
          <div key="page-header-form" className="flex items-center gap-[20px]">
            <div className="w-[20px] h-[20px] p-[2px] rounded-[8px] flex items-center justify-center bg-gray-light-normal">
              <FormSquareIcon />
            </div>
            <p>폼 추가</p>
            <div className="ml-auto">
              <Toggle isChecked={formStatus} onClick={() => setFormStatus(!formStatus)} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-[20px] border border-gray-light-active box-shadow-normal rounded-[8px] flex flex-col gap-[20px]">
        <p className="b1-bold text-gray-dark-active">CTA(Call To Action) 버튼</p>
        <div className="flex flex-col gap-[20px] [&>div]:b2 [&>div]:text-gray-dark-active">
          <div key="page-header-form" className="flex items-center gap-[20px]">
            <div className="w-[20px] h-[20px] p-[2px] rounded-[8px] flex items-center justify-center bg-gray-light-normal">
              <EmptyStar />
            </div>
            <p>CTA 버튼 추가</p>
            <div className="ml-auto">
              <Toggle isChecked={ctaStatus} onClick={() => setCtaStatus(!ctaStatus)} />
            </div>
          </div>
        </div>
        <div className="flex h-0 justify-center items-center self-stretch">
          <hr className="flex w-[282px] h-0 justify-center items-center text-gray-light-active" />
        </div>
        <div className="flex h-[78px] flex-col justify-end items-start gap-4 self-stretch pt-1.5">
          <label className="b2-bold text-gray-dark-active">버튼 내용</label>
          <input
            className="flex w-[282px] h-10 items-center gap-2.5 shrink-0 border border-[color:var(--Grey-normal-normal,#9FA0A0)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] px-5 py-4 rounded-lg border-solid"
            type="text"
            value={ctaContent}
            disabled={!ctaStatus}
            onChange={(e) => setCtaContent(e.target.value)}
            placeholder="Click me!"
          />
        </div>
        <div className="flex h-[78px] flex-col justify-end items-start gap-4 self-stretch pt-1.5">
          <label className="b2-bold text-gray-dark-active">링크</label>
          <input
            className="flex w-[282px] h-10 items-center gap-2.5 shrink-0 border border-[color:var(--Grey-normal-normal,#9FA0A0)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] px-5 py-4 rounded-lg border-solid"
            type="text"
            value={ctaLink}
            disabled={!ctaStatus}
            onChange={(e) => setCtaLink(e.target.value)}
            placeholder="폼 페이지로 이동"
          />
        </div>
        <p className="b2-bold text-gray-dark-active">색상 및 스타일</p>
        <div className="flex h-[78px] flex-col justify-end items-start gap-4 self-stretch pt-1.5">
          <label className="b2 text-gray-dark-active">글자 크기</label>
          <select className="flex w-[282px] h-10 justify-between items-center shrink-0 border border-[color:var(--Grey-normal-normal,#9FA0A0)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] px-5 py-4 rounded-lg border-solid">
            <option>24px</option>
          </select>
        </div>
        <div className="flex justify-between items-center self-stretch">
          <p className="b2 text-gray-dark-active">글자색</p>
          <div className="flex justify-end items-center gap-2.5">
            <p className="b2 text-gray-dark-active">#FFFFFF</p>
          </div>
        </div>
        <div className="flex justify-between items-center self-stretch">
          <p className="b2 text-gray-dark-active">배경색</p>
          <div className="flex justify-end items-center gap-2.5">
            <p className="b2 text-gray-dark-active">#FFFFFF</p>
          </div>
        </div>
      </div>
    </div>
  );
}

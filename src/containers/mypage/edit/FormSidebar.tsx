import Toggle from '@/components/basic/Toggle';
import FormSquareIcon from '../../../../public/svg/FormSquareIcon';

export default function FormSidebar() {
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
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import Button from '@/components/basic/Button';
import useModalStore from '@/store/modalStore';
import { OnClickProps } from '@/types/type';
import Spinner from '@/components/common/Spinner';

export default function EditPageRefreshModal({ onClick }: OnClickProps) {
  const [isLoading, setIsLoading] = useState(false);
  const setModal = useModalStore((state) => state.setModal);
  const handleModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    if (currentTarget.id === 'refresh-page') {
      setIsLoading(true);
      await onClick();
    }
    setIsLoading(false);
    setModal(null);
  };
  return (
    <div className="flex w-[330px] flex-col justify-center items-start gap-2.5 border border-gray-light-active box-shadow-normal p-10 rounded-lg border-solid bg-white">
      <p className="h3-bold text-gray-dark-active">새로 불러오시겠습니까?</p>
      <p className="b1 text-gray-dark-hover">새로 불러온 내용은 저장 버튼을 눌러야만 저장됩니다.</p>
      {isLoading ? (
        <div>
          <p>데이터를 불러오는 중 입니다.</p>
          <Spinner />
        </div>
      ) : (
        <div className="flex items-center self-stretch justify-center gap-5">
          <Button
            type="button"
            className="flex h-10 justify-center items-center gap-2.5 flex-[1_0_0] border border-purple-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid text-purple-normal-normal"
            onClick={(e) => handleModal(e)}
          >
            취소
          </Button>
          <Button
            id="refresh-page"
            type="button"
            className="flex h-10 justify-center items-center gap-2.5 flex-[1_0_0] box-shadow-normal px-5 py-4 rounded-lg bg-purple-normal-normal text-white"
            onClick={(e) => handleModal(e)}
          >
            확인
          </Button>
        </div>
      )}
    </div>
  );
}

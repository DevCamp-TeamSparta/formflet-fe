import useModalStore from '@/store/modalStore';
import Button from '../basic/Button';

export default function RouteBackModal() {
  const setModal = useModalStore((state) => state.setModal);
  const handleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (e.currentTarget.id === 'btn-back') {
      window.history.back();
    }
    setModal(null);
  };
  return (
    <div className="flex w-[330px] flex-col justify-center items-start gap-2.5 border border-gray-light-active box-shadow-normal p-10 rounded-lg border-solid bg-white">
      <p className="h3-bold text-gray-dark-active">나가시겠습니까?</p>
      <p className="b1 text-gray-dark-hover">편집 중인 내용이 사라질 수 있습니다.</p>
      <div className="flex items-center self-stretch justify-center gap-5">
        <Button
          type="button"
          className="flex h-10 justify-center items-center gap-2.5 flex-[1_0_0] border border-purple-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid text-purple-normal-normal"
          onClick={(e) => handleModal(e)}
        >
          취소
        </Button>
        <Button
          id="btn-back"
          type="button"
          className="flex h-10 justify-center items-center gap-2.5 flex-[1_0_0] box-shadow-normal px-5 py-4 rounded-lg bg-purple-normal-normal text-white"
          onClick={(e) => handleModal(e)}
        >
          확인
        </Button>
      </div>
    </div>
  );
}

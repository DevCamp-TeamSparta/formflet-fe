import Button from '@/components/basic/Button';
import useModalStore from '@/store/modalStore';
import { useFormStore } from '@/store/store';

export default function FormEditModal() {
  const { setCreateForm } = useFormStore((state) => ({ setCreateForm: state.setCreateForm }));
  const { setModal } = useModalStore((state) => ({ setModal: state.setModal }));
  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    if (currentTarget.id === 'edit-form') {
      setCreateForm(true);
    }
    setModal(null);
  };
  return (
    <div className="flex w-[330px] flex-col justify-center items-start gap-2.5 border border-gray-light-active box-shadow-normal p-10 rounded-lg border-solid bg-white">
      <p className="h3-bold text-gray-dark-active">폼을 수정하시겠습니까?</p>
      <p className="b1 text-gray-dark-hover">
        제출된 응답이 있습니다. 폼을 수정할 경우 새로운 응답 데이터가 생성됩니다. (기존 응답
        데이터는 보존됩니다.)
      </p>
      <div className="flex items-center self-stretch justify-center gap-5">
        <Button
          type="button"
          className="flex h-10 justify-center items-center gap-2.5 flex-[1_0_0] border border-purple-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid text-purple-normal-normal"
          onClick={(e) => handleModal(e)}
        >
          취소
        </Button>
        <Button
          id="edit-form"
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

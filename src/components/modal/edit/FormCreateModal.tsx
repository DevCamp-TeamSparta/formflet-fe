import Button from '@/components/basic/Button';
import useModalStore from '@/store/modalStore';
import { useCtaStore, useDisplayStore, useFormStore } from '@/store/store';

export default function FormCreateModal() {
  const setModal = useModalStore((state) => state.setModal);
  const { setCtaStatus, setCtaLink } = useCtaStore((state) => ({
    setCtaStatus: state.setCtaStatus,
    setCtaLink: state.setCtaLink,
  }));
  const setDisplay = useDisplayStore((state) => state.setDisplay);
  const { formStatus, setFormStatus } = useFormStore((state) => ({
    formStatus: state.formStatus,
    setFormStatus: state.setFormStatus,
  }));
  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    if (currentTarget.id === 'create-form') {
      setCtaStatus(true);
      setFormStatus(!formStatus);
      setCtaLink('');
      setDisplay('form');
    }
    setModal(null);
  };
  return (
    <div className="flex w-[330px] flex-col justify-center items-start gap-2.5 border border-gray-light-active box-shadow-normal p-10 rounded-lg border-solid bg-white">
      <p className="h3-bold text-gray-dark-active">폼을 추가하시겠습니까?</p>
      <p className="b1 text-gray-dark-hover">기존에 입력한 CTA 버튼 링크는 사라집니다.</p>
      <div className="flex items-center self-stretch justify-center gap-5">
        <Button
          type="button"
          className="flex h-10 justify-center items-center gap-2.5 flex-[1_0_0] border border-purple-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid text-purple-normal-normal"
          onClick={(e) => handleModal(e)}
        >
          취소
        </Button>
        <Button
          id="create-form"
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

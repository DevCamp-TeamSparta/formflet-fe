import { useRef } from 'react';

export default function EditForm() {
  const defaultContent = `[제목] 제목을 입력해주세요.
[텍스트] 폼 작성을 위한 샘플 양식입니다.
폼 편집 탭에서 자유롭게 수정해주세요.
[질문_*] 질문을 입력해주세요.
[주관식]
[질문_*] 두번째 질문을 입력해주세요.
[객관식] 아시아_유럽
[질문] 세번째 질문을 입력해주세요.
[객관식_복수] 태평양_대서양 |`;
  const contentRef = useRef<HTMLTextAreaElement>(null);
  console.log(defaultContent.split('\n'));

  return (
    <textarea
      className="flex resize-x w-full h-full items-start gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--grey-normal-normal,#9FA0A0)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] px-[30px] py-5 rounded-lg border-solid"
      defaultValue={defaultContent}
      // onChange={}
      ref={contentRef}
    />
  );
}

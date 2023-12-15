'use client';

import { useState } from 'react';
import Button from '@/components/basic/Button';
import ExclaimCircle from '../../../../public/svg/ExclaimCircle';
import SelectOptionIcon from '../../../../public/svg/SelectOptionIcon';

export default function EditFormExample() {
  const [isClicked, setIsClicked] = useState(false);

  const formExample = [
    '[제목] : 제목입니다.',
    '[텍스트] : 텍스트입니다. 해당 옵션으로 입력된 텍스트는 질문으로 적용할 수 없습니다.',
    '[질문] : 질문입니다.',
    '[질문_*] : 해당 문항이 필수 응답으로 설정됩니다.',
    '[주관식] : 주관식 응답 방식의 문항이 생성됩니다.',
    '[객관식] : 단일 응답 방식의 객관식 문항이 생성됩니다. ‘]’ 뒤에 한 칸 띄우고 객관식 항목을 입력하며, 항목의 구분은 ‘_’로 합니다.',
    '[객관식_복수] : 복수 응답이 가능한 객관식 문항 생성됩니다. ’]’ 뒤에 한 칸 띄우고 객관식 항목을 입력하며, 항목의 구분은 ‘_’로 합니다.]',
  ];

  const handleClickChange = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch border border-gray-normal-normal box-shadow-normal px-[30px] py-5 rounded-lg border-solid">
      <Button
        className="flex justify-between items-center flex-[1_0_0] self-stretch"
        onClick={handleClickChange}
      >
        <div className="flex justify-center items-center">
          <ExclaimCircle />
          <p className="b1-bold text-gray-dark-active ml-1">폼 작성 가이드</p>
        </div>
        <SelectOptionIcon />
      </Button>
      {isClicked && (
        <div>
          <p className="b2-bold text-gray-dark-active mb-2">문항 작성 방법</p>
          <p className="b2 text-gray-dark-active mb-2">
            아래 옵션 중 하나를 선택하여 입력한 후, [ ] 이후 스페이스 한 칸을 띄우고 생성될 내용을
            작성해주세요.
          </p>
          {formExample.map((item) => (
            <li className="b2 text-gray-dark-active mb-2">{item}</li>
          ))}
          <p className="b2 text-semantic-danger-normal mb-2">
            제목은 최상단에 한번만 입력 가능합니다.
          </p>
          <p className="b2 text-semantic-danger-normal mb-2">
            *질문 다음에 응답 방식이 설정되지 않으면 해당 질문은 보이지 않습니다.
          </p>
        </div>
      )}
    </div>
  );
}

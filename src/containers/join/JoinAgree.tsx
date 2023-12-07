'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/basic/Button';
import RectangleCheckOn from '../../../public/svg/RectangleCheckOn';
import RectangleCheckOff from '../../../public/svg/RectangleCheckoff';
import { StateSetBoolean } from '@/types/type';

function JoinAgree({ setJoinButtonDisabled }: StateSetBoolean) {
  const [agree, setAgree] = useState<boolean>(false);

  const handleAgree = () => {
    if (agree) {
      setAgree(!agree);
    } else {
      setAgree(!agree);
    }
  };

  useEffect(() => {
    if (agree) {
      setJoinButtonDisabled(false);
    } else {
      setJoinButtonDisabled(true);
    }
  }, [agree, setJoinButtonDisabled]);

  return (
    <Button
      className="flex items-center gap-2.5 self-stretch box-shadow-normal"
      onClick={handleAgree}
    >
      {agree ? <RectangleCheckOn /> : <RectangleCheckOff />} 전체 개인정보 수집 및 폼플렛 이용약관에
      동의합니다.
    </Button>
  );
}

export default JoinAgree;

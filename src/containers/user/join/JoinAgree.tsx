'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/basic/Button';
import RectangleCheckOn from '../../../../public/svg/RectangleCheckOn';
import { SetStateBoolean } from '@/types/type';

function JoinAgree({ setStateBoolean }: SetStateBoolean) {
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
      setStateBoolean(false);
    } else {
      setStateBoolean(true);
    }
  }, [agree]);

  return (
    <Button className="flex items-center gap-2.5 self-stretch" onClick={() => handleAgree()}>
      {agree && <RectangleCheckOn />} 전체 개인정보 수집 및 폼플렛 이용약관에 동의합니다.
    </Button>
  );
}

export default JoinAgree;

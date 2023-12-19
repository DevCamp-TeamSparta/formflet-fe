'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Button from '@/components/basic/Button';
import pageRegister from '@/services/api/pages/pageRegister';
import { PageUrlFormSchema, pageUrlFormSchema } from '@/types/type';
import MESSAGE from '@/constants/Messages';
import PlusCircle from '../../../public/svg/PlusCircle';
import Input from '@/components/basic/Input';
import PATH from '@/constants/path/Path';
import { useState } from 'react';
import Spinner from '@/components/common/Spinner';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PageUrlFormSchema>({
    resolver: zodResolver(pageUrlFormSchema),
  });
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const pageFormSubmit: SubmitHandler<PageUrlFormSchema> = async (
    data: PageUrlFormSchema,
  ): Promise<void> => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await axios.post<{ page: Record<string, object> }>('/api/notion', {
        url: data.url,
      });
      const content = JSON.stringify(res.data.page);
      const response = await pageRegister({
        ...data,
        content,
      });
      const path = response.data.data.id;
      switch (response.status) {
        case 404:
          setErrorMessage(MESSAGE.NOTION_DOMAIN.inVaildNotion);
          break;
        case 409:
          setErrorMessage(MESSAGE.NOTION_DOMAIN.inVaildDomain);
          break;
        default:
          route.push(`${PATH.ROUTE.EDIT}/${path}`);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <form
      className="flex w-[850px] flex-col items-end gap-5 border border-gray-light-active box-shadow-normal px-8 py-6 rounded-lg border-solid"
      onSubmit={handleSubmit(pageFormSubmit)}
    >
      <div className="flex flex-col justify-center items-start gap-2.5 self-stretch">
        <p className="b1-bold self-stretch text-gray-dark-active">웹페이지 이름</p>
        <Input
          className="flex w-[786px] h-10 justify-end items-center gap-2.5 border border-gray-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid"
          key="title"
          id="title"
          {...register('title')}
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-2.5 self-stretch">
        <p className="b1-bold self-stretch text-gray-dark-active">웹페이지 주소</p>
        <div className="flex items-end gap-2.5">
          <Input
            className="flex w-[677px] h-10 justify-end items-center gap-2.5 border border-gray-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid"
            key="domain-url"
            id="domain-url"
            {...register('domain')}
          />
          <p className="b1 text-gray-normal-normal">.formflet.co/</p>
        </div>
      </div>
      <p className="b1-bold self-stretch text-gray-dark-active">노션 링크</p>
      <div className="flex items-start gap-2.5 self-stretch">
        <p className="b2 text-gray-dark-normal">
          노션에서 공유 버튼을 눌러 &apos;웹에서 공유&apos; 상태로 만들어 주어야 폼플렛이 웹페이지를
          만들 수 있어요!
        </p>
        <p className="b2-bold text-gray-dark-active">자세히</p>
      </div>
      <div className="self-stretch">
        <Input
          className="flex w-[786px] h-10 justify-end items-center gap-2.5 border border-gray-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid"
          key="notion-url"
          id="notion-url"
          placeholder="notion.so/formflet/"
          {...register('url')}
        />
      </div>
      {(errors.domain?.message || errors.url?.message) && (
        <p className="b2 self-stretch text-semantic-danger-normal">
          {errors.domain?.message || errors.url?.message}
        </p>
      )}
      {errorMessage && (
        <p className="b2 self-stretch text-semantic-danger-normal">{errorMessage}</p>
      )}
      <Button
        className="flex w-[133px] justify-center h-10 items-center gap-2.5 box-shadow-normal bg-purple-normal-normal px-5 py-4 rounded-lg"
        type="submit"
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <p className="b1-bold text-white">추가하기</p>
            <PlusCircle color="white" />
          </>
        )}
      </Button>
    </form>
  );
}

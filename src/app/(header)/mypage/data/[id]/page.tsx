'use client';

import { useEffect, useState } from 'react';
import CSVDownloadBtn from '@/containers/mypage/data/[id]/CSVDownloadBtn';
import DataDetailContainer from '@/containers/mypage/data/[id]/DataDetailContainer';
import forms from '@/services/api/forms/forms';
import EmptyDataDisplay from '@/containers/mypage/data/EmptyDataDisplay';

const getFormReplyData = (formDetails: FormDetail[]): Record<string, string>[] => {
  if (!formDetails.length) {
    return [];
  }
  const dataArray: Record<string, string>[] = new Array(formDetails[0].formReplies.length);
  const questionArray: Array<string> = [];
  formDetails.map((item) => questionArray.push(item.question));
  for (let i = 0; i < dataArray.length; i += 1) {
    const answer: { [key: string]: string } = {};
    for (let j = 0; j < questionArray.length; j += 1) {
      if (formDetails[j].formReplies[i]) {
        answer[questionArray[j]] = formDetails[j].formReplies[i].answer;
      }
    }
    dataArray[i] = answer;
  }
  return dataArray;
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function DataDetailPage({ params }: PageProps) {
  const [dataList, setDataList] = useState<FormList[]>([]);
  const [selectedFormDetail, setSelectedFormDetail] = useState<FormDetail[]>([]);
  const [selectedData, setSelectedData] = useState<Record<string, string>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedForm = dataList.find((item) => item.id === Number(e.currentTarget.value));
    if (selectedForm) {
      setSelectedFormDetail(selectedForm.formDetails);
    }
  };

  useEffect(() => {
    const getForms = async () => {
      try {
        const response = await forms(params.id);
        const { formDetails } = response.data.data[0];
        response.data.data.forEach((item) => {
          setDataList((prevDataList) => [...prevDataList, item]);
        });
        const data = getFormReplyData(formDetails);
        setSelectedData(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    getForms().catch(() => {});
    return () => {
      setDataList([]);
    };
  }, []);

  useEffect(() => {
    const data = getFormReplyData(selectedFormDetail);
    setSelectedData(data);
  }, [selectedFormDetail]);

  return (
    <div>
      <div className="top-[64px] h-[64px] z-10 fixed w-[850px] flex justify-between items-center shrink-0 gap-5">
        <select
          className="flex h-10 justify-between items-center flex-[1_0_0] border border-gray-normal-normal box-shadow-normal px-5 rounded-lg border-solid"
          onChange={(e) => handleSelectData(e)}
        >
          {dataList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <CSVDownloadBtn data={selectedData} />
      </div>
      {!isLoading && selectedData.length !== 0 ? (
        <DataDetailContainer data={selectedData} />
      ) : (
        <EmptyDataDisplay />
      )}
    </div>
  );
}

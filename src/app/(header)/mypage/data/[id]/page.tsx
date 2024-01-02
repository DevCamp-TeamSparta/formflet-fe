import CSVDownloadBtn from '@/containers/mypage/data/[id]/CSVDownloadBtn';
import DataDetailContainer from '@/containers/mypage/data/[id]/DataDetailContainer';
import forms from '@/services/api/forms/forms';

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

export default async function DataDetailPage({ params }: PageProps) {
  const response = await forms(params.id);
  const { formDetails } = response.data.data[0];
  const dataArray = getFormReplyData(formDetails);

  return (
    <div>
      <div className="top-[64px] h-[64px] z-10 fixed w-[850px] flex justify-between items-center shrink-0 gap-5">
        <select className="flex h-10 justify-between items-center flex-[1_0_0] border border-gray-normal-normal box-shadow-normal px-5 rounded-lg border-solid">
          <option>item</option>
        </select>
        <CSVDownloadBtn data={dataArray} />
      </div>
      <DataDetailContainer data={dataArray} />
    </div>
  );
}

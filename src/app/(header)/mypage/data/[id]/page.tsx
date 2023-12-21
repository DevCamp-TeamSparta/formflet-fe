import DataDetailContainer from '@/containers/mypage/data/[id]/DataDetailContainer';
import forms from '@/services/api/forms/forms';

interface PageProps {
  params: {
    id: string;
  };
}

const getFormReplyData = (formDetails: FormDetail[]): Record<string, string>[] => {
  const dataArray: Record<string, string>[] = new Array(formDetails[0].formReplies.length);
  const questionArray: Array<string> = [];
  formDetails.map((item) => questionArray.push(item.question));
  for (let i = 0; i < 10; i += 1) {
    const answer: { [key: string]: string } = {};
    for (let j = questionArray.length - 1; j >= 0; j -= 1) {
      answer[questionArray[j]] = formDetails[j].formReplies[i].answer;
    }
    dataArray[i] = answer;
  }
  return dataArray;
};

export default async function DataDetailPage({ params }: PageProps) {
  const response = await forms(params.id);
  const { formDetails } = response.data.data[0];
  const dataArray = getFormReplyData(formDetails);

  return <DataDetailContainer data={dataArray} />;
}

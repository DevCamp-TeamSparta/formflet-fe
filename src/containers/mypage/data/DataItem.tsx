import clsx from 'clsx';
import Link from 'next/link';
import ArrowRightCircle from '../../../../public/svg/ArrowRightCircle';
import PATH from '@/constants/path/Path';

interface Data {
  id: number;
  title: string;
  status: string;
  num: number;
}

export default function DataItem({ data }: { data: Data }) {
  const { id, title, status, num } = data;
  const isFormExist = status === 'Exist';

  return (
    <Link
      href={`${PATH.ROUTE.DATA}/${id}`}
      aria-disabled={!isFormExist}
      className={clsx(
        'px-[32px] py-[26px] rounded-[8px] border border-gray-light-active flex items-center justify-between',
        {
          'pointer-events-none': !isFormExist,
        },
      )}
    >
      <div
        className={clsx('text-gray-dark-active', {
          'text-gray-normal-normal': !isFormExist,
        })}
      >
        <p className="b1-bold">{title}</p>
        {
          {
            Exist: <p className="b2">{num}개의 응답</p>,
            None: <p className="b2">폼이 추가되지 않은 웹페이지</p>,
          }[status]
        }
      </div>
      <div>
        <ArrowRightCircle color={isFormExist ? '#484848' : '#9FA0A0'} />
      </div>
    </Link>
  );
}

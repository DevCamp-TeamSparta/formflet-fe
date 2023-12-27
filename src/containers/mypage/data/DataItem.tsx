import Link from 'next/link';
import ArrowRightCircle from '../../../../public/svg/ArrowRightCircle';
import PATH from '@/constants/path/Path';

export default function DataItem({ data }: { data: PageList }) {
  const { id, title } = data;

  return (
    <Link
      href={`${PATH.ROUTE.DATA}/${id}`}
      className="px-[32px] py-[26px] rounded-[8px] border border-gray-light-active hover:border-gray-normal-normal flex items-center justify-between"
    >
      <div className="text-gray-dark-active">
        <p className="b1-bold">{title}</p>
      </div>
      <div>
        <ArrowRightCircle color="#484848" />
      </div>
    </Link>
  );
}
//   return (
//     <Link
//       href={`${PATH.ROUTE.DATA}/${id}`}
//       aria-disabled={!isFormExist}
//       className={clsx(
//         'px-[32px] py-[26px] rounded-[8px] border border-gray-light-active flex items-center justify-between',
//         {
//           'pointer-events-none': !isFormExist,
//         },
//       )}
//     >
//       <div
//         className={clsx('text-gray-dark-active', {
//           'text-gray-normal-normal': !isFormExist,
//         })}
//       >
//         <p className="b1-bold">{title}</p>
//       </div>
//       <div>
//         <ArrowRightCircle color={isFormExist ? '#484848' : '#9FA0A0'} />
//       </div>
//     </Link>
//   );
// }

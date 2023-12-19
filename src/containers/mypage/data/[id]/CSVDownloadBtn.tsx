'use client';

import * as XLSX from 'xlsx';

export default function CSVDownloadBtn({ data }: { data: Record<string, string>[] }) {
  function downloadCSV(csvData: Record<string, string>[]) {
    // 배열을 워크시트로 변환
    const worksheet = XLSX.utils.json_to_sheet(csvData);
    // 새 워크북 생성
    const workbook = XLSX.utils.book_new();
    // 워크북에 새 워크시트 추가
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // CSV 파일로 내보내기
    XLSX.writeFile(workbook, 'Dummies.csv');
  }
  return (
    <button
      type="button"
      className="px-[20px] h-[40px] rounded-[8px] bg-purple-normal-normal b1-bold text-white"
      onClick={() => downloadCSV(data)}
    >
      CSV로 다운로드
    </button>
  );
}

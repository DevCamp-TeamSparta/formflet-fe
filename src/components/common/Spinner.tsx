export default function Spinner() {
  /**
   * border: 10px solid #f3f3f3;
   *   border-top: 10px solid #3498db;
   *   border-radius: 50%;
   *   width: 80px;
   *   height: 80px;
   *   animation: spin 1s linear infinite;
   * */
  return (
    <div className="border-[3px] border-gray-normal-normal border-t-white rounded-full w-[24px] h-[24px] animate-[spin_1s_cubic-bezier(0,0,0.3,1)_infinite]" />
  );
}

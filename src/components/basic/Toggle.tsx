interface ToggleProps {
  isChecked: boolean;
  onClick: () => void;
}

export default function Toggle({ isChecked, onClick }: ToggleProps) {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input type="checkbox" defaultChecked={isChecked} onClick={onClick} className="sr-only" />
        <div
          className={`box block w-[32px] h-[16px] rounded-full ${
            isChecked ? 'bg-purple-normal-normal' : 'bg-gray-normal-normal'
          }`}
        />
        <div
          className={`absolute top-[2px] flex h-[12px] w-[12px] items-center justify-center rounded-full bg-white transition-left duration-300 ${
            isChecked ? 'left-[18px]' : 'left-[2px]'
          }`}
        />
      </div>
    </label>
  );
}

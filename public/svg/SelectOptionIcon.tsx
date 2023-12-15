export default function SelectOptionIcon({ color = '#484848' }: SvgProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon/Lucide Icon">
        <path
          id="Vector"
          d="M5 7.5L10 12.5L15 7.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

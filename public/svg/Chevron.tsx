export default function Chevron({ color = '#484848' }: SvgProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon/Lucide Icon">
        <path
          id="Vector"
          d="M6 12L10 8L6 4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

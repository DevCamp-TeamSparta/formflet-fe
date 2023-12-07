export default function ArrowRightCircle({ color = 'white' }: SvgProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon/Lucide Icon">
        <path
          id="Vector"
          d="M12.0002 22C17.5231 22 22.0002 17.5228 22.0002 12C22.0002 6.47715 17.5231 2 12.0002 2C6.4774 2 2.00024 6.47715 2.00024 12C2.00024 17.5228 6.4774 22 12.0002 22Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12.0002 16L16.0002 12L12.0002 8"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M8.00024 12H16.0002"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

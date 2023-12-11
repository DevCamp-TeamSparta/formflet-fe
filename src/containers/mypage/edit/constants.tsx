import SunIcon from '../../../../public/svg/SunIcon';
import SearchIcon from '../../../../public/svg/SearchIcon';
import ListIcon from '../../../../public/svg/ListIcon';

export const PageHeader = [
  {
    name: 'theme',
    text: '테마 선택 버튼 표시',
    svg: <SunIcon />,
  },
  {
    name: 'search',
    text: '검색 버튼 표시',
    svg: <SearchIcon />,
  },
  {
    name: 'route',
    text: '페이지 경로 표시',
    svg: <ListIcon />,
  },
];

export const Fonts = [
  {
    name: '',
    text: '기본 폰트',
  },
  {
    name: 'pretendard',
    text: '프리텐다드',
  },
  {
    name: 'gmarketSans',
    text: 'Gmarket Sans',
  },
  {
    name: 'escoreDream',
    text: '에스코어드림',
  },
  {
    name: 'yeogithefont',
    text: '여기어때 잘난체',
  },
  {
    name: 'cafe24surround',
    text: '카페24 써라운드',
  },
  {
    name: 'nanumSquare',
    text: '나눔스퀘어',
  },
  {
    name: 'nanumSquareRound',
    text: '나눔스퀘어',
  },
];

export const Menus = [
  {
    name: 'theme',
    text: '테마 선택 버튼 표시',
    svg: <SunIcon />,
  },
  {
    name: 'search',
    text: '검색 버튼 표시',
    svg: <SearchIcon />,
  },
  {
    name: 'route',
    text: '페이지 경로 표시',
    svg: <ListIcon />,
  },
];

export const SidebarMenus = [
  {
    name: 'display',
    text: '화면 편집',
  },
  {
    name: 'form',
    text: '폼/CTA',
  },
] as const;

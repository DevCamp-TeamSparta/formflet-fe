import SquarePencil from '../../../public/svg/SquarePencil';
import SqaurePlus from '../../../public/svg/SquarePlus';

export const FontFamily: { [key: string]: string } = {
  Pretendard: 'font-Pretendard',
  GmarketSans: 'font-Gmarket Sans',
  'S-CoreDream': 'font-S-CoreDream',
  NPSfontBold: 'font-NPSfontBold',
  TmoneyRoundWindExtraBold: 'font-TmoneyRoundWindExtraBold',
  NanumSquare: 'font-NanumSquare',
  NotoSansKR: 'font-NotoSansKR',
  Chosunilbo_myungjo: 'font-Chosunilbo_myungjo',
  'KBO-Dia-Gothic': 'font-KBO-Dia-Gothic',
  BMJUA: 'font-BMJUA',
  Hahmlet: 'font-Hahmlet',
  GyeonggiTitle: 'font-GyeonggiTitle',
};

export const Fonts = [
  {
    name: '',
    text: '기본 폰트',
  },
  {
    name: 'Pretendard',
    text: '프리텐다드',
  },
  {
    name: 'GmarketSans',
    text: 'Gmarket Sans',
  },
  {
    name: 'S-CoreDream',
    text: '에스코어드림',
  },
  {
    name: 'NPSfontBold',
    text: '국민연금체',
  },
  {
    name: 'TmoneyRoundWindExtraBold',
    text: '티머니 둥근바람',
  },
  {
    name: 'NanumSquare',
    text: '나눔스퀘어',
  },
  {
    name: 'NotoSansKR',
    text: '본고딕',
  },
  {
    name: 'Chosunilbo_myungjo',
    text: '조선일보명조체',
  },
  {
    name: 'KBO-Dia-Gothic',
    text: 'KBO 다이아고딕체',
  },
  {
    name: 'BMJUA',
    text: '주아체',
  },
  {
    name: 'Hahmlet',
    text: '함렛',
  },
  {
    name: 'GyeonggiTitle',
    text: '경기천년제목',
  },
];

export const SidebarMenus = [
  {
    name: 'display',
    text: '페이지',
    svg: <SquarePencil />,
    svgSelected: <SquarePencil color="#8000ff" />,
  },
  {
    name: 'form',
    text: '폼',
    svg: <SqaurePlus />,
    svgSelected: <SqaurePlus color="#8000ff" />,
  },
] as const;

export const FONT_SIZE = [
  { id: 10, value: '10px' },
  { id: 12, value: '12px' },
  { id: 14, value: '14px' },
  { id: 16, value: '16px' },
  { id: 18, value: '18px' },
  { id: 20, value: '20px' },
  { id: 24, value: '24px' },
  { id: 30, value: '30px' },
  { id: 36, value: '36px' },
  { id: 40, value: '40px' },
  { id: 48, value: '48px' },
  { id: 60, value: '60px' },
];

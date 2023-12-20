interface PageProps {
  pageId: string;
}

type PageContent = {
  id: number;
  content: string;
};

type PageFont = {
  id: number;
  type: string;
};

type PageForm = {
  id: number;
  status: boolean;
  guide: string;
};

type PageCta = {
  status: boolean;
  content: string;
  link: string;
  fontSize: string;
  fontColor: string;
  backgroundColor: string;
};

type Page = {
  id: number;
  title: string;
  domain: string;
  url: string;
  pageDetail: PageContent;
  pageFont: PageFont;
  form: PageForm;
  cta: PageCta;
};

interface PageList {
  id: string;
  title: string;
  domain: string;
}

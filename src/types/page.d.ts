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
  status: boolean;
  guide: string;
};

type Page = {
  id: number;
  title: string;
  domain: string;
  url: string;
  pageContent: PageContent;
  pageFont: PageFont;
  form: PageForm;
};

interface PageList {
  id: string;
  title: string;
  domain: string;
}

interface PageProps {
  pageId: string;
}

type PageContent = {
  id: number;
  content: string;
};

interface PageList {
  id: string;
  title: string;
  domain: string;
}

type Page = {
  domain: string;
  pageContent: PageContent;
  id: number;
  url: string;
  title: string;
  userId: number;
};

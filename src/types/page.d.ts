type PageContent = {
  id: number;
  content: string;
};

interface PageList {
  id: string;
  title: string;
  customDomain: string;
}

type Page = {
  customDomain: string;
  pageContent: PageContent;
  id: number;
  pageUrl: string;
  title: string;
  userId: number;
};

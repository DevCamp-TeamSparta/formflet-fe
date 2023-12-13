type PageContent = {
  id: number;
  content: string;
};

type Page = {
  customDomain: string;
  pageContent: PageContent;
  id: number;
  pageUrl: string;
  title: string;
  userId: number;
};

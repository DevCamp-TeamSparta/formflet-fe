type EditPage = {
  id: number;
  content: string;
};

type Page = {
  customDomain: string;
  editPage: EditPage;
  id: number;
  pageUrl: string;
  title: string;
  userId: number;
};

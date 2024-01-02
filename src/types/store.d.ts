interface FontStore {
  font: string;
  setFont: (font: string) => void;
}

interface DisplayStore {
  display: 'notion' | 'form';
  setDisplay: (display: 'notion' | 'form') => void;
}

interface PageStore {
  pageId: number;
  domain: string;
  subdomain: string;
  url: string;
  pageContent: string;
  setPageId: (pageId: number) => void;
  setDomain: (domain: string) => void;
  setUrl: (url: string) => void;
  setPageContent: (pageContent: string) => void;
}

interface FormStore {
  formId: number;
  formStatus: boolean;
  form: string;
  replyStatus: boolean;
  createForm: boolean;
  setFormId: (formId: number) => void;
  setFormStatus: (formStatus: boolean) => void;
  setForm: (form: string) => void;
  setReplyStatus: (replyStatus: boolean) => void;
  setCreateForm: (createForm: boolean) => void;
  setFormAll: (data: PageForm) => void;
  resetForm: () => void;
}

interface CtaStore {
  ctaStatus: boolean;
  ctaContent: string;
  ctaLink: string;
  ctaFontSize: string;
  ctaFontColor: string;
  ctaBackColor: string;
  setCtaStatus: (ctaStatus: boolean) => void;
  setCtaContent: (ctaContent: string) => void;
  setCtaLink: (ctaLink: string) => void;
  setCtaFontSize: (ctaFontSize: string) => void;
  setCtaFontColor: (ctaFontColor: string) => void;
  setCtaBackColor: (ctaBackColor: string) => void;
  setCtaAll: (data: PageCta) => void;
  resetCta: () => void;
}

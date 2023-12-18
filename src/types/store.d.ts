interface FontStore {
  font: string;
  setFont: (font: string) => void;
}

interface EditPageStore {
  editPage: 'notion' | 'form';
  setEditPage: (editPage: 'notion' | 'form') => void;
}

interface DisplayStore {
  display: 'notion' | 'form';
  setDisplay: (display: 'notion' | 'form') => void;
}

interface DomainStore {
  domain: string;
  setDomain: (domain: string) => void;
}

interface FormStore {
  formStatus: boolean;
  form: string;
  setFormStatus: (formStatus: boolean) => void;
  setForm: (form: string) => void;
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

import { create } from 'zustand';

export const useFontStore = create<FontStore>((set) => ({
  font: '',
  setFont: (font) => set({ font }),
}));

export const useDisplayStore = create<DisplayStore>((set) => ({
  display: 'notion',
  setDisplay: (display) => set({ display }),
}));

export const usePageStore = create<PageStore>((set) => ({
  pageId: 0,
  domain: '',
  subdomain: '',
  url: '',
  pageContent: '',
  setPageId: (pageId) => set({ pageId }),
  setDomain: (domain) => set({ domain, subdomain: domain.split('.')[0] }),
  setUrl: (url) => set({ url }),
  setPageContent: (pageContent) => set({ pageContent }),
}));

export const useFormStore = create<FormStore>((set) => ({
  formId: 0,
  formStatus: false,
  form: '[제목] 제목을 입력해주세요.\n[텍스트] 폼 작성을 위한 샘플 양식입니다. 폼 편집 탭에서 자유롭게 수정해주세요.\n[질문_*] 질문을 입력해주세요.\n[주관식] ex) 답변을 입력하세요.\n[질문_*] 두번째 질문을 입력해주세요.\n[객관식] 아시아_유럽\n[질문] 세번째 질문을 입력해주세요.\n[객관식_복수] 태평양_대서양',
  setFormId: (formId: number) => set({ formId }),
  setFormStatus: (formStatus: boolean) => set({ formStatus }),
  setForm: (form: string) => set({ form }),
  setFormAll: (data: PageForm) => set({ formStatus: data.status, form: data.guide }),
  resetForm: () =>
    set({
      formStatus: false,
      form: '[제목] 제목을 입력해주세요.\n[텍스트] 폼 작성을 위한 샘플 양식입니다. 폼 편집 탭에서 자유롭게 수정해주세요.\n[질문_*] 질문을 입력해주세요.\n[주관식] ex) 답변을 입력하세요.\n[질문_*] 두번째 질문을 입력해주세요.\n[객관식] 아시아_유럽\n[질문] 세번째 질문을 입력해주세요.\n[객관식_복수] 태평양_대서양',
    }),
}));

export const useCtaStore = create<CtaStore>((set) => ({
  ctaStatus: false,
  ctaContent: '',
  ctaLink: '',
  ctaFontSize: '24px',
  ctaFontColor: '#FFFFFF',
  ctaBackColor: '#484848',
  setCtaStatus: (ctaStatus: boolean) => set({ ctaStatus }),
  setCtaContent: (ctaContent: string) => set({ ctaContent }),
  setCtaLink: (ctaLink: string) => set({ ctaLink }),
  setCtaFontSize: (ctaFontSize: string) => set({ ctaFontSize }),
  setCtaFontColor: (ctaFontColor: string) => set({ ctaFontColor }),
  setCtaBackColor: (ctaBackColor: string) => set({ ctaBackColor }),
  setCtaAll: (data: PageCta) =>
    set({
      ctaStatus: data.status,
      ctaContent: data.content,
      ctaLink: data.link,
      ctaFontSize: data.fontSize,
      ctaFontColor: data.fontColor,
      ctaBackColor: data.backgroundColor,
    }),
  resetCta: () =>
    set({
      ctaStatus: false,
      ctaContent: '',
      ctaLink: '',
      ctaFontSize: '24px',
      ctaFontColor: '#FFFFFF',
      ctaBackColor: '#484848',
    }),
}));

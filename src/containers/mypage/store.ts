import { create } from 'zustand';

export const useFontStore = create<FontStore>((set) => ({
  font: '',
  setFont: (font) => set({ font }),
}));

export const useEditPageStore = create<EditPageStore>((set) => ({
  editPage: 'notion',
  setEditPage: (editPage) => set({ editPage }),
}));

export const useDisplayStore = create<DisplayStore>((set) => ({
  display: 'notion',
  setDisplay: (display) => set({ display }),
}));

export const useFormStore = create<FormStore>((set) => ({
  form: '[제목] 제목을 입력해주세요.\n[텍스트] 폼 작성을 위한 샘플 양식입니다. 폼 편집 탭에서 자유롭게 수정해주세요.\n[질문_*] 질문을 입력해주세요.\n[주관식]\n[질문_*] 두번째 질문을 입력해주세요.\n[객관식] 아시아_유럽\n[질문] 세번째 질문을 입력해주세요.\n[객관식_복수] 태평양_대서양',
  setForm: (form: string) => set({ form }),
}));

export const useDomainStore = create<DomainSotre>((set) => ({
  domain: '',
  setDomain: (domain) => set({ domain }),
}));

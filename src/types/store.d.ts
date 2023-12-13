interface FontStore {
  font: string;
  setFont: (font: string) => void;
}

interface EditPageStore {
  editPage: 'notion' | 'form';
  setEditPage: (editPage: 'notion' | 'form') => void;
}

interface FormStore {
  form: string;
  setForm: (form: string) => void;
}
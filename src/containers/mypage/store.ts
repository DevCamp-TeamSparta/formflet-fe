import { create } from 'zustand';

interface FontStore {
  font: string;
  setFont: (font: string) => void;
}
export const useFontStore = create<FontStore>((set) => ({
  font: '',
  setFont: (font) => set({ font }),
}));

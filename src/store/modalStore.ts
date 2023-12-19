import { ReactNode } from 'react';
import { create } from 'zustand';

interface ModalStore {
  modal: ReactNode | null;
  setModal: (modal: ReactNode | null) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modal: null,
  setModal: (modal) => set({ modal }),
}));

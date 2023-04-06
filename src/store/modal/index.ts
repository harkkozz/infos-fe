import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type ModalTypes = 'LOGIN' | 'REGISTER';

type ModalType = Record<ModalTypes, boolean>;

type IState = {
  type: Partial<ModalType>;
};

type IAction = {
  open: (type: ModalTypes) => void;
  close: (type: ModalTypes) => void;
};

export const useModalStore = create<IState & IAction>()(
  devtools(
    persist(
      (set) => ({
        type: { LOGIN: false, REGISTER: false },
        open: (dialogType) =>
          set(() => ({
            type: {
              [dialogType]: true
            }
          })),
        close: (dialogType) =>
          set(() => ({
            type: {
              [dialogType]: false
            }
          }))
      }),
      {
        name: 'modal-storage'
      }
    )
  )
);

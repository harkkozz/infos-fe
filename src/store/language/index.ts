import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IState {
  lng: string;
}

interface IAction {
  setLng: (lng: string) => void;
}

export const useLangaugeStore = create<IState & IAction>()(
  devtools(
    persist(
      (set) => ({
        lng: 'en',
        setLng: (lng) =>
          set(
            (state) =>
              state.lng !== lng && {
                lng
              }
          )
      }),
      {
        name: 'language-storage'
      }
    )
  )
);

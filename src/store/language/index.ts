import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ILanguage {
  translationCode: string;
  countryCode: string;
  name: string;
}

interface IState {
  language: ILanguage;
}

interface IAction {
  setLanguage: (language: ILanguage) => void;
}

export const useLangaugeStore = create<IState & IAction>()(
  devtools(
    persist(
      (set) => ({
        language: {
          translationCode: 'en',
          countryCode: 'gb',
          name: 'United Kingdom'
        },
        setLanguage: (language) => set((state) => state.language.countryCode !== language.countryCode && { language })
      }),
      {
        name: 'language-storage'
      }
    )
  )
);

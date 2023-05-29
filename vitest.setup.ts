import 'happy-dom';
import { vi } from 'vitest';

vi.mock('react-i18next', () => ({
  Trans: ({ children }) => children,
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => ({}))
      }
    };
  }
}));

vi.mock('@apollo/client', () => ({
  link: vi.fn().mockReturnValue([]),
  cache: vi.fn(),
  gql: vi.fn()
}));

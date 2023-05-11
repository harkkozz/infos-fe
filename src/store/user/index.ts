import 'react';

import { decodeToken } from 'react-jwt';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IUser {
  id: string;
  name: string;
  slug: string;
  email: string;
  password: string;
}

interface IState {
  iat?: number;
  exp?: number;
  token: string | null;
  user?: Partial<IUser>;
}

interface IAction {
  setUser: (token: string) => void;
}

export const useUserStorage = create<IState & IAction>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        setUser: (token) =>
          set(() => {
            if (token) {
              const decodedJwt: IState = decodeToken(token);

              return {
                ...decodedJwt,
                token
              };
            }

            return {
              token: null,
              user: {}
            };
          })
      }),
      {
        name: 'user-storage'
      }
    )
  )
);

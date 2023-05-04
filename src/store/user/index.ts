import 'react';

import { decodeToken } from 'react-jwt';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IState {
  iat?: number;
  exp?: number;
  token: string | null;
  user?: IUser;
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
          set((state) => {
            if (token) {
              const decodedJwt: IState = decodeToken(token);

              return {
                ...state,
                ...decodedJwt,
                token
              };
            }

            return {
              iat: null,
              exp: null,
              token: null,
              user: null
            };
          })
      }),
      {
        name: 'user-storage'
      }
    )
  )
);

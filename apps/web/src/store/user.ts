import { atom } from 'jotai';

export const userInfoAtom = atom<any>({
  key: 'userInfo',
  role: 'admin',
  default: {},
});

export const userPermissionAtom = atom<string[]>((get) => {
  return get(userInfoAtom).permissions || [];
});

import ky from 'ky';
import { LOCAL_STORAGE_KEYS } from '../consts/storage-keys';

export const instance = ky.create({
  prefixUrl: 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
  },
});

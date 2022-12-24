import axios from 'axios';
import type {
  GenericResponse,
  ILoginInput,
  ILoginResponse,
  ISignUpInput,
  IUserResponse,
} from './types';

const BASE_URL = 'http://localhost:3000/api/';

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<ILoginResponse>('/refresh');
  return response.data;
};

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return authApi(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const signUpUser = async (user: ISignUpInput) => {
  const response = await authApi.post<GenericResponse>('user', user);
  return response.data;
};

export const loginUser = async (user: ILoginInput) => {
  const response = await authApi.post<ILoginResponse>('login', user);
  return response.data;
};

export const verifyEmail = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(
    `auth/verifyemail/${verificationCode}`,
  );
  return response.data;
};

export const logoutUser = async () => {
  const response = await authApi.get<GenericResponse>('auth/logout');
  return response.data;
};

export const getMe = async () => {
  const response = await authApi.get<IUserResponse>('users/me');
  return response.data;
};

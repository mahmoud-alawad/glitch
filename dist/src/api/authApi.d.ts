import type { GenericResponse, ILoginInput, ILoginResponse, ISignUpInput, IUserResponse } from './types';
export declare const refreshAccessTokenFn: () => Promise<ILoginResponse>;
export declare const signUpUser: (user: ISignUpInput) => Promise<GenericResponse>;
export declare const loginUser: (user: ILoginInput) => Promise<ILoginResponse>;
export declare const verifyEmail: (verificationCode: string) => Promise<GenericResponse>;
export declare const logoutUser: () => Promise<GenericResponse>;
export declare const getMe: () => Promise<IUserResponse>;

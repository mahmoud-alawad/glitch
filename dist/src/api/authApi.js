"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.logoutUser = exports.verifyEmail = exports.loginUser = exports.signUpUser = exports.refreshAccessTokenFn = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'http://localhost:3000/api/';
const authApi = axios_1.default.create({
    baseURL: BASE_URL,
    withCredentials: true,
});
authApi.defaults.headers.common['Content-Type'] = 'application/json';
const refreshAccessTokenFn = async () => {
    const response = await authApi.get('/refresh');
    return response.data;
};
exports.refreshAccessTokenFn = refreshAccessTokenFn;
authApi.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message;
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
        originalRequest._retry = true;
        await (0, exports.refreshAccessTokenFn)();
        return authApi(originalRequest);
    }
    return Promise.reject(error);
});
const signUpUser = async (user) => {
    const response = await authApi.post('user', user);
    return response.data;
};
exports.signUpUser = signUpUser;
const loginUser = async (user) => {
    const response = await authApi.post('login', user);
    return response.data;
};
exports.loginUser = loginUser;
const verifyEmail = async (verificationCode) => {
    const response = await authApi.get(`auth/verifyemail/${verificationCode}`);
    return response.data;
};
exports.verifyEmail = verifyEmail;
const logoutUser = async () => {
    const response = await authApi.get('auth/logout');
    return response.data;
};
exports.logoutUser = logoutUser;
const getMe = async () => {
    const response = await authApi.get('users/me');
    return response.data;
};
exports.getMe = getMe;
//# sourceMappingURL=authApi.js.map
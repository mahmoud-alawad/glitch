import type { IUser } from '../api/types';
export declare type AuthStoreState = {
    authUser: IUser | null;
};
export declare const useAuthStore: import("pinia").StoreDefinition<"authStore", AuthStoreState, {}, {
    setAuthUser(user: IUser | null): void;
}>;

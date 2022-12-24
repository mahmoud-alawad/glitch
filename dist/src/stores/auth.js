"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthStore = void 0;
const pinia_1 = require("pinia");
exports.useAuthStore = (0, pinia_1.defineStore)({
    id: 'authStore',
    state: () => ({
        authUser: null,
    }),
    getters: {},
    actions: {
        setAuthUser(user) {
            this.authUser = user;
        },
    },
});
//# sourceMappingURL=auth.js.map
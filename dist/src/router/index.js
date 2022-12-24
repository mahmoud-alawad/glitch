"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_router_1 = require("vue-router");
const router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => Promise.resolve().then(() => __importStar(require('../views/home/index.vue'))),
        },
        {
            path: '/login',
            name: 'login',
            component: () => Promise.resolve().then(() => __importStar(require('../views/auth/Login.vue'))),
            meta: {
                authPage: true,
            },
        },
        {
            path: '/register',
            name: 'register',
            component: () => Promise.resolve().then(() => __importStar(require('../views/auth/Register.vue'))),
            meta: {
                authPage: true,
            },
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => Promise.resolve().then(() => __importStar(require('../views/auth/Profile.vue'))),
            meta: {
                authPage: true,
            },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => Promise.resolve().then(() => __importStar(require('../views/dashboard/Index.vue'))),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/categories',
            name: 'categories',
            component: () => Promise.resolve().then(() => __importStar(require('../views/category/Index.vue'))),
        },
        {
            path: '/category/:slug',
            name: 'detail_category',
            component: () => Promise.resolve().then(() => __importStar(require('../views/category/Show.vue'))),
        },
        {
            path: '/product/:slug',
            name: 'detail_product',
            component: () => Promise.resolve().then(() => __importStar(require('../views/product/Show.vue'))),
        },
        {
            path: '/order',
            name: 'order',
            component: () => Promise.resolve().then(() => __importStar(require('../views/order/Index.vue'))),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/order/:snap_token',
            name: 'detail_order',
            component: () => Promise.resolve().then(() => __importStar(require('../views/order/Show.vue'))),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => Promise.resolve().then(() => __importStar(require('../views/cart/Index.vue'))),
            meta: {
                requiresAuth: true,
            },
        },
    ],
});
exports.default = router;
//# sourceMappingURL=index.js.map
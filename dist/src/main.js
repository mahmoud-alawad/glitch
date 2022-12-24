"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const pinia_1 = require("pinia");
const App_vue_1 = __importDefault(require("./App.vue"));
const router_1 = __importDefault(require("./router"));
const app = (0, vue_1.createApp)(App_vue_1.default);
app.use((0, pinia_1.createPinia)());
app.use(router_1.default);
app
    .mixin({
    methods: {
        moneyFormat(number) {
            const reverse = number.toString().split('').reverse().join('');
            let thousands = reverse.match(/\d{1,3}/g);
            thousands = thousands.join('.').split('').reverse().join('');
            return thousands;
        },
        calculateDiscount(product) {
            return product.price - (product.price * product.discount) / 100;
        },
    },
})
    .mount('#app');
//# sourceMappingURL=main.js.map
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
//define mixins for global function
app
  .mixin({
    methods: {
      //money thousands
      moneyFormat(number) {
        const reverse = number.toString().split('').reverse().join('');
        let thousands = reverse.match(/\d{1,3}/g);
        thousands = thousands.join('.').split('').reverse().join('');
        return thousands;
      },
      //calculate discount
      calculateDiscount(product) {
        return product.price - (product.price * product.discount) / 100;
      },
    },
  })
  .mount('#app');

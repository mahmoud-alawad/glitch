import { defineStore } from 'pinia';
import Api from '../api/api';
// import { useCartStore } from '@/stores/cart'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || null
  }),

  getters: {
    iUser: (state) => state.token,
    // isLoggedIn: (state) => state.user !== null
  },
  actions: {
    getUser() {
      const token = localStorage.getItem('token');
      Api.get('/user', { headers: { Authorization: 'Bearer' + ' '+token } }).then(
        (respons) => {
          console.log(respons);
          localStorage.setItem('user', JSON.stringify(respons.data))
        },
      );
    },

    logout() {
      const token = localStorage.getItem('token');

      // const store = useCartStore()
      console.log(token);
      Api.post('logout',{ headers: { Authorization: 'Bearer' + ' '+token } }).then((res) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        store.carts = 0;
        console.log(res);
        this.token = '';
      });
    },

    login(credential) {
      // const store = useCartStore()

      return new Promise((resolve, reject) => {
        Api.post('login', credential)
          .then((response) => {
            console.log(credential);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);

            //  localStorage.setItem('user', JSON.stringify(this.getUser))

            store.cartCount();
            console.log(response);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    register(credential) {
      return new Promise((resolve, reject) => {
        Api.post('register', credential)
          .then((response) => {
            const token = response.data.token;
            const user = response.data.user;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            Api.defaults.headers.common['Authorization'] = 'Bearer ' + token;

            resolve();
          })
          .catch((error) => {
            reject(error.response.data);
          });
      });
    },
  },
});

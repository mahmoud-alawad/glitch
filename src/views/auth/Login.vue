<template>
  <form
      @submit.prevent="login"
      class="mt-10 w-11/12 md:w-1/2 mx-auto bg-white shadow-md rounded p-4 lg:p-8 my-10"
  >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        email
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="errors.email ? ' border-red-800 text-red-800' : ''"
          id="username"
          type="email"
          v-model="email"
          placeholder="email"
      />
      <div v-if="errors.email" class="mt-2 border border-red-600">
        {{ errors.email[0] }}
      </div>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="password"
          placeholder="******************"
      />
      <div v-if="errors.password" class="mt-2 border border-red-600">
        {{ errors.password[0] }}
      </div>
    </div>
    <div class="flex items-center justify-between">
      <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
      >
        Sign In
      </button>
      <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
  <button class="bg-red-800" type="submit" @click="getUser">get user</button>
  <div></div>
</template>

<script>
import {reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useAuthStore} from '@/stores/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: {},
      store: useAuthStore(),
      router : useRouter(),
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // whenever question changes, this function will run
    email(newEmail, oldEmail) {
      console.log(newEmail,oldEmail);
      if (!this.validateEmail(newEmail)) {
       this.errors.email= ['The email field is required.'];
      }else {

      }
    },
    password(newPassword, oldPassword){

    }
  },
  methods: {
    async login() {

      try {
        // Perform validation
        if (!this.email) {
          this.errors.email = ['The email field is required.'];
          console.log(this.errors.email)
        }
        if (!this.password || this.password < 4) {
          this.errors.password = ['The password field is required.'];
        }
        if (Object.keys(this.errors).length === 0) {
          const isUser = await this.store
              .login({email: this.email, password: this.password})
              .then((s) => {
                router.push({
                  name: 'dashboard',
                });
                console.log(s);
              })
        }
      }catch (erorr) {
        // If the login failed, display an error message
        if (error.response.status === 401) {
          this.errors.form = ['Invalid email or password.'];
        } else {
          this.errors.form = ['An unexpected error occurred.'];
        }
      }

    },
    validateEmail(value) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }
  }
/*
  setup: function () {

    const user = reactive({
      email: '',
      password: '',
    });

    let errors = {};

    const store = useAuthStore();
    const router = useRouter();

    function getUser() {
      const userInfo = store.getUser();
    }

    function validateEmail(value) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }

    async function login() {
      // Clear any previous errors
      errors = {};
      console.log(user, errors);
      // Perform validation
      if (!validateEmail(user.email)) {
        errors.email = ['The email field is required.'];
        console.log(errors.email)
      }
      if (!user.password || user.password < 4) {
        errors.password = ['The password field is required.'];
      }
      if (Object.keys(errors).length === 0) {
        const isUser = await store
            .login({email: user.email, password: user.password})
            .then((s) => {
              router.push({
                name: 'dashboard',
              });
              console.log(s);
            }).catch(error => {
              // If the login failed, display an error message
              if (error.response.status === 401) {
                this.errors.form = ['Invalid email or password.'];
              } else {
                this.errors.form = ['An unexpected error occurred.'];
              }
            });
      }
    }

    return {
      user,
      login,
      getUser,
      errors,
    };
  },
*/
};
</script>


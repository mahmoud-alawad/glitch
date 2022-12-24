<template>
  <div class="relative my-10 rounded-md shadow-sm">
    <img
      class="h-40 mx-auto bg-red-900 w-40 rounded-full object-cover object-center"
      :src="user.avatar"
      alt=".."
    />
    <div class="px-6 py-4 mx-auto font-bold text-center text-xl mb-2">{{ user.name }}</div>

    <div class="px-6 py-4 flex flex-wrap">
      <div
        class="w-full inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >
        Address: <span class="pl-4">{{ user.address }}</span>
      </div>
      <div
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
      >
        Joined
        <span class="pl-4">
          {{
            user.createdAt.match(
              /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
              '',
            )[0]
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

export default {
  setup() {
    const store = useAuthStore();
    const user = computed(() => {
      console.log(store.user.createdAt);
      return store.user;
    });

    function logOut() {
      store.logout();
    }
    return {
      user,
      logOut,
    };
  },
};
</script>


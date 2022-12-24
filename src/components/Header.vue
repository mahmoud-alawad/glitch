<!-- <template>
    <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-3 col-7">
                        <router-link :to="{ name: 'home' }" class="text-decoration-none" data- abc="true">
                            <span class="logo"> <i class="fa fa-car" aria-hidden="true"></i> Home
                            </span></router-link>
                    </div>
                    <div class="col-md-5 d-none d-md-block">
                        <form class="search-wrap">
                            <div class="input-group w-100"><input type="text" class="form-control search-form"
                                    style="width:55%;border: 1px solid #ffffff" name="q"
                                    placeholder="mau beli apa hari ini ?">
                                <div class="input-group-append">
                                    <button class="btn search-button" type="submit"><i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 col-5">
                        <div class="d-flex justify-content-end">
                            <div class="cart-header">
                                <router-link :to="{ name: 'cart' }" class="btn search-button btn-md" @click="check()"
                                    style="color: #ffffff;background-color: #6677ef;border-color: #ffffff;"><i
                                        class="fa fa-shopping-cart"></i>{{ cartCount }}
                                </router-link>
                            </div>
                            <div class="account">
                                <router-link :to="{ name: 'login' }" v-if="!isLoggedIn"
                                    class="btn search-button btn-md d-none d-md-block ml-4">
                                    <i class="fa fa-user-circle"></i>
                                    Account
                                </router-link>
                                <router-link :to="{ name: 'dashboard' }" v-else
                                    class="btn search-button btn-md d-none d-md-block ml-4">
                                    <i class="fa fa-user-circle"></i>
                                    Dashboard
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template> -->
<template>
  <div class="header w-full bg-white">
    <div class="w-full bg-gray-300">
      <div class="container p-4 flex justify-between items-center">
        <div
          class="w-[10%] cursor-pointer lg:hidden"
          @click="toggle !== true"
          :class="toggle ? 'icon-close' : 'icon-bars'"
        ></div>
        <a class="hidden lg:block">logo</a>
        <nav>
          <div class="user-tools">
            <router-link :to="{ name: 'login' }" class="icon-user1">
            </router-link>

            <router-link :to="{ name: 'cart' }" class="pl-2 icon-cart">
            </router-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
// import { useCartStore } from '../stores/cart';
export default defineComponent({
  setup() {
    let toggle = ref(false);
    const store = useAuthStore();
    // const cartStore = useCartStore()
    // const router = useRouter()
    // const cartCount = computed(() => {
    //     return cartStore.contGetter
    // })
    // function check() {
    //     const token = store.token
    //     if (!token) {
    //         return router.push({ name: 'login' })
    //     }
    //     cartStore.cartCount()
    // }
    const isLoggedIn = computed(() => {
      return store.iUser;
    });

    const user = store.user ?? null;
    return {
      isLoggedIn,
      user,
      toggle,
      // cartCount,
      // check
    };
  },
});
</script>

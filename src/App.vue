<template>
  <HeaderVue />
    <RouterView />
  <FooterVue />
</template>
<script>

import FooterVue from "@/components/Footer.vue";
import HeaderVue from "@/components/Header.vue";

export default {
  components: {
    HeaderVue,
    FooterVue
  }
}

</script>

<style>
@import '@/assets/css/styles.css';
</style>

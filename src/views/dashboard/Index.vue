<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row">
            <div class="col-md-3 mb-4">
                <CustomerMenu />
            </div>
            <div class="col-md-9 mb-4">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h5 class="font-weight-bold"> <i class="fas fa-tachometer-alt"></i> DASHBOARD</h5>
                        <hr>
                        Selamat Datang <strong> {{ user.name }}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// import CustomerMenu from '@/components/CustomerMenu.vue'


// // core
// import { computed, onMounted } from 'vue'
// import { useAuthStore } from '@/stores/auth'
// export default {
//     components: {
//         CustomerMenu
//     },
//     setup() {
//         const store = useAuthStore()

//         onMounted(() => {
//             store.getUser()
//         })
//         const user = computed(() => {
//             return store.iUser
//         })
//         return {
//             user,
//         }
//     }
// }
</script>

<style>

</style>
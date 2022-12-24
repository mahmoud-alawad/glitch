<template>
<div>cart</div>
</template>

<script setup lang="ts">
// import { computed, defineComponent, onMounted, reactive } from 'vue'
// import { useCartStore } from '@/stores/cart'
// import { useOngkirStore } from '@/stores/ongkir'
// export default defineComponent({
//     setup() {

//         const state = reactive({
//             name: '',     // <-- state name
//             phone: '',     // <-- state phone  
//             address: '',     // <-- state address  
//             province_id: '',     // <-- state ID province
//             city_id: '',     // <-- state ID City
//             courier: false,  // <-- state pilihan kurir
//             courier_type: '',     // <-- state jenis kurir 
//             cost: false,  // <-- state cost kurir
//             costs: '',     // <-- state costs kurir
//             costService: '',     // <-- state get data cost dan service pengiriman
//             cost_courier: 0,      // <-- state untuk menyimpan cost kurir
//             courier_service: '',     // <- state untuk menyimpan service kurir        
//             buttonCheckout: false,  // <-- state button checkout 
//             grand_total: 0       // <-- state untuk grand total 
//         })

//         const store = useCartStore()
//         const storeOngkir = useOngkirStore()

//         onMounted(() => {
//             store.cartCount()
//             store.cartTotals()
//             store.cartWeights()

//             // store ongkir
//             storeOngkir.getProvinciesData()
//             storeOngkir.getCitiesData()
//         })

//         const carts = computed(() => {
//             return store.cartGetter
//         })
//         const cartTotal = computed(() => {
//             return store.totalGetter
//         })

//         const cartWeight = computed(() => {
//             return store.weightGetter

//         })

//         /// ongkir 
//         const provinces = computed(() => {
//             return storeOngkir.provincieGetter
//         })
//         const cities = computed(() => {
//             return storeOngkir.citieGetter
//         })

//         async function getCities(province_id) {
//             await storeOngkir.getCitiesData({
//                 province_id: province_id
//             })
//         }
//         function removeCart(cart_id) {
//             store.removeCart({
//                 cart_id: cart_id
//             })
//         }
//         return {
//             state,
//             carts,
//             cartTotal,
//             cartWeight,
//             removeCart,
//             provinces,
//             cities,
//             getCities
//         }
//     },
// })
</script>

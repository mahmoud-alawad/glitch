<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row">
            <div v-for="category in categories" :key="category.id" class="col-md-2 col-4 mb-3">
                <router-link :to="{ name: 'detail_category', params: { slug: category.slug } }">
                    <div class="card h-100 border-0 rounded shadow">
                        <div class="card-body text-center">
                            <img :src="category.image" style="width:100px;">
                            <hr>
                            <label class="font-weight-bold">{{ category.name }}</label>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { computed, defineComponent, onMounted } from "vue";
// import { useCategoryStore } from "@/stores/category";


// export default defineComponent({
//     setup() {
//         const store = useCategoryStore()

//         onMounted(() => {
//             store.getCategoriesData()
//         })

//         const categories = computed(() => {
//             return store.getCategories
//         })

//         return {
//             categories
//         }
//     }
// })
</script>
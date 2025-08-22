<script setup>
const route = useRoute();
const { data } = await useFetch(`/api/collections/${route.params.handle}`)

//const menu = data.value.menu;
const collections = data.value.collections;

/* layout */
definePageMeta({
    layout: 'collections'
})

/* useSeoMeta({
    title: data?.value?.collections.seo?.title || data?.value?.title,
    description: data?.value.collections?.seo?.description || 'Description'
}) */
</script>
<template>
    <div class="max-w-screen-xl mx-auto">
        <div class="px-8 py-3 border-b border-b-gray-200">
            <ol class="flex items-center space-x-1 text-sm text-gray-600">
                <!-- Home -->
                <li>
                    Home
                </li>

                <!-- Separator -->
                <li class="flex items-center">
                    <svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </li>

                <!-- Current Page -->
                <li class="font-medium text-gray-900" aria-current="page">
                    {{ collections.title }}
                    Collections
                </li>
            </ol>
        </div>

        <!-- Container for Sidebar and Main Content -->
        <div class="flex">
            <!-- Sidebar - Sticky below navbar -->
            <store-side-bar-filter :filters="collections.products.filters" />

            <!-- Main Content Area -->
            <main class="flex-1 min-h-screen">
                <div class="p-5">
                    <div class="rounded-lg">
                        <div class="mb-5">
                            <p class="text-gray-600 text-sm">{{ collections.description }}</p>
                        </div>
                        <StoreCollectionList v-slot="{ item }" :collections="collections.products.edges">
                            <StoreCollectionCard :tags="item.tags" :title="item.title"
                                :featuredImage="item.featuredImage" :variants="item.variants.edges"
                                :priceRange="item.priceRange" :compareAtPriceRange="item.compareAtPriceRange" />
                        </StoreCollectionList>

                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
const { collections = [] } = defineProps<{
    collections: Array<object>;
}>();
</script>

<template>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="collection in collections">
            <!-- <pre>{{ collection.node.priceRange.maxVariantPrice }}</pre> -->
            <slot :item="collection?.node" />
        </div>
    </div>
</template>
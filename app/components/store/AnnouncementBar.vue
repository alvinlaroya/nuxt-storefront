<script setup lang="ts">
const { bgColor = 'white', content = 'This is announcement bar' } = defineProps<{
    content?: string,
    bgColor?: string
}>();
</script>

<!-- <template>
    <div class="w-full bg-color flex items-center justify-center p-1">
        <span class="text-sm">{{ content }}</span>
    </div>
</template>
 -->

<template>
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4">
        <p class="text-sm">
            🎉 Special Offer: Get 50% off on all premium features!
            <a href="#" class="underline hover:no-underline font-medium">Learn More</a>
        </p>
    </div>
</template>

<style scoped>
.bg-color {
    background-color: v-bind(bgColor);
}
</style>
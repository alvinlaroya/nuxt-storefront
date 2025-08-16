<script setup lang="ts">
import type { CardProps } from './types';

const {
    tags = [],
    title = "Product Title",
    featuredImage = {
        id: "",
        url: "",
        thumbhash: "",
        altText: "",
        height: 0,
        width: 0
    },
    variants = [],
    priceRange = {
        maxVariantPrice: {
            amount: '0.00',
            currencyCode: ''
        }
    },
    compareAtPriceRange = {
        maxVariantPrice: {
            amount: '0.00',
            currencyCode: ''
        }
    }
} = defineProps<CardProps>();

const isDiscounted = computed(() => parseInt(compareAtPriceRange?.maxVariantPrice?.amount) - parseInt(priceRange?.maxVariantPrice?.amount) > 0)
</script>

<template>
    <div
        class="max-w-sm mx-auto bg-white border border-gray-100 rounded-lg overflow-hidden group hover:cursor-pointer hover:shadow-lg">
        <!-- Product Image Section -->
        <div class="relative bg-gray-50">
            <!-- Size badges -->
            <div class="absolute top-3 left-3 flex gap-1 z-10">
                <span class="bg-black text-white px-2 py-1 text-xs font-medium" v-for="tag in tags">
                    {{ tag }}
                </span>
            </div>

            <!-- Product Image -->
            <div class="flex items-center justify-center overflow-clip">
                <NuxtImg :src="featuredImage.url" :alt="featuredImage.altText" :width="featuredImage.width"
                    :height="featuredImage.height" :modifiers="{ crop: 'center', padColor: 'ff0000', format: 'webp' }"
                    class="group-hover:scale-125 transition-all" />
            </div>
        </div>

        <!-- Product Details -->
        <div class="p-4 space-y-1">
            <!-- Product Title -->
            <h3 class="text-sm font-bold text-gray-900 uppercase">
                {{ title }}
            </h3>

            <div class="flex justify-between flex-col lg:flex-row">
                <!-- Pricing -->
                <div class="flex items-center gap-2">
                    <span class="text-lg font-bold text-gray-900">${{ priceRange.maxVariantPrice.amount }}</span>
                    <span v-if="isDiscounted" class="text-sm text-gray-500 line-through">${{
                        compareAtPriceRange.maxVariantPrice.amount }}</span>
                </div>

                <!-- Rating -->
                <div class="flex items-center gap-1">
                    <div class="flex">
                        <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <span class="text-gray-500 text-sm">(0)</span>
                </div>
            </div>

            <!-- Color Selection -->
            <!--  <div class="space-y-2">
                <div class="flex items-center gap-2">
                    <span class="text-sm font-medium text-gray-900">Color:</span>
                    <span class="text-sm text-gray-700" id="selected-color">Black</span>
                </div>

                <div class="flex gap-2">
                    <button
                        class="color-option w-8 h-8 rounded border-2 overflow-hidden transition-all border-black ring-1 ring-black ring-offset-1"
                        data-color="Black">
                        <div class="w-full h-full bg-black"></div>
                    </button>
                    <button
                        class="color-option w-8 h-8 rounded border-2 overflow-hidden transition-all border-gray-300 hover:border-gray-400"
                        data-color="Brown">
                        <div class="w-full h-full bg-amber-800"></div>
                    </button>
                    <button
                        class="color-option w-8 h-8 rounded border-2 overflow-hidden transition-all border-gray-300 hover:border-gray-400"
                        data-color="Navy">
                        <div class="w-full h-full bg-blue-900"></div>
                    </button>
                    <button
                        class="color-option w-8 h-8 rounded border-2 overflow-hidden transition-all border-gray-300 hover:border-gray-400"
                        data-color="Olive">
                        <div class="w-full h-full bg-green-700"></div>
                    </button>
                    <button
                        class="color-option w-8 h-8 rounded border-2 overflow-hidden transition-all border-gray-300 hover:border-gray-400"
                        data-color="Nude">
                        <div class="w-full h-full bg-rose-200"></div>
                    </button>
                </div>
            </div> -->

            <!-- Size Selection -->
            <div class="space-y-2 hidden group-hover:block">
                <span class="text-sm font-medium text-gray-900">Size:</span>

                <div class="grid grid-cols-6 gap-1">
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="6" onclick="selectSize(this, '6')">
                        6
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="6.5" onclick="selectSize(this, '6.5')">
                        6.5
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="7" onclick="selectSize(this, '7')">
                        7
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="7.5" onclick="selectSize(this, '7.5')">
                        7.5
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="8" onclick="selectSize(this, '8')">
                        8
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="8.5" onclick="selectSize(this, '8.5')">
                        8.5
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="9" onclick="selectSize(this, '9')">
                        9
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="9.5" onclick="selectSize(this, '9.5')">
                        9.5
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="10" onclick="selectSize(this, '10')">
                        10
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="11" onclick="selectSize(this, '11')">
                        11
                    </button>
                    <button
                        class="size-option py-1 px-2 border rounded text-xs font-medium transition-all border-gray-300 hover:border-gray-400 text-gray-700"
                        data-size="12" onclick="selectSize(this, '12')">
                        12
                    </button>
                </div>
            </div>

            <!-- Add to Cart Button -->
            <button
                class="w-full bg-black text-white py-3 px-4 rounded font-medium text-sm hover:bg-gray-800 transition-colors hidden group-hover:block"
                onclick="handleAddToCart()">
                ADD TO CART
            </button>
        </div>
    </div>
</template>
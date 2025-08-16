<script setup lang="ts">
const { filters = [] } = defineProps<{
    filters: Array<object>;
}>();
</script>

<template>
    <aside class="hidden xl:flex sticky top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 overflow-y-auto">
        <div class="bg-base-100 text-base-content">
            <div class="join join-vertical">
                <div v-for="filter in filters" class="collapse collapse-arrow join-item divide-y divide-gray-200">
                    <input type="radio" name="my-accordion-4" />
                    <div class="collapse-title text-sm pl-8">{{ filter.label }}</div>
                    <div class="collapse-content text-sm">
                        <ul tabindex="0" class="dropdown-content z-50 visible grid {sortMenuOpen
						? 'visible'
						: 'hidden'} menu rounded-box min-w-52">
                            <div v-for="(option, idx) in filter.values" class="overflow-auto mb-2">
                                <li class="cursor-pointer">
                                    <button class="flex justify-between text-xs cursor-pointer">
                                        <!-- :class="{ 'semi-bold': selectedFilters.some((item) => item.id === option.id }"
                                        @click="()=> selectFilterHandler(option)" -->
                                        <div>
                                            <input type="checkbox" :id="`option-${idx}`" :name="option.label"
                                                :value="option" class="hover:cursor-pointer" />
                                            <!-- :checked=selectedFilters.some((item)=> item.id === option.id)" -->
                                            <label :for="`option-${idx}`" class="ml-2 cursor-pointer">{{ option.label
                                            }}</label><br />
                                        </div>
                                        <span>({{ option.count }})</span>
                                    </button>
                                </li>
                            </div>
                            <button class="btn btn-sm rounded-full" on:click={applyFiltersHandler}>APPLY</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>
<template>
    <nav class="sticky top-0 bg-black text-white z-50 border-b border-gray-200">
        <div class="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div class="flex justify-between items-center h-16">
                <!-- Logo/Brand -->
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img src="https://journeecollection.com/cdn/shop/files/Menu_Logo_-_Stacked_White_eaa4883b-e82e-4289-a6fe-2d935ec18dda.png?v=1715964527&width=100"
                            alt="">
                    </div>
                </div>

                <!-- Navigation Links -->
                <div class="hidden md:block">
                    <div class="flex items-center space-x-4">
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>

                <!-- Profile/User Menu -->
                <div class="flex items-center">
                    <button class="px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                        <Icon name="lucide:shopping-cart" size="1.2rem" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
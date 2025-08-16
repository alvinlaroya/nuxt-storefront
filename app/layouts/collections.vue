<template>
    <div class="bg-base-100 text-base-content">
        <!-- Announcement Bar - Not sticky, very top -->
        <store-announcement-bar />

        <!-- Sticky Navbar - Below announcement bar -->
        <store-navbar />

        <slot />
    </div>
</template>
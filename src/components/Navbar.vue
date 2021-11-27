<template>
  <nav class="desktop md:flex md:justify-end w-full">
    <div class="px-4">
      <!-- primary menu -->
      <div class="flex justify-end">
        <!-- Primary Navbar items -->
        <div class="hidden md:flex">
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'Works' }">Works</router-link>
          <router-link :to="{ name: 'Blog' }">Blog</router-link>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden w-auto z-50" :class="{ fixed: isFixed }">
          <button
            @click="handleMobileMenu()"
            class="outline-none mobile-menu-button"
          >
            <svg
              class="w-6 h-6 text-gray-500 hover:text-green-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <!-- mobile menu -->
        <div class="mobile-menu w-auto" :class="{ hidden: isHidden }">
          <ul class="fixed text-center bg-white inset-0 pt-14">
            <li class="active py-3">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="py-3">
              <router-link :to="{ name: 'Works' }">Works</router-link>
            </li>
            <li class="py-3">
              <router-link :to="{ name: 'Blog' }">Blog</router-link>
            </li>
            <li class="py-3">
              <router-link :to="{ name: 'Contact' }">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const isHidden = ref(true);
    const isFixed = ref(false);

    const handleMobileMenu = () => {
      isHidden.value = !isHidden.value;
      isFixed.value = !isFixed.value;
    };

    return { handleMobileMenu, isHidden, isFixed };
  },
};
</script>


<style>
nav {
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-top: 27px;
}
nav a {
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  margin-left: 33px;
}
nav a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
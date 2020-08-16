<template>
  <header class="shadow w-screen">
    <nav class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
      <nav class="flex items-center justify-between flex-wrap bg-nav p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >Crypto Exchange</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/danielstevensarmiento/"
          class="mr-10 text-white"
          >Linkedin</a
        >
        <a href="https://github.com/DanielSarmientoDev" class="mr-10 text-white"
          >Github</a
        >
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "PxHeader",

  components: { PxIcon },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    oonScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 60px;
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>

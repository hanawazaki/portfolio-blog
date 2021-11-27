<template>
  <div class="home">
    <Hero />
    <!-- <RecentPost /> -->
    <Featured />
    <Footer />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import RecentPost from "../components/RecentPost.vue";
import Featured from "../components/Featured.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Hero, RecentPost, Featured, Footer },
  setup() {},
};
</script>

<style>
</style>
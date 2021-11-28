<template>
  <div class="home">
    <Hero />
    <!-- <RecentPost /> -->
    <Featured />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import RecentPost from "../components/RecentPost.vue";
import Featured from "../components/Featured.vue";

export default {
  components: { Hero, RecentPost, Featured },
  setup() {},
};
</script>

<style>
</style>
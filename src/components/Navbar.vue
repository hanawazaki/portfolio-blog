<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Works' }">Works</router-link>
      <router-link :to="{ name: 'Blog' }">Blog</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  setup() {},
};
</script>


<style>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  margin-top: 27px;
}
header a {
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  margin-left: 33px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
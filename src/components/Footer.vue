<template>
  <div class="footer p-12">
    <div class="footer_logos flex justify-center">
      <a href="#"><img src="../assets/img/fb.png" alt="fb_logo" /></a>
      <a href="#"><img src="../assets/img/insta.png" alt="insta_logo" /></a>
      <a href="#"><img src="../assets/img/twt.png" alt="twt_logo" /></a>
      <a href="#"><img src="../assets/img/linkedin.png" alt="in_logo" /></a>
    </div>
    <h5 class="footer_text text-center mt-7 text-dark font-normal text-sm">
      Copyright ©{{ yearNow }} All rights reserved
    </h5>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const year = new Date();
    const yearNow = ref(null);
    yearNow.value = year.getFullYear();

    return { yearNow };
  },
};
</script>

<style>
.footer_logos img {
  width: 30px;
  margin-right: 15px;
  margin-left: 15px;
}
</style>
<template>
  <div class="hero md:flex md:justify-between mt-8 md:mt-36 md:mx-36">
    <div
      class="
        text-dark text-3xl
        sm:flex sm:flex-col
        text-center
        sm:w-full
        md:w-2/3 md:hero-text md:text-left
      "
    >
      <img
        src="../assets/img/photo.jpg"
        class="w-44 mx-auto rounded-full md:hidden"
        alt=""
      />
      <h1
        class="
          md:text-5xl md:font-semibold
          mt-8
          font-semibold
          text-2xl
          md:leading-11
        "
      >
        Hi, I am <br />{{ data.name }}
      </h1>
      <h3 class="md:text-left md:leading-11 md:text-4xl text-2xl font-medium">
        {{ data.role }}
      </h3>
      <p
        class="
          mt-5
          w-full
          text-dark text-base
          px-5
          mb-7
          md:mt-10 md:text-left md:mb-12 md:w-57 md:px-0
        "
      >
        {{ data.description }}
      </p>
      <a
        href="#"
        class="
          btn
          bg-greenCool
          text-white text-xl
          px-5
          py-2
          rounded-sm
          md:mb-20
          align-center
          w-56
          mb-14
          md:text-center
        "
      >
        Download Resume
      </a>
    </div>
    <div class="hero-photo w-1/3 hidden md:block">
      <img
        src="../assets/img/photo.jpg"
        class="w-56.5 mx-auto rounded-full"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const data = ref({});
    data.value = {
      name: "Hairul Ardhan Nawazaki",
      photo: "",
      role: "Frontend Developer",
      description:
        " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      resume: "",
    };

    return { data };
  },
};
</script>

<style>
/* .hero-text h1 {
  font-size: 44px;
  font-weight: 600;
  line-height: 60px;
  color: #21243d;
}

.hero-text h3 {
  font-size: 34px;
  font-weight: 600;
  line-height: 60px;
  color: #21243d;
} */
</style>
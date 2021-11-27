<template>
  <div class="hero flex md:justify-between mt-8 md:mt-36 md:mx-36">
    <div
      class="
        text-dark text-3xl
        flex flex-col
        text-center
        md:hero-text
        w-full
        md:w-2/3
        items-center
      "
    >
      <img
        src="../assets/img/photo.jpg"
        class="w-44 mx-auto rounded-full md:hidden"
        alt=""
      />
      <h1 class="md:text-lg mt-8 font-bold text-3xl">
        Hi, I am <br />{{ data.name }},
      </h1>
      <h3>{{ data.role }}</h3>
      <p class="md:mt-10 mt-5 w-full px-5 text-dark text-base mb-7 md:mb-12">
        {{ data.description }}
      </p>
      <a
        class="
          btn
          bg-greenCool
          text-white text-xl
          px-5
          py-2
          rounded-sm
          mb-20
          align-center
          w-56
        "
      >
        Download Resume
      </a>
    </div>
    <div class="hero-photo w-1/3 hidden md:block">
      <img
        src="../assets/img/photo.jpg"
        class="w-56 mx-auto rounded-full"
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
.hero-text h1 {
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
}

.hero-text p {
  width: 31rem;
  line-height: 23px;
}
</style>
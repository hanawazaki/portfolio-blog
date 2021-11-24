<template>
  <div class="featured bg-white mb-20">
    <div class="mx-36">
      <h3 class="text-xl font-normal text-dark py-5 featured_title">
        Featured works
      </h3>
      <div class="container" v-for="data in featured" :key="data.id">
        <div class="featured_card flex">
          <img :src="data.imageUrl" class="card-img w-60" alt="featured" />
          <div class="card-content ml-5">
            <h1 class="text-dark font-bold text-3xl mb-4">{{ data.title }}</h1>
            <div class="tag flex px-0">
              <span
                class="
                  bg-dark
                  font-black
                  text-lg text-white
                  rounded-full
                  px-2
                  py-0
                "
                >{{ data.year }}</span
              >
              <span class="text-light text-xl font-normal ml-6">{{
                data.tag
              }}</span>
            </div>
            <p class="text-dark text-base font-normal leading-6 featured_desc">
              {{ data.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const featured = ref([]);
    featured.value = [
      {
        id: 1,
        title: "Designing Dashboards",
        imageUrl: "src/assets/img/featured1.png",
        year: "2020",
        tag: "Dashboard",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        id: 2,
        title: "Vibrant Portraits of 2020",
        imageUrl: "src/assets/img/featured2.png",
        year: "2018",
        tag: "Illustration",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        id: 3,
        title: "36 Days of Malayalam type",
        imageUrl: "src/assets/img/featured3.png",
        year: "2018",
        tag: "Typography",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
      },
    ];
    return { featured };
  },
};
</script>

<style>
.featured_card {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 31px;
}

.featured_title {
  line-height: 60px;
}

.featured_desc {
  width: 580px;
  margin-top: 17px;
}
</style>
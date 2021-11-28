<template>
  <div class="featured bg-white mb-20 mt-10 md:mt-4">
    <div class="md:mx-36">
      <h3
        class="
          md:text-xl md:text-left
          text-lg text-center
          font-normal
          text-dark
          py-5
          featured_title
        "
      >
        My Projects
      </h3>
      <div v-for="data in featured" :key="data.id">
        <div class="featured_card flex flex-col md:flex-row items-center">
          <img
            :src="data.imageUrl"
            class="card-img md:w-60 w-56.75"
            alt="featured"
          />
          <div class="card-content md:ml-5 text-left">
            <h1 class="text-dark font-bold mt-4 md:text-3xl text-2xl mb-2">
              {{ data.title }}
            </h1>
            <div class="tag flex md:px-0 justify-start pl-0">
              <span
                class="
                  bg-dark
                  font-medium
                  text-md text-white
                  rounded-full
                  px-2
                  py-0
                  mr-2
                "
                v-for="tag in data.tags"
                :key="tag"
                >{{ tag }}</span
              >
            </div>
            <p
              class="
                text-dark text-base
                font-normal
                mt-3
                leading-6
                md:w-58
                w-56.75
              "
            >
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
        title: "Project X",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/blog-vue-a2f67.appspot.com/o/featured1.png?alt=media&token=417799ac-949f-4266-9cf1-10a618c44352",
        tags: ["vuejs", "tailwindcss"],
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        id: 2,
        title: "Project Y",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/blog-vue-a2f67.appspot.com/o/featured2.png?alt=media&token=4fd698fb-6b4f-498e-bc57-5b9540e45ae7",
        tags: ["vuejs", "tailwindcss"],
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        id: 3,
        title: "Project Z",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/blog-vue-a2f67.appspot.com/o/featured3.png?alt=media&token=7c5784e5-e50b-474a-a3aa-c75d6992ba2b",
        tags: ["laravel", "bootstrap"],
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
</style>
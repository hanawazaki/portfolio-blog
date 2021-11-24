<template>
  <div class="recent-post bg-blueLight pb-6">
    <div class="mx-36">
      <div class="flex justify-between py-5">
        <h3 class="text-dark text-xl font-normal">Recent posts</h3>
        <h5 class="text-secondary text-base font-normal">
          <router-link :to="{ name: 'Blog' }">View All</router-link>
        </h5>
      </div>
      <div class="flex">
        <div class="w-1/2 mr-2">
          <div class="card p-10">
            <h4 class="title">Making a desing system from scratch</h4>
            <p class="date">
              12 Feb 2020 &nbsp; &nbsp; | &nbsp; &nbsp; Design, Pattern
            </p>
            <p class="desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div class="w-1/2 ml-2">
          <div class="card p-10">
            <h4 class="title">Creating pixel perfect icons in Figma</h4>
            <p class="date">
              12 Feb 2020 &nbsp; &nbsp; | &nbsp; &nbsp; Figma, Icon Design
            </p>
            <p class="desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  background-color: #fff;
  /* padding: 24px 22px 0 22px; */
}

.card .title {
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  color: var(--dark);
  margin-bottom: 20px;
}

.card .date {
  font-size: 18px;
  font-weight: 400;
  color: var(--dark);
  margin-bottom: 20px;
}

.card .desc {
  font-size: 16px;
  font-weight: 400;
  color: var(--dark);
}
</style>
<template>
  <a href="">
    <div
      class="fixed h-12 w-12 z-[60] shadow-md rounded-full bg-blue-600 bottom-4 right-4 flex justify-center items-center"
    >
      <i class="fa-sharp fa-solid fa-arrow-up text-white"></i></div
  ></a>
  <Navigation />

  
  <Footer />
</template>

<script>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style scoped>
.overlay {
  opacity: 0.75;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

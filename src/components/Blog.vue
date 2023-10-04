<template>
  <div class="h-24"><Navigation /></div>

  <div></div>
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

  setup() {
    return {};
  },
};
</script>
<style></style>

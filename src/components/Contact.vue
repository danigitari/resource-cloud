<template>
  <div class="bg-gray-50">
    <div class="z-20 shadow-md"><Navigation /></div>
    <div
      class="text-center flex max-w-screen justify-center text-3xl font-semibold b p-10"
    >
      Contact us
    </div>
    <div class="flex flex-wrap max-w-screen mb-20">
      <div class="w-full lg:w-1/2 px-5 bg-transparent">
        <img
          src="/assets/contact.png"
          class="w-full px-20 pt-10 h-96 bg-transparent"
          alt=""
        />
      </div>
      <div class="w-full lg:w-1/2 p-10">
        <form
          class="bg-white rounded px-8 pt-6 pb-8 mb-4 mx-10 shadow-lg"
          action="https://formsubmit.co/resourcecloudacademy@gmail.com"
          method="POST"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input type="hidden" name="_next" value="/" />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Name"
              type="text"
              placeholder="Name"
              v-model="formData.name"
              name="name"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              v-model="formData.email"
              name="email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Comment or Message
            </label>
            <textarea
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 h-24 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              type="text"
              placeholder="Comment"
              v-model="formData.comment"
            ></textarea>
          </div>

          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import { reactive } from "vue";
import Footer from "./Footer.vue";
import Navigation from "./Navigation.vue";

export default {
  components: {
    Footer,
    Navigation,
  },

  setup() {
    const formData = reactive({});
    return {
      formData,
    };
  },
};
</script>

<template>
  <header>
    <nav class="pl-10 bg-[#0146a1]">
      <div class="flex  justify-between items-center w-full ">

          <img src="assets/logo.png" alt="" class=" h-32" />
  

        <div class="flex-1 px-5 flex justify-end">
          <router-link class="px-10 transition duration-300 ease-in text-white nav-title font-semibold hover:text-bg-blue-300" to="/">Home</router-link>
          <router-link class="px-10 transition duration-300 ease-in text-white nav-title font-semibold hover:text-bg-blue-300" to="/about">About</router-link>
          <router-link class="px-10 transition duration-300 ease-in text-white nav-title font-semibold hover:text-bg-blue-300" to="/blog">Blog </router-link>
          <router-link class="px-10 transition duration-300 ease-in text-white nav-title font-semibold hover:text-bg-blue-300" to="/events">Events</router-link>
        </div>

        <button class="border-2 px-[24px] rounded-md text-white py-2 mx-10">
          Contact Us
        </button>


      </div>
    </nav>
  </header>
</template>

<template>
  <Navigation />
  <a href="">
    <div
      class="fixed h-12 w-12 z-[60] shadow-md rounded-full bg-blue-600 bottom-4 right-4 flex justify-center items-center"
    >
      <i class="fa-sharp fa-solid fa-arrow-up text-white"></i></div
  ></a>
  <div class="bg-gray-100">
    <header class="flex justify-center">
      <p class="text-3xl font-semibold px-5 pt-10 pb-10 heading">About Us</p>

    </header>

    <div class="flex justify-center p-10 h-56">
      <p class="text-center font-semibold text-gray-700 w-3/4">
        We help students in IT-related courses equip themselves with relevant
        skills before they are out of the university. Our main niche is in the
        matters cloud but we believe that all students taking IT-related courses
        can benefit from mastering communication and presentation skills, and
        the art of personal branding as early.
      </p>
    </div>

    <div class="flex justify-center">
      <p class="text-2xl font-semibold px-5 pt-10 pb-10 heading">Meet The Team </p>
    </div>
    <div class="flex flex-wrap mx-10">

          <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url('zippy2.jpg')` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ZIPPORAH WACHIRA</p>
              <p class="text-sm text-center">Chief Communicatins Officer</p>
              <div class="flex justify-center gap-3 py-5 text-[#0146a1]">
                
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url('sam.jpeg')` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">SAMSON WANJALA</p>
              <p class="text-sm text-center">Chief Technology Officer</p>
              <div class="flex justify-center gap-3 py-5 text-[#0146a1]">
                
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url('steve.jpeg')` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">STEPHEN AMOLO</p>
              <p class="text-sm text-center">Steward & Stategist</p>
              <div class="flex justify-center gap-3 py-5 text-[#0146a1]">
                
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url('awadh.jpeg')` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">AWADH SAID</p>
              <p class="text-sm text-center">Director Membership</p>
              <div class="flex justify-center gap-3 py-5 text-[#0146a1]">
                
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url('albert.jpeg')` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ALBERT SITATI</p>
              <p class="text-sm text-center">Chief Operations Officer </p>
              <div class="flex justify-center gap-3 py-5 text-[#0146a1]">
                
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url('james.png')` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">James Juma </p>
              <p class="text-sm text-center"> Director Patnership</p>
              <div class="flex justify-center gap-3 py-5 text-[#0146a1]">
                
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>

        </div>
  </div>

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

<style>

.section {
  height: 550px;
  /* z-index: -1; */
  background-position: center;
}
.team {
  transition: transform 0.5s ease;
}
.team:hover {
  transform: scale(1.1);
}
.photos { 
  background-position: top center;
  background-size: cover;
}
</style>

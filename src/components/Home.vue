<template>
  <a href="">
    <div
      class="fixed h-12 w-12 z-[60] shadow-md rounded-full bg-blue-600 bottom-4 right-4 flex justify-center items-center"
    >
      <i class="fa-sharp fa-solid fa-arrow-up text-white"></i></div
  ></a>
  <Navigation />

  <div class="bg-gray-100">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper h-[550px]">
        <div class="swiper-slide relative w-full h-full transition duration-500 ease-in">
          <div class="w-full h-[550px] z-10 overlay absolute"></div>
          <div class="absolute w-full h-[550px]">
            <img
              src="/assets/home4.jpg"
              class="bg-bottom block h-full object-cover absolute w-full"
              alt=""
            />
          </div>
          <div class="absolute w-full z-30 h-full my-10">
            <div class="pt-10">
              <div
                class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
              >
                <p
                  class="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start"
                >
                  RESOURCE CLOUD ACADEMY
                </p>
                <p
                  class="mb-10 font-semibold text-md text-white flex justify-right pl-5 text-left"
                >
                  We help students in IT-related courses equip themselves with
                  relevant skills before they are out of the university. Our
                  main niche is in the matters cloud but we believe that all
                  students taking IT-related courses can benefit from mastering
                  communication and presentation skills, and the art of personal
                  branding as early.
                </p>

                <button
                  class="bg-[#0146a1] px-[24px] rounded-md text-white py-2 mx-5"
                >
                  Why RCA
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide relative w-full h-full">
          <div class="w-full h-[550px] z-10 overlay absolute"></div>
          <div class="absolute w-full h-[550px]">
            <img
              src="/assets/home2.jpg"
              class="bg-bottom block h-full object-cover absolute w-full"
              alt=""
            />
          </div>
          <div class="absolute w-full z-30 h-full my-10">
            <div class="pt-10">
              <div
                class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
              >
                <p
                  class="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start"
                >
                  RESOURCE CLOUD ACADEMY
                </p>
                <p
                  class="mb-10 font-semibold text-md text-white flex justify-right pl-5 text-left"
                >
                  We help students in IT-related courses equip themselves with
                  relevant skills before they are out of the university. Our
                  main niche is in the matters cloud but we believe that all
                  students taking IT-related courses can benefit from mastering
                  communication and presentation skills, and the art of personal
                  branding as early.
                </p>

                <button
                  class="bg-[#0146a1] px-[24px] rounded-md text-white py-2 mx-5"
                >
                  Why RCA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center p-10">
      <div
        class="flex w-full justify-around p-10 bg-white rounded-md shadow-lg"
      >
        <article class="">
          <span
            class="text-4xl block flex justify-center p-5 text-[#0146a1] font-semibold"
          >
            20 +
          </span>
          <div class="font-semibold">Certified Members</div>
        </article>
        <article class="">
          <span
            class="text-4xl block flex justify-center p-5 text-[#0146a1] font-semibold"
          >
            30 +
          </span>
          <div class="font-semibold">Cloud Thursday Sessions</div>
        </article>
        <article class="">
          <span
            class="text-4xl block flex justify-center p-5 text-[#0146a1] font-semibold"
          >
            41.7%
          </span>
          <div class="font-semibold">Quartely Membership Growth</div>
        </article>
      </div>
    </div>

    <div class="flex flex-wrap w-full">
      <div class="w-1/2 p-10 flex justify-center">
        <img src="/assets/thursday.jpeg" class="h-[400px]" alt="" srcset="" />
      </div>

      <div class="w-1/2 grid items-center place-items-center pr-20">
        <article class="font-semibold text-2xl flex justify-center h-4">
          Creating a supportive and collaborative community that fosters new
          ideas and creativity now and for future generations
        </article>

        <button
          class="bg-[#0146a1] text-white text-md px-5 py-2 mb-10 rounded-md flex justify-center"
        >
          Join Cloud Thursday
        </button>
      </div>
    </div>
    <div
      class="flex flex-wrap gap-10 flex justify-center pb-20 pt-20 bg-blue-600"
    >
      <div class="w-1/3 p-5 bg-white rounded-md shadow-lg">
        <p class="text-xl font-semibold flex justify-center">Mission</p>
        <article class="p-5">
          Equipping future generations of global technology leaders with the
          skills and experience to achieve their full potential through early
          career interventions .
        </article>
      </div>
      <div class="w-1/3 p-5 bg-white rounded-md shadow-lg">
        <p class="text-xl flex justify-center font-semibold">Vision</p>
        <article class="p-5">
          To create a supportive and collaborative community that fosters new
          ideas and creativity , now and for future generations .
        </article>
      </div>
    </div>

    <div class="mt-10 pb-20">
      <p class="text-3xl font-semibold flex justify-center p-5">
        Our Activities
      </p>
      <div class="flex">
        <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
          <div class="col-span-2 col-start-2">
            <div class="p-2 flex items-center justify-center">
              <div
                class="lg:w-96 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                :style="{ backgroundImage: `url('/assets/thursday.jpeg')` }"
              ></div>
            </div>
            <p class="flex px-5 py-2 font-semibold">Weekly cloud thursdays</p>
            <p class="px-5">inviting guests on various topics</p>
          </div>
        </div>
        <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
          <div class="col-span-2 col-start-2">
            <div class="p-2 flex items-center justify-center">
              <div
                class="lg:w-96 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                :style="{ backgroundImage: `url('/assets/download.jpeg')` }"
              ></div>
            </div>
            <p class="flex px-5 py-2 font-semibold">Project Based Training</p>
            <p class="px-5">Based on current certifications and skills</p>
          </div>
        </div>
        <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
          <div class="col-span-2 col-start-2">
            <div class="p-2 flex items-center justify-center">
              <div
                class="lg:w-96 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                :style="{ backgroundImage: `url('/assets/hsch.jpg')` }"
              ></div>
            </div>
            <p class="flex px-5 py-2 font-semibold">High School Outreaches</p>
            <p class="px-5">Monthly</p>
          </div>
        </div>
      </div>
    </div>
    <p class="text-3xl font-semibold flex justify-center p-5">Benefits</p>
    <div class="flex flex-wrap">
      <div class="w-1/2 px-20 py-10 flex justify-center">
        <img src="/assets/home5.jpg" class="rounded-md" alt="" />
      </div>

      <div class="flex flex-col pt-10">
        <div class="py-5">
          <span class="font-semibold py-3"> Learn Everywhere</span>
          <p>Through our virtual Nature , Learn at your own comfort</p>
        </div>
        <div class="py-5">
          <span class="font-semibold"> Experienced Tutor </span>
          <p>Get Access to teachers who are passionate about teaching</p>
        </div>

        <span class="font-semibold"> Explore Newest Technologies </span>
        <p> Learn about the most recent trends in the cloud space</p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import { onMounted } from 'vue'

export default {
  components: {
    Navigation,
    Footer,
  },

  setup() {
    const swipe = () => {
      var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        mousewheel: true,
        keyboard: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,                                                
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    };
    onMounted( ()=> {
        swipe()
    })
    return {
        swipe
    };
  },
};
</script>
<style scoped>
.overlay {
  opacity: 0.75;
  background-color: rgba(0, 0, 100, 0.5);
}
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
  background-position: top;
  background-size: cover;
}
</style>

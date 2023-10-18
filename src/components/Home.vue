<template>
  <div class="bg-gray-100">
    <div class="navbar"><Navigation /></div>
    <a href="">
      <div
        class="fixed h-12 w-12 z-[60] shadow-md rounded-full bg-blue-600 bottom-4 right-4 flex justify-center items-center"
      >
        <i class="fa-sharp fa-solid fa-arrow-up text-white"></i></div
    ></a>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper h-[550px]">
        <div
          class="swiper-slide relative w-full h-full transition duration-500 ease-in"
        >
          <div class="w-full h-[550px] z-20 overlay absolute"></div>
          <div class="absolute w-full h-[550px] z-10">
            <img
              src="/assets/home6.jpg"
              class="bg-bottom block h-full object-cover absolute w-full"
              alt=""
            />
          </div>
          <div class="absolute w-full z-30 h-full">
            <div class="pt-10">
              <div
                class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
              >
                <p
                  class="mt-20 mb-10 font-bold text-4xl text-white flex justify-right pl-5 text-left align-content-start"
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

                <router-link
                  to="/about"
                  class="bg-[#0146a1] px-[24px] rounded-md text-white py-2 mx-5"
                >
                  Why RCA
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide relative w-full h-full">
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
      </div>
    </div>
    <div class="w-full flex items-center justify-center mt-50 p-10">
      <div
        class="flex flex-col md:flex-row w-full justify-around p-10 bg-white rounded-md shadow-lg"
      >
        <article class="">
          <span
            class="text-4xl flex justify-center p-5 text-[#0146a1] font-semibold"
          >
            20 +
          </span>
          <div class="font-semibold flex justify-center">Certified Members</div>
        </article>
        <article class="">
          <span
            class="text-4xl flex justify-center p-5 text-[#0146a1] font-semibold"
          >
            30 +
          </span>
          <div class="font-semibold flex justify-center">
            Cloud Thursday Sessions
          </div>
        </article>
        <article class="">
          <span
            class="text-4xl flex justify-center p-5 text-[#0146a1] font-semibold"
          >
            41.7%
          </span>
          <div class="font-semibold flex justify-center">
            Quartely Membership Growth
          </div>
        </article>
      </div>
    </div>

    <div class="flex flex-wrap w-full">
      <div class="lg:w-1/2 w-full p-10 flex justify-center">
        <img :src="currentImage" class="h-[400px]" alt="" srcset="" />
      </div>

      <div
        class="lg:w-1/2 w-full grid items-center place-items-center pr-5 lg:pr-20 h-96"
      >
        <article
          class="font-semibold text-2xl flex justify-center text-center h-4"
        >
          Creating a supportive and collaborative community that fosters new
          ideas and creativity now and for future generations
        </article>

        <a
          :href="currentLink"
          target="_blank"
          class="bg-[#0146a1] text-white text-md px-5 py-2 lg:mb-10 rounded-md flex justify-center"
        >
          Join the Next Cloud Thursday
        </a>
      </div>
    </div>
    <div class="flex flex-wrap gap-10 justify-center pb-20 pt-20 bg-blue-600">
      <div class="lg:w-1/3 sm:w-3/4 p-5 m-5 bg-white rounded-md shadow-lg">
        <p class="text-xl font-semibold flex justify-center">Mission</p>
        <article class="p-5">
          Equipping future generations of global technology leaders with the
          skills and experience to achieve their full potential through early
          career interventions .
        </article>
      </div>
      <div class="lg:w-1/3 sm:w-3/4 p-5 m-5 bg-white rounded-md shadow-lg">
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
      <div class="flex flex-wrap">
        <div class="sm:w-full lg:w-1/3 xs:w-full p-5 team">
          <div class="col-span-2 col-start-2">
            <div class="p-2 flex items-center justify-center">
              <div
                class="lg:w-96 lg:h-84 md:h-64 md:w-64 h-48 w-48 rounded-lg my-5 photos"
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
                class="lg:w-96 lg:h-84 md:h-64 md:w-64 h-48 w-48 rounded-lg my-5 photos"
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

    <p
      class="text-3xl flex flex-col justify-center items-center font-semibold heading p-5"
    >
      Benefits
    </p>

    <div class="flex flex-wrap p-10">
      <div class="lg:w-1/2 w-full lg:px-20 px-4 py-10 flex justify-center">
        <img
          src="/assets/home5.jpg"
          class="rounded-md w-64 h-64 lg:w-96 lg:h-96 object-cover"
          alt=""
        />
      </div>

      <div class="flex flex-col pt-10">
        <div class="py-5">
          <span class="font-semibold py-3 flex gap-x-3 items-center">
            <img src="/assets/Group.png" alt="" class="h-7" /> Learn
            Everywhere</span
          >
          <p class="px-10">
            Through our virtual Nature , Learn at your own comfort
          </p>
        </div>
        <div class="py-3">
          <span class="font-semibold py-3 flex gap-x-3 items-center">
            <img src="/assets/Group.png" alt="" class="h-7" />Experienced Tutors
          </span>
          <p class="px-10">
            Get Access to teachers who are passionate about teaching
          </p>
        </div>
        <div class="py-3">
          <span class="font-semibold py-3 flex gap-x-3 items-center">
            <img src="/assets/Group.png" alt="" class="h-7" /> Explore Newest
            Technologies
          </span>
          <p class="px-10">
            Learn about the most recent trends in the cloud space
          </p>
        </div>
      </div>
    </div>
    <div class="w-full"><Footer /></div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import { onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { storage } from "../firebase";
import { listAll, ref as reference, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default {
  components: {
    Navigation,
    Footer,
  },

  setup() {
    const currentImage = ref("");
    const currentLink = ref("");

    const store = useStore();
    const swipe = () => {
      var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        mousewheel: true,
        keyboard: true,
        autoplay: {
          delay: 10000,
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
    const toggleNavbarClass = () => {
      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("sticky", window.scrollY > 0);
      });
    };
    onBeforeMount(async () => {

      listAll(reference(storage)).then((res) => {
        console.log(res.items, "res");

        getDownloadURL(res.items[0])
          .then((url) => {
            // console.log(url, "url");
            currentImage.value = url;
          })
          .catch((error) => {
            console.log(error);
          });

        console.log();
      });
    });

    onMounted(async() => {
      swipe();
      toggleNavbarClass();
      const querySnapshot = await getDocs(collection(db, "cloudThursdayLink"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        currentLink.value = doc.data().link;

        console.log(currentLink.value, "link")
      });
    });
    return {
      swipe,
      toggleNavbarClass,
      store,
      currentImage,
      currentLink,
    };
  },
};
</script>
<style scoped>
.overlay {
  opacity: 0.75;
  background-color: rgba(0, 0, 0, 0.5);
}
.navbar {
  display: block;
  z-index: 200;
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
  transform: scale(1.02);
}
.photos {
  background-position: top;
  background-size: cover;
}
.sticky {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  width: 100%;
  transition: all 0.5s ease;
  box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.5);
  height: 100px;
}
.nav {
  z-index: -1;
}

.show {
  transform: translateY(100px);
  position: absolute;
  color: #fff;
  font-size: 40px;
  z-index: 8;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 35%;
}
</style>

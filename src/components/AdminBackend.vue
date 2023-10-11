<template>
  <div class=""><Navigation /></div>

  <div class="flex flex-col gap-8 p-5 bg-gray-200">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2">
        <p class="font-semibold mx-10 py-5">Change cloud thursday photo</p>
        <div
          class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5 bg-white w-2/3 mx-10 my-5"
        >
          <div id="preview">
            <div class="text-center">
              <svg
                v-if="!file"
                class="mx-auto h-12 w-12 text-gray-300 mb-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="">
                  <span
                    v-if="!file"
                    class="p-2 text-white shadow-md m-2 rounded-md bg-[#0146a1]"
                    >Upload Photo</span
                  >
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                    @change="uploadFile"
                  />

                  <img :src="file" class="w-full" alt="" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          :class="
            isloading
              ? 'shadow-lg px-[25px] rounded-md w-40 text-white py-2 mx-10 bg-gray-500'
              : 'shadow-lg px-[25px] rounded-md w-40 text-white py-2 mx-10 bg-[#0146a1]'
          "
          @click="submitFile"
          :disabled="isloading === true"
        >
          Submit
        </button>
      </div>

      <div class="w-full mx-10 mt-10 md:w-1/3">
        <p class="font-semibold py-5">Edit cloud thursday link</p>
        <label class=" " for="author"> Link</label>
        <input
          type="text"
          v-model="thursdayLink"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
        <button
          class="shadow-lg px-[25px] rounded-md w-40 text-white py-2 mt-10 bg-[#0146a1]"
          @click="addLink"
        >
          Submit
        </button>
      </div>
    </div>

    <!-- component -->
    <section class="p-6 md:w-2/3 m-10 bg-white rounded-md shadow-md mt-20">
      <h1 class="text-xl font-bold capitalize dark:">New Blog</h1>
      <form @submit.prevent="addNewBlog">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label class=" " for="Blog Heading">Heading</label>
            <input
              id="Blog Heading"
              type="text"
              v-model="heading"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class=" " for="author">Author </label>
            <input
              id="author"
              type="text"
              v-model="author"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class=" " for="introduction Text"> Introduction Text</label>
            <textarea
              id="text"
              type="text"
              v-model="introductionText"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div>
            <label class=" " for="">Date</label>
            <input
              id="date"
              type="date"
              v-model="date"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class=" " for=""> Link to Blog</label>
            <input
              type="text"
              v-model="link"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div class="col-span-full">
            <label class="block text-sm font-medium"> Image </label>
            <div
              class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
            >
              <div class="space-y-1 text-center">
                <svg
                  class="mx-auto h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <div id="blogPreview"></div>

                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      @change="blogImage"
                      class="w-48 md:w-full"
                    />
                    <img ref="blogRef" alt="" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 leading-5 transition-colors duration-200 transform bg-[#0146a1] rounded-md hover:scale-[1.06] text-white focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import { ref, onMounted } from "vue";
import { toast } from "vue3-toastify";
import { db } from "../firebase";
import "vue3-toastify/dist/index.css";
import {
  ref as reference,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../firebase/index.js";
import { useStore } from "vuex";
import { v4 } from "uuid";
import { addDoc, collection, getDocs } from "firebase/firestore";

const store = useStore();
const file = ref(null);
const blogRef = ref(null);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "cloudThursdayLink"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    thursdayLink.value = doc.data().link;
    store.commit()
  });
});

const uploadFile = (e) => {
  file.value = e.target.files[0];
  let image = URL.createObjectURL(e.target.files[0]);
  let imagediv = document.getElementById("preview");
  let newimg = document.createElement("img");
  imagediv.innerHTML = " ";
  newimg.src = image;
  newimg.width = "300";
  imagediv.appendChild(newimg);
};

// const submitFile = () => {
//   const desertRef = reference(storage);
//   listAll(desertRef).then((response) => {
//     response.items.forEach((item) => {
//       deleteObject(reference(storage, "/" + item.name))
//         .then(() => {
//           console.log("deleted", item.name);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
//   });
//   store.dispatch("submitFile", file.value);
// };
const deleteBlog = (id) => {
  deleteDoc(doc(nexOfKinList, id));
};

const author = ref("");
const date = ref("");
const heading = ref("");
const introductionText = ref("");
const link = ref("");
const readtime = ref("");
const blogImage = ref("");

const updateBlog = (id) => {
  updateDoc(doc(db, "blogs", id), {
    author: newauthor.value,
    date: newdate.value,
    heading: newheading.value,
    introductionText: newintroductionText.value,
    link: newlink.value,
    readtime: newreadtime.value,
  });
};

const listImages = () => {
  listAll(storage).then((res) => {
    console.log(res.items);
  });
};
const isloading = ref(false);
function submitFile() {
  isloading.value = true;
  const imageRef = reference(storage, `${file.value + v4()}`);
  uploadBytes(imageRef, file.value).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      toast.success("Uploaded Successfully", {
        autoClose: 2000,
      });
      isloading.value = false;
    });
    console.log("Uploaded a blob or file!");
  });
}
const addNewBlog = () => {
  console.log("asdasdf");
  addDoc(collection(db, "blogs"), {
    author: author.value,
    date: date.value,
    heading: heading.value,
    introductionText: introductionText.value,
    link: link.value,
    readtime: readtime.value,
  }).then(() => {
    author.value = "";
    date.value = "";
    heading.value = "";
    introductionText.value = "";
    link.value = "";
    readtime.value = "";
    // isloading.value = false;
    toast.success("Uploaded Successfully", {
      autoClose: 2000,
    });
  });
};
const thursdayLink = ref("");
const addLink = () => {
  console.log(thursdayLink.value);
  addDoc(collection(db, "cloudThursdayLink"), {
    link: thursdayLink.value,
  });
};
</script>

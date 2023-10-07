<template>
  <div class="h-24"><Navigation /></div>


  <div class="flex flex-col gap-8 p-5 bg-gray-200">

    change cloud thursday photo 
    
    <input type="file" @change="uploadFile" />
    <div id="preview"></div>
    <img :src="file" class="w-[150px]" alt="" />
    <div class="m-5">
      <button
        class="shadow-lg px-[24px] rounded-md text-white py-2 mx-10 bg-[#0146a1]"
        @click="submitFile"
      >
        Submit
      </button>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import { ref, computed } from "vue";
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

const store = useStore();
const file = ref(null);

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

const submitFile = () => {
  const desertRef = reference(storage);
  listAll(desertRef).then((response) => {
    response.items.forEach((item) => {
      deleteObject(reference(storage, "/" + item.name))
        .then(() => {
          console.log("deleted", item.name);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
  store.dispatch("submitFile", file.value);
  file.value = null;
};

const listImages = () => {
  listAll(storage).then((res) => {
    console.log(res.items);
  });
};
</script>

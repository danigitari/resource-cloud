<template>
  <div class="bg-gray-100">
    <div class=""><Navigation /></div>

    <h1 class="text-4xl font-semibold flex justify-center p-10">BLOG</h1>

    <article class="p-5 flex justify-center">
      A Collection of amaizing blogs authored by our members
    </article>

    <section
      class="w-full grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-12 p-10"
    >
      <article
        class="bg-white rounded-md shadow-lg overflow-hidden pb-5 hover:scale-[1.05] duration-300 ease-in"
      >
        <img
          src="https://media.licdn.com/dms/image/D5612AQHJFBFQltqsVA/article-cover_image-shrink_600_2000/0/1674487408223?e=1701907200&v=beta&t=hmxkZWpdFSh0Rr1BUvnf6XajFh2OMumNuoIxjMYic4M"
          alt=""
          class="object-cover"
        />
        <p class="p-5 text-lg font-bold">
          Traditional Monolithic vs 3-Tier Architectures
        </p>
        <p class="px-5 pb-3 text-sm">
          When it comes to building and deploying software, there are a variety
          of architectural patterns to choose from. One popular option is the
          3-tier architecture, which is a variation of the traditional
          monolithic architecture.
        </p>
        <p class="px-5 py-2 text-md font-semibold">January 23, 2023</p>
        <p class="px-5 py-2 text-xs font-thin">Est read time: 4 min</p>
        <p class="px-5 py-2"></p>
        <a
          href="https://www.linkedin.com/pulse/traditional-monolithic-vs-3-tier-architectures-james-juma-sindani"
          class="p-5 text-[#0146a1] text-lg font-bold"
          target="_blank"
        >
          Read more >>
        </a>
      </article>
      <article
        class="bg-white rounded-md shadow-lg overflow-hidden pb-5 hover:scale-[1.05] duration-300 ease-in"
      >
        <img
          src="https://media.licdn.com/dms/image/D5612AQHJFBFQltqsVA/article-cover_image-shrink_600_2000/0/1674487408223?e=1701907200&v=beta&t=hmxkZWpdFSh0Rr1BUvnf6XajFh2OMumNuoIxjMYic4M"
          alt=""
          class="object-cover"
        />
        <p class="p-5 text-lg font-bold">
          Traditional Monolithic vs 3-Tier Architectures
        </p>
        <p class="px-5 pb-3 text-sm">
          When it comes to building and deploying software, there are a variety
          of architectural patterns to choose from. One popular option is the
          3-tier architecture, which is a variation of the traditional
          monolithic architecture.
        </p>
        <p class="px-5 py-2 text-md font-semibold">January 23, 2023</p>
        <p class="px-5 py-2 text-xs font-thin">Est read time: 4 min</p>
        <p class="px-5 py-2"></p>
        <a
          href="https://www.linkedin.com/pulse/traditional-monolithic-vs-3-tier-architectures-james-juma-sindani"
          class="p-5 text-[#0146a1] text-lg font-bold"
          target="_blank"
        >
          Read more >>
        </a>
      </article>
      <article
        class="bg-white rounded-md shadow-lg overflow-hidden pb-5 hover:scale-[1.05] duration-300 ease-in"
      >
        <img
          src="https://media.licdn.com/dms/image/D5612AQHJFBFQltqsVA/article-cover_image-shrink_600_2000/0/1674487408223?e=1701907200&v=beta&t=hmxkZWpdFSh0Rr1BUvnf6XajFh2OMumNuoIxjMYic4M"
          alt=""
          class="object-cover"
        />
        <p class="p-5 text-lg font-bold">
          Traditional Monolithic vs 3-Tier Architectures
        </p>
        <p class="px-5 pb-3 text-sm">
          When it comes to building and deploying software, there are a variety
          of architectural patterns to choose from. One popular option is the
          3-tier architecture, which is a variation of the traditional
          monolithic architecture.
        </p>
        <p class="px-5 py-2 text-md font-semibold">January 23, 2023</p>
        <p class="px-5 py-2 text-xs font-thin">Est read time: 4 min</p>
        <p class="px-5 py-2 font-bold">James Jumah Sindani</p>
        <a
          href="https://www.linkedin.com/pulse/traditional-monolithic-vs-3-tier-architectures-james-juma-sindani"
          class="p-5 text-[#0146a1] text-lg font-bold"
          target="_blank"
        >
          Read more >>
        </a>
      </article>
    </section>

    <Footer />
  </div>
</template>
<script>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import {   collection,
  deleteDoc,
  onSnapshot,
  doc,
  query,
  updateDoc,
  where,} from "firebase/firestore";
import { auth, db } from "../firebase";
import { onMounted , ref } from "vue";

export default {
  components: {
    Navigation,
    Footer,
  },

  setup() {
    const docs = ref([]);

    onMounted(() => {
      const q = query(
        collection(db, "blogs"),
        // where("user", "==", auth.currentUser.email)
      );
      onSnapshot(q, (querySnapshot) => {
        const blogs = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          const pushDocs = {
            id: doc.id,
            author: doc.data().author,
            date: doc.data().date,
            heading: doc.data().heading,
            introductionText: doc.data().introductionText,
            link: doc.data().link,
            readtime: doc.data().readtime,
          };

          blogs.push(pushDocs);
        });
        docs.value = blogs;
        console.log(docs.value , "blogs")
      });
    });
    const deleteBlog = (id) => {
      deleteDoc(doc(nexOfKinList, id));
    };

    const newauthor = ref("");
    const newdate = ref("");
    const newheading = ref("");
    const newintroductionText = ref("");
    const newlink = ref("");
    const newreadtime = ref("");
    const updateNextOfKin = (id) => {
      // Set the "capital" field of the city 'DC'
      updateDoc(doc(db, "blogs", id), {
        author: newauthor.value,
        date: newdate.value,
        heading: newheading.value,
        introductionText: newintroductionText.value,
        link: newlink.value,
        readtime: newreadtime.value,
      });
    };
    return {
      updateNextOfKin,
      docs,
      deleteBlog,
      newauthor,
      newdate,
      newheading,
      newintroductionText,
      newlink,
      newreadtime,
    };
  },
};
</script>
<style></style>

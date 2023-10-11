import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import createPersistedState from "vuex-persistedstate";
import { createStore } from "vuex";
import router from "../router/index";
import { auth } from "../firebase/index";
import { storage } from "../firebase/index";
import { v4 } from "uuid";
import {
  getDownloadURL,
  ref as reference,
  uploadBytes,
} from "firebase/storage";
export default createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: null,
    cloudThursdayImage: null,
    isLoading: false,
    cloudThursdayUrl : "asdf"
  },
  getters: {
    user: (state) => state.user,
    cloudThursdayImage: (state) => state.cloudThursdayImage,
    isLoading: (state) => state.isLoading,
    cloudThursdayUrl: (state) => state.cloudThursdayUrl,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
    SET_CLOUD_THURSDAY_IMAGE(state, url) {
      state.cloudThursdayImage = url;
      console.log(state.cloudThursdayImage);
    },
    SET_CLOUD_THURSDAY_URL(state, url) {
      state.cloudThursdayUrl = url;
      console.log(state.cloudThursdayUrl);
    },
    SET_ISLOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },

  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User Not Found");
            break;
          case "auth/wrong-password":
            alert("wrong email or password");
            break;
          default:
            alert("something went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/admin");
    },
    async register({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use ":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid Email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not Allowed");
            break;
          case "auth/weak-password":
            alert("Weak Password");
            break;
          default:
            alert("something went wrong");
            console.log(error);
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/admin");
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/login");
    },
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);
          if (router.isReady && router.currentRoute.value.path === "/login") {
            router.push("/admin");
          }
        }
      });
    },

    async submitFile({ commit }, file) {
      commit("SET_ISLOADING", true);
      const imageRef = reference(storage, `${file + v4()}`);
      await uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          commit("SET_CLOUD_THURSDAY_IMAGE", url);
          console.log(url);
          commit("SET_ISLOADING", false);
        });
        console.log("Uploaded a blob or file!");
      });
    },
  },
});

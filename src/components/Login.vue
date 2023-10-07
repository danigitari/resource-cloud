<template>
    <div
        class="flex flex-col items-center justify-center bg-gray-200 h-[100vh]"
    >
        <a class="flex items-center justify-center w-full mb-0"
            ><img
                src="/assets/logo.png"
                width="65%"
                class="w-48"
            />
        </a>

        <p class="text-red-500 text-xs italic" v-if="error">
            invalid credentials
        </p>

        <div class="w-full max-w-sm">
            <form
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                @submit.prevent="login"
            >
                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                    >
                        Email
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        v-model="form.email"
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="password"
                        v-model="form.password"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>

                    <a
                        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2023 Resource Cloud Academy. All rights reserved.
            </p>
        </div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { ref , onBeforeMount } from "vue";
export default {
  setup() {
    const form = ref({});
    const store = useStore();
    const error = ref('');
    // todo 
    const login = () => {
      store.dispatch('login', form.value)
    }
    onBeforeMount(()=> {
      store.dispatch('fetchUser')
    })

    return {
      login,
      form,
      error
    }
  },
};</script>

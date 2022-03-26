<template>
  <header class="bg-at-blue text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center">
      <div class="flex items-center gap-x-4">
        <h1 class="text-3xl pb-8">Welcome to the Vue Task App</h1>
      </div>
      <ul class="flex flex1 justify-end">
        <!-- <router-link class="cursor" to="/">Home</router-link>  -->
        <router-link
          class="cursor"
          v-if="$route.path !== '/'"
          to="/auth/sign-up"
          >Sign Up</router-link
        >
        <router-link class="cursor" v-if="$route.path !== '/'" to="/auth"
          >Sign In</router-link
        >
        <button v-if="$route.path === '/'" @click="logout" class="cursor">
          Logout
        </button>
      </ul>
    </nav>
  </header>
</template>

<script>
//23.3 addition
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";

//earlier addition
export default {
  name: "Nav",

  //23.3 addition
  setup() {
    //setup ref to router
    const router = useRouter();

    //Logout function
    const logout = async () => {
      await supabase.auth.signOut();
      // await useUserStore().logOut();
      router.push({ path: "/auth" });
    };
    return { logout };
  },
};
</script>

<style>
.cursor {
  padding-right: 20px;
}
</style>

<template>
  <section>
    <Nav />
    <div class="font-Nunito box-border">
      <!-- <SignUp />
       <SignIn />    -->

      <!-- Ends here -->
      <!--  <router-view class="app-main" />  your routes will load inside of these tags -->
    </div>
  </section>
</template>

<script setup>
//My additions
import Nav from "./components/Nav.vue";
//import SignUp from './components/SignUp.vue'
//import SignIn from './components/SignIn.vue'

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth" });
    } else {
      // continue to dashboard
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

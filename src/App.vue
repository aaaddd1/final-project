<template>
  <section>
    <!-- My additions --> 
      <!-- <router-link to="/">Home</router-link> -->
     <!-- <header class="bg-at-blue text-white">
     <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
          <h1>Welcome to the Vue Task App</h1>
      </div>
       <ul class="flex flex1 justify-end ">
        <router-link class="cursor" to="/">Home</router-link>
        <router-link class="cursor" to="/SignUp">Sign Up</router-link>
        <router-link class="cursor" to="/SignIn">Sign In</router-link>
        <li class="cursor">Logout</li>
        <router-view class="app-main" />
      </ul> 
  </nav>
</header> -->
 <Nav />
     <div class=" font-Nunito box-border"> 
       
      <!-- <SignUp />
       <SignIn />    -->

    <!-- Ends here --> 
   <!--  <router-view class="app-main" />  your routes will load inside of these tags --> 
     </div>    
     
  </section>
</template>

<script setup>
//My additions
import Nav from './components/Nav.vue'
//import SignUp from './components/SignUp.vue'
//import SignIn from './components/SignIn.vue'

import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from './store/user.js'


const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => {
  try {
    await userStore.fetchUser() // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
     // router.push({ path: '/auth' });
      router.push({ path: '/' });
    } else {
      // continue to dashboard
      router.push({ path: '/' });
    }
  } catch (e) {
    console.log(e)
  }
})
</script>

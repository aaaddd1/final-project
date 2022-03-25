<template>
<header class="bg-at-blue text-white">
     <nav class="container py-5 px-4 flex flex-col gap-4 items-center">
      <div class="flex items-center gap-x-4">
          <h1 class="text-4xl pb-8 ">Welcome to the Vue Task App</h1>
      </div>
       <ul class="flex flex1 justify-end ">
         <router-link class="cursor" to="/">Home</router-link> 
        <router-link class="cursor" v-if="$route.path !== '/task'" to="/Register">Sign Up</router-link>
        <router-link class="cursor" v-if="$route.path !== '/task'" to="/LogIn">Sign In</router-link>
        <button v-if="$route.path === '/task'" @click="logout" class="cursor">Logout</button> 
         <!-- <router-link v-if="user" class="cursor" to="/CreateTask">Tasks</router-link>  -->
      </ul> 
  </nav>
  <router-view class="app-main" />
  
</header>
 
</template>

<script>
//23.3 addition
import {supabase} from '../supabase'
import { useRouter } from 'vue-router'

//earlier addition
export default {
    name: 'Nav',

    //23.3 addition
    setup(){
    
//setup ref to router
        const router = useRouter();

    //Logout function, poner if para aparecer el boton aqui?
    const logout = async () => {
        await supabase.auth.signOut();
        alert("You're logging out");
        router.push({ path: '/' });
    };
        return{logout};
    },
    
}
</script>

<style>
.cursor{
    padding-right: 20px;
}

</style>
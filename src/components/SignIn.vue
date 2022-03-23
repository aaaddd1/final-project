<template>
<div class="max-w-screen-sm mx-auto px-4 py-10">
  <div class="p-3 flex flex-col bg-light-grey shadow-lg mb-2">
    <h2 class="text-xl mb-4 text-at-blue">Sign In</h2>
    
      <div class="flex flex-col mb-2">
        <label class="mb-1 text-sm text-dimgrey" for="email">Email</label>
        <input class="p-2 text-dimgrey" id="email" type="email" placeholder="Email" v-model="email" />
      </div>
      <div class="flex flex-col mb-2">
        <label class="mb-1 text-sm text-dimgrey" for="password">Password</label>
        <input class="p-2 text-dimgrey" id="password" type="password" placeholder="Password" v-model="password" />
      </div>
      <div>
        <button @click="handleSignin" type="Login" class="mt-6 py-2 px-6 duration-200 border-2 bg-mustard mb-8">
          Log in</button> <br>
        <router-link class="text-sm text-center font-semibold text-dimgrey" to="/SignUp">If you don't have an account, please <button class="px-2 bg-at-blue text-white ">Sign Up</button></router-link> 

      </div>
    
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

    const email = ref("");
    const password = ref("");

    const handleSignin = async () => {
      try {
        // Use the Supabase provided method to handle the signin
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        console.log("you're in")
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };
    
</script>

<style>

</style>
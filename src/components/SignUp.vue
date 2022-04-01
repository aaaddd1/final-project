<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <div class="p-3 flex flex-col bg-lgray shadow-lg mb-2 rounded-3xl">
      <h2 class="text-2xl mb-4 text-at-blue">Sign Up</h2>
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-dimgrey">Email</label>
        <input
          id="email"
          type="email"
          required
          placeholder="Email"
          v-model="email"
          class="p-2 text-dimgrey"
        />
      </div>
      <div class="flex flex-col mb-2">
        <label class="mb-1 text-sm text-dimgrey" for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          class="p-2 text-dimgrey"
        />
      </div>
      <div class="flex flex-col mb-2">
        <label class="mb-1 text-sm text-dimgrey" for="repeatPw"
          >Repeat Password</label
        >
        <input
          id="repeatPw"
          type="password"
          placeholder="Repeat Password"
          v-model="repeatPw"
          class="p-2 text-dimgrey"
        />
      </div>
      <div>
        <button
          @click="handleRegister2"
          class="mt-6 py-2 px-6 duration-200 border-2 bg-mustard mb-8">
          Register</button><br />
        <router-link
          class="text-sm text-center font-semibold text-dimgrey"
          to="/auth">
          If you have an account, please
          <button class="px-2 bg-at-blue text-white rounded-3xl">
            Sign In
          </button></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";

const router = useRouter();

const email = ref("");
const password = ref("");
const repeatPw = ref("");

const handleRegister = async () => {
  try {
    if (password.value === repeatPw.value) {
      // Use the Supabase provided method to handle the signup
      const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      console.log("registrado");
      router.push("/auth");
    } else {
      alert("Passwords don't match");
    }
  } catch (error) {
    alert(error.error_description || error.message);
  }
};

//SignUp func with pinia
const handleRegister2 = async () => {
  try {
    if (password.value === repeatPw.value) {
      // Use the Supabase provided method to handle the signup
      await useUserStore().signUp(email.value, password.value)
      console.log("registrado");
      router.push("/auth");
    } else {
      alert("Passwords don't match");
    }
  } catch (error) {
    alert(error.error_description || error.message);
  }
};

</script>

<style></style>

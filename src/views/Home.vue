<template>
  <div>
    <h1 class="text-center mt-10 text-xl text-mustard">To start creating your tasks either Sign in or Sign up </h1>
  <SignIn />  
    <!-- <div> <img src="../assets/tasks1.png" alt="tasks" class="mx-auto py-10 "></div> -->
 </div>
</template>

<script>
import SignIn from '../components/SignIn.vue'

export default {
    name: 'Home',
    components: {
      SignIn,
    }
}
</script>

<style>

</style>
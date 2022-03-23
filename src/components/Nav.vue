<template>
<header class="bg-at-blue text-white">
     <nav class="container py-5 px-4 flex flex-col gap-4 items-center">
      <div class="flex items-center gap-x-4">
          <h1 class="text-4xl pb-8 ">Welcome to the Vue Task App</h1>
      </div>
       <ul class="flex flex1 justify-end ">
        <router-link class="cursor" to="/">Home</router-link>
        <router-link class="cursor" to="/Register">Sign Up</router-link>
        <router-link class="cursor" to="/LogIn">Sign In</router-link>
        <li class="cursor">Logout</li>
      </ul> 
  </nav>
  <router-view class="app-main" />
  
</header>
 
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style>
.cursor{
    padding-right: 20px;
}

</style>
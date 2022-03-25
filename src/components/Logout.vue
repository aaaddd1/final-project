<template>
    <button @click="logout" class="cursor">Logout</button>

</template>

<script>
export default {
    name: 'logout',
   
    methods: {
        //Logout function
    const logout = async () => {
        await supabase.auth.signOut();
        alert("You have logged out, return to Home Page");
        router.push({ path: '/' });
    }
        return {logout},
    }
}
</script>

<style>

</style>
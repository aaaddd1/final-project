<template>
<div class="container">
  <h2 class="text-center mt-5 text-xl text-mustard">Task Manager</h2>
  <div class="container">
      <div class="text-center">
          <input 
          class="min-w-[50%] mt-6 py-2 px-2 text-dimgrey border"
          type="text"
          name="newTask"
          v-model="newTask"
          placeholder="Write your task here"
          />
          <br>
          <button
          class="mt-6 py-2 px-6 duration-200 bg-mustard mb-8"
          type="submit"
          @click.prevent="addTask"
          >Add Task</button>
      </div>
      <div>
          <p v-if="emptyNew" class="text-red-500 py-2">
              {{errorInput}}
          </p>
      </div>
  </div>
</div>
</template>

<script setup>
import {ref} from "vue"

const emit = defineEmits(["addTaskChild"])

// variables to add newTask
let newTask = ref("");
let emptyNew = ref(false);

let errorInput = ref("");

// Function to add a new task
function addTask(){
    if (newTask.value === "") {
        emptyNew.value = true;
        errorInput.value = "Task Title must not be empty"
        setTimeout(() => {
            emptyNew.value = false;
        }, 2000)
    } else {
        emptyNew.value= false;
        emit("addTaskChild", newTask.value);
        newTask.value = "";     //clear input
    }
}

</script>

<style>

</style>
<template>
  <div>
    <NewTask @addTaskChild="addTask" /> 
  
 <thead>
        <tr>
          <th scope="col" class="p-4 font-bold">Task</th>
          <th scope="col" class="p-4 font-bold">Status</th>
          <th scope="col" class="p-4 font-bold">Edit</th>
          <th scope="col" class="p-4 font-bold">Delete</th>
        </tr>
      </thead>   
    <TaskItem v-for="(task, index) in tasks" :item="task" />
          
  </div>
</template>

<script setup>
import {ref} from "vue"
import NewTask from "../components/NewTask.vue";
import { useTaskStore } from "../store/task";
import TaskItem from "../components/TaskItem.vue"

let tasks = ref([]);

// Function to get tasks from supabase
async function getTasks() {
      tasks.value = await useTaskStore().fetchTasks();
    }
    getTasks();


// Function to add task to supabase
async function addTask(newTask) {
  await useTaskStore().addTask(newTask);
  getTasks();
}




</script>

<style></style>

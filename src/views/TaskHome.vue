<template>
<NewTask @addTaskChild="addTask" />
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col" class="p-4 font-bold">Task</th>
          <th scope="col" class="p-4 font-bold">Edit</th>
          <th scope="col" class="p-4 font-bold">Delete</th>
          <th scope="col" class="p-4 font-bold">Status</th>
        </tr>
      </thead>

      <tbody class="text-center">
        <tr v-for="(task, index) in tasks" :key="task.id">
             <input type="text" v-if="currentlyEditing" v-model="task.title" /> <!-- v-if sets currently Editing to true  -->
          <td v-else>
            {{ task.title }}
          </td>

          <td class="p-4">
            <div @click="editTask(task)" class="cursor-pointer">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td class="p-4">
            <div @click="deleteTask(task)" class="cursor-pointer">
              <span class="fa fa-trash"></span>
            </div>
          </td>
           <td>Complete?</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NewTask from "../components/NewTask.vue";
import { useTaskStore } from "../store/task";
import TaskItem from "../components/TaskItem.vue";

let tasks = ref([]);

let currentlyEditing= ref(null);  //null==false


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

// Function to delete task
async function deleteTask(task) {
  await useTaskStore().deleteTask(task.id);
  getTasks();
}

//Edit task
async function editTask(task){
    currentlyEditing.value =!currentlyEditing.value ;   //toggle
    await useTaskStore().editTask(task.title, task.id);
    console.log(currentlyEditing)
    getTasks();
}



</script>

<style></style>

<template>
<NewTask @addTaskChild="addTask" />
  <div class="p-8 overflow-auto relative">
    <table class="w-1/2 mx-auto my-0">
      <thead>
        <tr>
          <th scope="col" class="p-4 font-bold bg-lavander">Task</th>
          <th scope="col" class="p-4 font-bold bg-lavander">Edit</th>
          <th scope="col" class="p-4 font-bold bg-lavander">Delete</th>
          <th scope="col" class="p-4 font-bold bg-lavander">Complete</th>
        </tr>
      </thead>

      <tbody class="text-center">
        <tr v-for="(task, index) in tasks" :key="task.id" :class="{completeClass: task.is_complete}">
             <input type="text" v-if="currentlyEditing" v-model="task.title" class="border" /> <!-- v-if sets currentlyEditing to true; else=false  -->
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

           <td class="p-4">
             <input v-on:change="taskDone(task)" v-bind:checked="task.is_complete" type="checkbox" id="is_complete" name="is_complete">
           </td>
           
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NewTask from "../components/NewTask.vue";
import { useTaskStore } from "../store/task";
// import TaskItem from "../components/TaskItem.vue";

let tasks = ref([]);
let currentlyEditing= ref(null);  //null==false
let doneTask = ref(true);

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

//Function to mark as complete
async function taskDone(task){
  task.is_complete = !task.is_complete;
  await useTaskStore().completeTask( task.id, task.is_complete);
  getTasks();
}


</script>

<style>
.completeClass{
  text-decoration: line-through;
  background-color:  #93C572 ;
}
</style>

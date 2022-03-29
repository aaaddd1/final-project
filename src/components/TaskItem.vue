<template>

  <tbody class="text-center">
        <tr>
          <td>
          {{item.title}}</td> 

          <td>Complete?</td>

          <td class="p-4">
            <div @click="editTask(index)" class="cursor-pointer">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td class="p-4">
            <div @click="deleteTask(task)" class="cursor-pointer">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
  </tbody>
  
</template>

<script setup>
import { useTaskStore } from "../store/task";


const props = defineProps(["item"]);
console.log(props.item.title)

// Function to delete task
async function deleteTask(task) {
 await  useTaskStore().deleteTask(task);
  getTasks();
}


</script>

<style>

</style>
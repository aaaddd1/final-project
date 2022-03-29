<template>
  <div class="container">
    <!-- tasktable-->
    <table
      class="min-w-full shadow-md rounded border-solid border-2 border-grey-500 mt-5 border-separate text-left"
    >
      <thead>
        <tr>
          <th scope="col" class="p-4 font-bold">Task</th>
          <th scope="col" class="p-4 font-bold">Status</th>
          <th scope="col" class="p-4 font-bold">Edit</th>
          <th scope="col" class="p-4 font-bold">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td
            class="p-4 cursor-pointer">
            {{ task.title }}
            <!-- @click="toggleDone(task)" -->
          </td>

          <select class="p-4 cursor-pointer">
            <option value="not-started">Not started</option>
            <option value="in-progress">In progress</option>
            <option value="completed">Completed</option>
            {{
              task.status
            }}
          </select>

          <td class="p-4">
            <div @click="editTask(index)" class="cursor-pointer">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td class="p-4">
            <div @click="deleteTask(index)" class="cursor-pointer">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- TASKS FROMM SUPABASE GO HERE -->
    <TaskItem v-for="(task, index) in tasks" :item="task" />
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useTaskStore } from "../store/task";
import TaskItem from "../components/TaskItem.vue";

export default {
  components: {
    TaskItem,
  },
  setup() {
    const newTask = ref("");
    let tasks = ref([]);
    const editedTask = ref("");

    async function getTasks() {
      tasks.value = await useTaskStore().fetchTasks();
    }
    getTasks();

    // Function without Supabase
    function submitTask() {
      //if no task entered but click submit, return alert
      if (newTask.value.length === 0) return alert("Add a task first");

      //condition to create or update task, if didn't press edit, then create a new task
      if (editedTask.value === "") {
        tasks.value.push({
          id: Date.now(),
          done: false,
          name: newTask.value,
        });
      } else {
        //update task
        tasks.value[editedTask.value].name = newTask.value;
        editedTask.value = "";
      }

      newTask.value = ""; //to clear submit
    }

    // Function Adri
    function submitTask() {
      //if no task entered but click submit, return alert
      if (newTask.value.length === 0) return alert("Add a task first");

      //condition to create or update task, if didn't press edit, then create a new task
      if (editedTask.value === "") {
        tasks.value.push({
          id: Date.now(),
          done: false,
          name: newTask.value,
        });
      } else {
        //update task
        tasks.value[editedTask.value].name = newTask.value;
        editedTask.value = "";
      }

      newTask.value = ""; //to clear submit
    }

    // Function with Supabase - DIEGO
    async function addNewTask() {
      await useTaskStore().addTask();
      getTasks();
    }

    function toggleDone(task) {
      task.done = !task.done;
    }

    function deleteTask(index) {
      tasks.value.splice(index, 1);
    }

    //edit task
    function editTask(index) {
      newTask.value = tasks.value[index].name;
      editedTask.value = index;
    }

    // function changeStatus(index){
    //   let newIndex= statuses.value.indexOf(tasks.value[index].status);
    //   if (++newIndex > 2) {
    //     newIndex = 0};
    //   tasks.value[index].status = statuses.value[newIndex];
    // }

    return {
      submitTask,
      newTask,
      tasks,
      toggleDone,
      deleteTask,
      editTask,
    };
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}

.inPro {
  color: yellow;
}
</style>

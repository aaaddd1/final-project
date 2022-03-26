<template>
  <div class="container ">
    <h2 class="text-center mt-5 text-xl text-mustard">Task Manager</h2>

    <!-- Input-->
    <div class="text-center">
      <input
        v-model="newTask"
        type="text"
        placeholder="Enter a task"
        size="50"
        class="mt-6 py-2 px-1 text-dimgrey border"
      />

      <button
        @click="submitTask"
        class="mt-6 py-2 px-6 duration-200 bg-mustard mb-8"
      >
        Submit
      </button>
    </div>

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
            :class="{ done: task.done }"
            @click="toggleDone(task)"
            class="p-4 cursor-pointer"
          >
            {{ task.name }}
          </td>
          <td class="p-4">Not started, In progress, Done</td>
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
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";

export default {
  setup() {
    const newTask = ref("");
    const tasks = ref([]);
    const editedTask = ref("");

    function submitTask() {
      //if no task entered but click submit, return alert
      if (newTask.value.length === 0) return alert("Add a task first");

      if (editedTask.value === "") {
        //condition to create or update task, if empty wants to create a new task
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

    return {
      submitTask,
      newTask,
      tasks,
      toggleDone,
      deleteTask,
      editTask,
    };
  },

  // data() {
  //   return {
  //     task: "",
  //     editedTask: null, //update task
  //     tasks: [
  //       {
  //         name: "sleep tonight",
  //         status: "to-do",
  //       },
  //       {
  //         name: "get this f*** app done",
  //         status: "in-progress",
  //       },
  //     ],
  //   };
  // },
  // methods: {
  //   submitTask() {
  //     //if no task entered but click submit, return alert
  //     if (this.task.length === 0) return alert("Add a task first");

  //     if (this.editedTask === null) {
  //       //condition to create or update task, if empty wants to create a new task
  //       //add task
  //       this.tasks.push({
  //         name: this.task,
  //         status: "to-do",
  //       });
  //     } else {
  //       //update task
  //       this.tasks[this.editedTask].name = this.task;
  //       this.editedTask = null;
  //     }

  //     //clear submit field after submit
  //     this.task = "";
  //   },
  //   //delete task
  //   deleteTask(index) {
  //     this.tasks.splice(index, 1);
  //   },
  //   //edit task
  //   editTask(index) {
  //     this.task = this.tasks[index].name;
  //     this.editedTask = index;
  //   },

  //   //attemp to connect
  //   // const createTk = assync () => {
  //   //     try {
  //   //         const {error} = await supabase.from('tasks').insert([
  //   //             {
  //   //                 taskName: taskName.value,
  //   //                 taskStatus: taskStatus.value
  //   //         },
  //   //         ])
  //   //         if (error) throw error;
  //   //         statusMsg.value = "task created"
  //   //         taskName.value = null;
  //   //         taskName.value = null;

  //   //         }catch(error) {
  //   //             errorM.value = `Error: ${error.message}`;
  //   //         }
  //   // }
  // },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>

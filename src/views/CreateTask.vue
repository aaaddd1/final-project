<template>
  <div class="container border-white ">
      <h2 class="text-center mt-5 text-xl text-mustard"> Task Manager</h2>

    <!-- Input-->
      <div class="text-center">
          <input v-model="task" type="text" placeholder="Enter a task" size="50" class="mt-6 py-2 px-1 text-dimgrey">
          
          <button @click="submitTask" class="mt-6 py-2 px-6 duration-200 bg-mustard mb-8">Submit</button>
      </div>

    <!-- tasktable-->
    <table class="min-w-full shadow-md rounded border-solid border-2 border-grey-500 mt-5 border-separate text-left">
        <thead >
            <tr class=" ">
                <th scope="col" class="p-4 font-bold">Task</th>
                <th scope="col" class="p-4 font-bold">Status</th>
                <th scope="col" class="p-4 font-bold">Edit</th>
                <th scope="col" class="p-4 font-bold">Delete</th>
                <th scope="col" class="p-4 font-bold">Completed</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
                <td class="p-4"> {{task.name}}</td>
                <td class="p-4">{{task.status}}</td>
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
                <td class="p-4">
                  <input type="checkbox" name="name1" /> 
                </td>
            </tr>
        </tbody>
    </table>

  </div>
</template>

<script>
export default {

    data(){
        return {
            task: '',
            editedTask: null,   //update task
            tasks: [
                {
                    name: 'sleep tonight',
                    status: 'to-do'
                },
                {
                    name: 'get this f*** app done',
                    status: 'in-progress'
                },
            ]
        }
    },
    methods: {
        submitTask(){
            //if no task entered but click submit, return alert
            if(this.task.length === 0) 
            return alert("Add a task first") ;

            if(this.editedTask === null){  //condition to create or update task, if empty wants to create a new task
            //add task
            this.tasks.push({
                name: this.task,
                status: 'to-do',
                });
            }else{  //update task
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            
            //clear submit field after submit
            this.task='';
        },
            //delete task
            deleteTask(index){
            this.tasks.splice(index, 1);
        },
            //edit task
            editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },

        
    }
};
</script>

<style>

</style>
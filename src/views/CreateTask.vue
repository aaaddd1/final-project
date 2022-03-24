<template>
  <div class="container border-white">
      <h2> My to do app</h2>

    <!-- Input-->
      <div>
          <input v-model="task" type="text" placeholder="Enter task" class="mt-6 py-2 px-6 text-dimgrey ">
          <button @click="submitTask" class="mt-6 py-2 px-6 duration-200 bg-mustard mb-8">Submit</button>
      </div>

    <!-- tasktable-->
    <table class="border-solid border-2 border-yellow-500 mt-5 border-separate text-left ">
        <thead>
            <tr class=" ">
                <th scope="col">Task</th>
                <th scope="col">Status</th>
                <th scope="col">#</th>
                <th scope="col">#</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
                <td>{{task.name}}</td>
                <td>{{task.status}}</td>
                <td>
                    <div @click="editTask(index)">
                        <span>Edit</span>
                    </div>
                </td>
                <td>
                    <div @click="deleteTask(index)">
                        <span>Delete</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

  </div>
</template>

<script>
export default {
    // name:"Task",
    // props: {
    //     msg: String,
    // },

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
        }
    }
};
</script>

<style>

</style>
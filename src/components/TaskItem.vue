<template>
    <div>
        <h1>Create new task</h1>
        <form @submit.prevent="createNewTask">
            <div>
                <label for="taskDescription">Description</label>
                <input type="text" v-model="newTask.description" placeholder="Add new" required>
            </div>
            <button type="submit">Create </button>
        </form>
    </div>
</template>

<script>
import { reactive} from 'vue'
import { supabase } from "../supabase";
 
export default {
    setup(){
        const newTask = reactive({
            creationTime: null,
            description: '',
            completed: false,
        })
        const tasksColllection = supabase.collection('tasks') //collection?
        const createNewTask = () => {
            tasksColllection.add({
                ...newTask,
                creationTime: Date.now()
            })

            newTask.description = ''
        }
        return {
            newTask,
            createNewTask,
        }
    }
}
</script>

<style>

</style>
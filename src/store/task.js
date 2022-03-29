import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "../store/user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },
    async addTask(title) {
      const { data, error } = await supabase.from("tasks").insert([
        {
          title: title,
          is_complete: false,
          user_id: useUserStore().user.id,
        },
      ]);
    },
    async editTask(title, id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title })
        .match({ id: id });
    },

    async deleteTask(task) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: task });
    },

    
  },
});

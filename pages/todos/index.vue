<template>
  <v-container class="mt-8">
    <v-row justify="center" class="ma-5">
      <v-col cols="12" md="8">
        <v-card>
          <v-toolbar color="blue darken-4" dark>
            <v-toolbar-title class="headline">Todo App</v-toolbar-title>
          </v-toolbar>
          <v-text-field
            class="pa-3"
            v-model="task"
            label="Add Todo"
            solo
            @keydown.enter="createTask"
          >
            <v-fade-transition slot="append">
              <v-icon v-if="task" @click="createTask"> mdi-plus </v-icon>
            </v-fade-transition>
          </v-text-field>
          <h2 class="display-1 primary--text pl-3">
            Tasks:&nbsp;
            <v-fade-transition leave-absolute>
              <span> {{ tasks.length }} </span>
            </v-fade-transition>
          </h2>
          <v-divider class="mt-3"></v-divider>
          <v-layout my-1 align-center>
            <span class="mx-3 red--text darken-2"
              >Remaining: {{ remainingTasks }}
            </span>

            <v-divider vertical></v-divider>

            <span class="mx-3"> Completed: {{ completedTasks }} </span>

            <v-spacer></v-spacer>

            <v-progress-circular
              :value="progress"
              class="mr-2"
            ></v-progress-circular>
          </v-layout>
          <v-divider class="mb-3"></v-divider>
        </v-card>
        <v-card v-if="tasks.length > 0">
          <v-list class="py-0" transition="slide-y-reverse-transition">
            <template v-for="(task, i) in tasks">
              <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

              <v-list-item :key="`${i}-${task.task}`" class="pa-3">
                <v-list-item-action>
                  <v-checkbox
                    @change="toggleTask(task.id)"
                    :value="task.completed"
                    color="info darken-3"
                  >
                    <div
                      slot="label"
                      :class="
                        (task.completed && 'grey--text') || 'text--primary'
                      "
                      class="ml-3"
                      v-text="task.task"
                    ></div>
                  </v-checkbox>
                </v-list-item-action>

                <v-spacer></v-spacer>

                <v-scroll-x-transition>
                  <v-icon v-if="task.completed" color="success">
                    mdi-check
                  </v-icon>
                </v-scroll-x-transition>
                <v-scroll-x-transition>
                  <v-icon color="error" @click="deleteTodo(task.id)">
                    mdi-delete
                  </v-icon>
                </v-scroll-x-transition>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import axios from "axios";
export default {
  layout: "profile",
  middleware: "gotodos",
  name: "Todos",
  data() {
    return {
      //   tasks: [],
      task: null,
    };
  },
  computed: {
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
    tasks() {
      return this.$store.getters.allTodos;
    },
    completedTasks() {
      return this.tasks.filter((task) => task.completed).length;
    },
  },
  methods: {
    async createTask() {
      await this.$store.dispatch("createTask", { task: this.task });
      this.task = null;
    },
    async deleteTodo(id) {
      await this.$store.dispatch("deleteTask", id);
    },
    async toggleTask(id) {
      await this.$store.dispatch("toggleTask", id);
    },
    async getTodos() {
      await this.$store.dispatch("getTodos");
    },
  },
  created() {
    this.getTodos();
  },
};
</script>
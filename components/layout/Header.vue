<template>
  <div>
    <v-app-bar color=" accent-4" dense class="pb-8" fixed app>
      <v-toolbar-title>
        <v-avatar color="primary" class="mt-2" size="50">
          <v-img
            :src="user?.avatar"
            class="rounded-circle"
            width="30"
            height="30"
          ></v-img>
        </v-avatar>
      </v-toolbar-title>
      <v-toolbar-title class="ms-4">
        <div>{{ user?.username }}</div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="signOut">
        Logout <v-icon class="ms-2">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({ user: "profile/getUser" }),
  },
  methods: {
    ...mapActions({ logOut: "profile/logOut" }),
    signOut() {
      this.logOut();
      this.$nuxt.$options.router.replace("/");
    },
  },
};
</script>

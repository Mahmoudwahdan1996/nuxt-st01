<template>
  <v-container>
    <v-toolbar flat>
      <v-breadcrumbs large :items="breadcrumbs" divider="/"> </v-breadcrumbs>
    </v-toolbar>
    <div cols="12" class="mt-8 ">
      <UserCard reqName="users"> </UserCard>
    </div>
  </v-container>
</template>

<script>
import UserCard from "../components/UserCard/index.vue";
export default {
  name: "IndexPage",
  components: {
    UserCard,
  },
  computed: {
    breadcrumbs() {
      return [{ text: "users", disabled: false }];
    },
  },
};
</script>

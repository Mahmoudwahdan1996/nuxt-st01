<template>
  <v-app>
    <Nuxt :nuxt-child-key="$route.fullPath" />
  </v-app>
</template>

<script >
export default {
  name: "DefaultLayout",
};
</script>
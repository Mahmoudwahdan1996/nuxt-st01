<template>
  <ShimmerLoader type="table" :loading="loading">
    <transition name="fade" mode="out-in">
      <v-row dense>
        <v-col
          v-for="(item, i) in tableItems"
          :key="i"
          cols="4"
          class="overflow-hidden"
        >
          <v-card>
            <div class="d-flex align-center justify-center mb-2">
              <v-avatar color="primary" class="mt-5" size="100">
                <v-img :src="item.avatar"></v-img>
              </v-avatar>
            </div>
            <div class="mt-3 d-flex flex-column align-center justify-center">
              <v-card-title v-text="item.name"></v-card-title>

              <v-card-subtitle v-text="item.username"></v-card-subtitle>
            </div>
            <v-card-actions class="d-flex align-center justify-center">
              <nuxt-link to="/auth">
                <v-btn
                  x-large
                  color="indigo"
                  elevation="2"
                  class="ma-3 white--text"
                  @click="toAuthPage(item)"
                >
                  Select
                  <v-icon right dark>mdi-account-box</v-icon>
                </v-btn>
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </transition>
  </ShimmerLoader>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ShimmerLoader from "../ShimmerLoader";
export default {
  components: {
    ShimmerLoader,
  },
  name: "UserCard",
  inheritAttrs: false,
  props: {
    reqName: {
      type: String,
      default: "",
    },
    itemsData: {
      type: Array,
      default: () => [],
    },
    fromStore: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters({ items: "tables/getsTableItems" }),
    tableItems() {
      if (this.fromStore) {
        return this.items;
      } else {
        return this.itemsData;
      }
    },
  },
  created() {
    if (this.reqName) {
      this.getTableData();
    }
  },
  methods: {
    ...mapActions({ getTableItems: "tables/getTableItems" }),
    getTableData() {
      this.getTableItems({ reqName: this.reqName }).then(() => {
        this.loading = false;
      });
    },
    ...mapActions({
      setUserName: "profile/setUserName",
      setUser: "profile/setUser",
    }),

    toAuthPage(user) {
      this.setUserName(user.username);
      this.setUser(user);
    },
  },
};
</script>
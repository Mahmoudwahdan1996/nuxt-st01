<template>
  <v-container>
    <div class="auth d-flex align-center justify-center mt-16">
      <v-sheet
        color="white"
        elevation="10"
        rounded
        class="pa-5 d-flex align-center justify-center"
      >
        <div>
          <p class="font-weight-bold text-center text-h5">
            {{ `Hi, ${username}` }}
          </p>
          <form>
            <v-text-field
              ref="name"
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              label="password"
              hint="At least 6 characters"
              placeholder="password"
              required
              @click:append="show = !show"
              class="mb-4"
            ></v-text-field>
            <div v-if="error" class="text-h6">{{ error }}</div>
            <div class="pa-5 d-flex align-center justify-center">
              <v-btn
                x-large
                color="indigo"
                elevation="2"
                class="ma-3 white--text"
                @click="submit"
              >
                submit
              </v-btn>
            </div>
          </form>
        </div>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: "isAuth",
  data() {
    return {
      password: "",
      show: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 6 || "Min 6 characters",
      },
      error: "",
    };
  },

  mounted() {},

  computed: {
    ...mapGetters({
      username: "profile/getUserName",
      users: "profile/getUsers",
    }),
  },
  methods: {
    ...mapActions({ logIn: "profile/logIn" }),
    submit() {
      this.error = "";
      if (this.username && this.password) {
        const user = this.users.find(
          (user) =>
            user.username === this.username && user.password === this.password
        );
        if (user) {
          this.logIn(this.password);
          this.$nuxt.$options.router.push("/todos");
        } else {
          this.error = "wrong Password";
        }
      } else {
        this.error = "you should select user And enter password";
      }
    },
  },
};
</script>
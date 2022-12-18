export default ({ store, redirect }) => {
    if (!store.getters["profile/isAuthentecated"]) {
      return redirect('/')
    }
  }
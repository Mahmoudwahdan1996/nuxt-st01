export default ({ store, redirect }) => {
  if ( store.getters["profile/isAuthentecated"]) {
    return redirect('/')
  }else if(!store.getters["profile/getUserName"]){
    return redirect('/')
  }
}

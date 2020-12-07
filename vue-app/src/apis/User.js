
import Api from "./Api";

export default {
  register(form) {
    return Api().post("/register", form);
  },

  login(form) {
    return Api().post("/login", form);
  },

  logout() {
    return Api().post("/logout");
  },

  auth() {
    return Api().get("/user");
  },
  EditUser(user){
    return Api().put(`/register/editplayer/${user.id}`, user);
  },
  getallusers() {
    return Api().get("/allusers");
  },
  EditProfil(user){
    return Api().put(`/profil/${user.id}`, user);
  }
};

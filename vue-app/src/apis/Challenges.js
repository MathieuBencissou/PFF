import Api from "./Api";

export default {
  AddChallenge(form) {
    return Api().post("/AddChallenge", form);
  },
  GetChallenges() {
    return Api().get("/challenges");
  },
  DeleteChallenge(id) {
    return Api().delete(`/challenges/${id}`);
  },
  EditChallenge(challenge){
    return Api().put(`/challenges/${challenge.id}`, challenge);
  }

  // login(form) {
  //   return Api().post("/login", form);
  // },

  // logout() {
  //   return Api().post("/logout");
  // },

  // auth() {
  //   return Api().get("/user");
  // }
};

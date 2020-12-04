import Api from "./Api";

export default {
  AddProject(form) {
    return Api().post("/AddProject", form);
  },
  GetProject() {
    return Api().get("/Partner");
  },
  DeleteProject(id) {
    return Api().delete(`/Partner/${id}`);
  },
  EditProject(project){
    return Api().put(`/Partner/${project.id}`, project);
  }

};

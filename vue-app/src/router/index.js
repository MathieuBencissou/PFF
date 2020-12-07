import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Homepage from "../views/Homepage.vue";
import Challenges from "../views/Challenges.vue";
import AddChallenge from "../views/AddChallenge.vue";
import AdminAddChallenge from "../views/AdminAddChallenge.vue";
import AdminAddProject from "../views/AdminAddProject.vue";
// import AdminAddUser from "../views/AdminAddUser.vue";
import AdminEditChallenge from "../views/AdminEditChallenge.vue";
import AdminEditProject from "../views/AdminEditProject.vue";
// import AdminEditUser from "../views/AdminEditUser.vue";
import Jobs from "../views/Jobs.vue";
import EditChallenge from "../views/EditChallenge.vue";
import AddProject from "../views/AddProject.vue";
import Partner from "../views/Partner.vue";
import EditProject from "../views/EditProject.vue";
import Trombinoscope from "../views/Trombinoscope.vue";
import AdminProjects from "../views/AdminProjects.vue";
import AdminChallenges from "../views/AdminChallenges.vue";
import AdminUsers from "../views/AdminUsers.vue";
import ContactUs from "../views/ContactUs.vue";
import SendEmailChal from "../views/SendEmailChal.vue";
import SendEmailProj from "../views/SendEmailProj.vue";
import Profil from "../views/Profil.vue";
import store from "../store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guestOnly: true }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guestOnly: true }
  },
  {
    path: "/Homepage",
    name: "Homepage",
    component: Homepage,
    meta: { authOnly: true }
  },
  {
    path: "/Admin/Challenges",
    name: "AdminChallenges",
    component: AdminChallenges,
    meta: { adminOnly: true}
  },  
  {
    path: "/Admin/Projects",
    name: "AdminProjects",
    component: AdminProjects,
    meta: { adminOnly: true}
  },
  {
    path: "/Admin/Users",
    name: "AdminUsers",
    component: AdminUsers,
    meta: { adminOnly: true}
  },
  {
    path: "/Admin/AddChallenge",
    name: AdminAddChallenge,
    component: AdminAddChallenge,
    meta: { adminOnly: true}
  },
  {
    path: "/Admin/AddProject",
    name: AdminAddProject,
    component: AdminAddProject,
    meta: { adminOnly: true}
  },
  // {
  //   path: "/Admin/AddUser",
  //   name: AdminAddUser,
  //   component: AdminAddUser,
  //   meta: { adminOnly: true}
  // },
  {
    path: "/Admin/EditChallenge",
    name: AdminEditChallenge,
    component: AdminEditChallenge,
    meta: { adminOnly: true}
  },
  {
    path: "/Admin/EditProject",
    name: AdminEditProject,
    component: AdminEditProject,
    meta: { adminOnly: true}
  },
  // {
  //   path: "/Admin/EditUser",
  //   name: AdminEditUser,
  //   component: AdminEditUser,
  //   meta: { adminOnly: true}
  // },
  {
    path: "/Challenges",
    name: "Challenges",
    component: Challenges,
    meta: { authOnly: true }
  },
  {
    path: "/AddChallenge",
    name: "AddChallenge",
    component: AddChallenge,
    meta: { authOnly: true }
  },
  {
    path: "/Jobs",
    name: "Jobs",
    component: Jobs,
    meta: { authOnly: true }
  },
  {
    path: "/AddProject",
    name: "AddProject",
    component: AddProject,
    meta: { authOnly: true }
  },
  {
    path: "/Partner",
    name: "Partner",
    component: Partner,
    meta: { authOnly: true }
  },
    {
    path: "/Trombinoscope",
    name: "Trombinoscope",
    component: Trombinoscope,
    meta: { authOnly: true }
  },
  {
    path: "/EditChallenge/:id",
    name: "EditChallenge",
    component: EditChallenge,
    meta: { authOnly: true }
  },
  {
    path: "/EditProject/:id",
    name: "EditProject",
    component: EditProject,
    meta: { authOnly: true }
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/SendEmailChal/:id",
    name: "SendEmailChal",
    component: SendEmailChal,
    meta: { authOnly: true }
  },
  {
    path: "/SendEmailProj/:id",
    name: "SendEmailProj",
    component: SendEmailProj,
    meta: { authOnly: true }
  },
  {
    path: "/Profil",
    name: "Profil",
    component: Profil,
    meta: { authOnly: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function isLoggedIn() {
  return localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/Homepage",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.adminOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!(store.state.auth.user.dmin==38)) {
      next({
        path: "/"
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  }
   else {
    next(); // make sure to always call next()!
  }
});

export default router;

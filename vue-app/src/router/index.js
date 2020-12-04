import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Homepage from "../views/Homepage.vue";
import Challenges from "../views/Challenges.vue";
import AddChallenge from "../views/AddChallenge.vue";
/* import Jobs from "../views/Jobs.vue"; */
import EditChallenge from "../views/EditChallenge.vue";
import AddProject from "../views/AddProject.vue";
import Partner from "../views/Partner.vue";
import EditProject from "../views/EditProject.vue";

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
/*   {
    path: "/Jobs",
    name: "Jobs",
    component: Jobs,
    meta: { authOnly: true }
  }, */
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
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;

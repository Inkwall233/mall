import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category.vue");
const Cart = () => import("@/views/cart/Cart.vue");
const Profile = () => import("@/views/profile/Profile.vue");
const Detail = () => import("@/views/detail/Detail.vue");
const none404 = () => import("@/views/none404.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // { path: "/", redirect: "/home" },
  // { path: "/home", component: Home },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/detail/:iid",
    name: "Detail",
    component: Detail,
  },
  {
    path: '/404',
    name: "404",
    component: none404
  }
];

// const router = new VueRouter({
//   // base: process.env.BASE_URL,
//   routes,
//   mode: "history",
// });
const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});
export default router;

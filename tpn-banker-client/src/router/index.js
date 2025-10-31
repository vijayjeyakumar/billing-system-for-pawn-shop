import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from '../views/LoginUserPage.vue'


const routes = [
  {
    path: "/login",
    component: LoginUser,
    props: true,
    meta: {title: "Login"}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//check Access is there for user everytime
/*
router.beforeEach(async (to, from, next) => {
   if (to.meta.requiresAuth) {
     //const checkAccessResponse = await get(call check access url );

     if (checkAccessResponse && checkAccessResponse.authenticated) {
       next()
     } else {
       next("/login")
     }
   } else {
     next()
   }
})
*/
 

export default router

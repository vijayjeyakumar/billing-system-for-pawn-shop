import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from '../views/LoginUserPage.vue'
import customerListPage from '../views/CustomerListPage.vue'
import CustomerDetailsPage from '@/views/CustomerDetailsPage.vue' 


const routes = [
  {
    path: "/login",
    component: LoginUser,
    props: true,
    meta: {title: "Login"}
  },
   {
      path: '/',
      redirect: '/login'
    },
   {
      path: '/customer-list-page',
      component: customerListPage,
      props: true,
      meta: {title: "Customer List"}
    },
    {
      path: '/customer-details-page',
      component: CustomerDetailsPage,
      
      meta: {title: "Customer Details Page"}
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

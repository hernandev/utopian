// main router imports.
import Vue from 'vue'
import VueRouter from 'vue-router'

// import before-each route guard.
import beforeEach from './beforeEach'

// import application routes.
import routes from './routes'

// enable vue-router.
Vue.use(VueRouter)

// create the router instance.
const Router = new VueRouter({
  // mode and base should be handled by quasar, not directly changed here.
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  // inject routes on router instance.
  routes
})

// apply the before each guard.
Router.beforeEach(beforeEach)

// export the router instance.
export default Router

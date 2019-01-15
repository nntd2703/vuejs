import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import(`../components/HomePage.vue`)
const About = () => import(`../components/about.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

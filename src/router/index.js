import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/works/Works.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/blog/Blog.vue'
import Details from '../views/blog/Details.vue'
import Create from '../views/blog/Create.vue'
import Tag from '../views/blog/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    props: true
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
    props: true
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
    props: true
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    props: true
  },



]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
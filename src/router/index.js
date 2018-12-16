import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import TagsView from '@/components/TagsView'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
   
    {
      path: '/addsearch',
      component: Layout,
      children:[
        {
          path: 'search/:id',
          name: 'AddSearch',
          component: ()=>import("@/components/Search"),
          meta: { title: 'Search' }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/search',
      children: [
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/components/Search'),
        meta: { title: 'Search' }
      }
     ]
    },
    {
      path: '/addticket',
      component: Layout,
      children:[
        {
          path: 'ticket/:id',
          name: 'AddTicket',
          component: () =>import("@/components/Ticket"),
          meta: { title: 'Ticket'}
        }
      ]
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TagsView from '@/components/TagsView'
import Search from '@/components/Search'
import Ticket from '@/components/Ticket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    }
  ]
})

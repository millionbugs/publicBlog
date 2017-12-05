import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import NoteBook from '@/components/notebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    }, {
      path: '/notebook',
      name: 'notebook',
      component: NoteBook
    }
  ]
})

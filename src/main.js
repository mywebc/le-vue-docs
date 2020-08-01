// @ts-ignore
import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import  Home from './views/Home.vue'
import Doc from './views/Doc.vue'
// import Switch from './components/Switch.vue'
import Form from './components/Form.vue'
import Select from './components/Select.vue'
import Input from './components/Input.vue' 

import Switch from './lib/Switch.vue'



const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    linkActiveClass: 'active',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/doc',
        component: Doc,
        children:[
            { path: "switch",component: Switch },
            { path: "form",component: Form },
            { path: "input",component: Input },
            { path: "select",component: Select }
        ]
      }
    ]
  })

  const app = createApp(App);
  app.use(router);

  app.mount('#app')

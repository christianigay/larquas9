import './bootstrap';
import { createApp } from 'vue';
import vuetify from '@/plugins/vuetify.js'
import router from '@/router/index.js'
import store from './store'
import App from '@/App.vue'

const app = createApp(App);

const components = import.meta.globEager('@/layouts/*.vue')
// const componentsLayout = import.meta.globEager('@/components/layouts/*.vue')

Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  app.component(componentName, definition.default)
})

app.use(store)
app.use(vuetify)
app.use(router)
app.mount("#app");

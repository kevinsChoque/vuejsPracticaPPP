
require('./bootstrap');

window.Vue = require('vue');
//
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let routes = [
    { path:'/ejercicioLima',component:require('./components/ExampleComponent.vue').default }
]

const router = new VueRouter({
    mode:'history',
    routes
}) 
//

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router
});

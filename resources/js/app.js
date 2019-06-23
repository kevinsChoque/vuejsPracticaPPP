
require('./bootstrap');

window.Vue = require('vue');
//COMPONENTES
Vue.component('formulario', require('./components/ejercicioLima/formulario.vue').default);
Vue.component('listar', require('./components/ejercicioLima/listar.vue').default);

Vue.component('formulario2', require('./components/ejercicioLima2/formulario.vue').default);
Vue.component('listar2', require('./components/ejercicioLima2/listar.vue').default);
//RUTAS
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let routes = [
    { path:'/ejercicioLima',component:require('./components/ejercicioLima/Descripcion.vue').default },
    { path:'/ejercicioLima2',component:require('./components/ejercicioLima2/Descripcion.vue').default }
]

const router = new VueRouter({
    mode:'history',
    routes
}) 
//

const app = new Vue({
    el: '#app',
    router
});

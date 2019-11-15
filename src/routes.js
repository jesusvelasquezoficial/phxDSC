import Home from './assets/vue/pages/home.vue';
import AboutPage from './assets/vue/pages/about.vue';
import FormPage from './assets/vue/pages/form.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';

import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';
import Chat from './assets/vue/pages/chat.vue';
import Vuex from './assets/vue/pages/vuex.vue';

// Componentes
import Inicio from './assets/vue/pages/inicio.vue'
import IniciarSesion from './assets/vue/pages/iniciar-sesion.vue'
import RegistrarUsuario from './assets/vue/pages/registrar-usuario.vue'
import RegistroExitoso from './assets/vue/pages/registro-exitoso.vue'
import MenuIzquierdo from './assets/vue/pages/menu-izquierdo.vue'
import MenuDiestro from './assets/vue/pages/menu-diestro.vue'
import AgregarProducto from './assets/vue/pages/agregar-producto.vue'
import MostrarProducto from './assets/vue/pages/mostrar-producto.vue'

import Auth from './assets/auth'

export default [
  {
    path: '/',
    async: (routeTo, routeFrom, resolve, reject) => { 
      if(Auth.user.authenticated){
        resolve({component: Inicio})  
      }else{
        resolve({component: IniciarSesion})
      } 
    }
  },
  {
    path: '/inicio/',
    component: Inicio
  },
  {
    path: '/registrar-usuario/',
    component: RegistrarUsuario
  },
  {
    path: '/registro-exitoso/',
    component: RegistroExitoso
  },
  {
    path: '/menu-izquierdo/',
    component: MenuIzquierdo
  },
  {
    path: '/menu-diestro/',
    component: MenuDiestro
  },
  {
    path: '/agregar-producto/',
    component: AgregarProducto
  },
  {
    path: '/mostrar-producto/:id',
    component: MostrarProducto,
    props: true
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  // {
  //   path: '/panel-left/',
  //   component: PanelLeftPage
  // },
  {
    path: '/color-themes/',
    component: ColorThemes
  },
  {
    path: '/chat/',
    component: Chat
  },
  {
    path: '/vuex/',
    component: Vuex
  },
];

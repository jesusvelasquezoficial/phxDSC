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

// Guardian Principal -> verifica autenticacion de usuarios
const autenticado = () => {

}

export default [
  {
    path: '/',
    component: IniciarSesion
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
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
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

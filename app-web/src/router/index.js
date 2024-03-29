import Vue from 'vue';
import Router from 'vue-router';
import NavbarDobravel from '@/components/NavBar/NavBarLateral.vue';
import NavbarSuperior from '@/components/NavBar/NavBarSuperior.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    components: {
      default: NavbarDobravel,
      navbarSuperior: NavbarSuperior
    }
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import ContactView from '../views/ContactView.vue';
import PrivacyView from '../views/PrivacyView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/nosotros', component: AboutView },
  { path: '/servicios', component: ServicesView },
  { path: '/contacto', component: ContactView },
  { path: '/aviso-de-privacidad', component: PrivacyView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

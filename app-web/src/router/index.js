import { createRouter, createWebHistory } from 'vue-router';
import UploadImage from '@/views/Upload.vue';
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/upload',
    name: 'Upload',
    component: UploadImage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

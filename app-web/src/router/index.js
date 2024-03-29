import { createRouter, createWebHistory } from 'vue-router';
import UploadImage from '@/views/UploadImage.vue';

const routes = [
  {
    path: '/upload',
    name: 'Upload',
    component: UploadImage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

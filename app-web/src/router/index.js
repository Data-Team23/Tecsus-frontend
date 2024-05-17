import { createRouter, createWebHistory } from 'vue-router';
import UploadImage from '@/views/Upload.vue';
import Dashboard from '@/views/Dashboard.vue'
import PowerAlerts from '@/views/PowerAlerts.vue';
import WaterAlerts from '@/views/WaterAlerts.vue';
import ListContract from '@/views/contracts/ListContract.vue';
import AddContract from '@/views/contracts/AddContract.vue';

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
  {
    path: '/consumo-de-energia',
    name: 'Consumo de energia',
    component: PowerAlerts
  },
  {
    path: '/consumo-de-agua',
    name: 'Consumo de água',
    component: WaterAlerts
  },
  {
    path: '/contratos',
    name: 'Listar contratos',
    component: ListContract
  },
  {
    path: '/adicionar-contrato',
    name: 'Adicionar contrato',
    component: AddContract
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

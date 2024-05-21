import { createRouter, createWebHistory } from 'vue-router';
import UploadImage from '@/views/Upload.vue';
import Dashboard from '@/views/Dashboard.vue'
import PowerAlerts from '@/views/PowerAlerts.vue';
import WaterAlerts from '@/views/WaterAlerts.vue';
import ListSupplier from '@/views/supplier/ListSupplier.vue';
import AddSupplier from '@/views/supplier/AddSupplier.vue';
import AddSupplierWater from '@/views/supplier/AddSupplierWater.vue';
import ListContract from '@/views/contract/ListContract.vue';
import AddContract from '@/views/contract/AddContract.vue';

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
    path: '/fornecedores',
    name: 'Listar fornecedores',
    component: ListSupplier
  },
  {
    path: '/adicionar-fornecedor',
    name: 'Adicionar fornecedor',
    component: AddSupplier
  },
  {
    path: '/adicionar-fornecedor-agua',
    name: 'Adicionar fornecedor água',
    component: AddSupplierWater
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

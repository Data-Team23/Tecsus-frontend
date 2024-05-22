import { createRouter, createWebHistory } from 'vue-router';
import UploadImage from '@/views/Upload.vue';
import Dashboard from '@/views/Dashboard.vue'
import PowerAlerts from '@/views/PowerAlerts.vue';
import WaterAlerts from '@/views/WaterAlerts.vue';
import ListSupplier from '@/views/supplier/ListSupplier.vue';
import AddSupplierPower from '@/views/supplier/AddSupplierPower.vue';
import AddSupplierWater from '@/views/supplier/AddSupplierWater.vue';
import ListClient from '@/views/client/ListClient.vue';
import AddClientWater from '@/views/client/AddClientWater.vue';
import AddClientPower from '@/views/client/AddClientPower.vue';

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
    path: '/adicionar-fornecedor-energia',
    name: 'Adicionar fornecedor energia',
    component: AddSupplierPower
  },
  {
    path: '/adicionar-fornecedor-agua',
    name: 'Adicionar fornecedor água',
    component: AddSupplierWater
  },
  {
    path: '/clientes',
    name: 'Listar clientes',
    component: ListClient
  },
  {
    path: '/adicionar-cliente-agua',
    name: 'Adicionar cliente água',
    component: AddClientWater
  },
  {
    path: '/adicionar-cliente-energia',
    name: 'Adicionar cliente energia',
    component: AddClientPower
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

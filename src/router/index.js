import { createRouter, createWebHistory } from 'vue-router';
import UploadImage from '@/views/Upload.vue';
import Dashboard from '@/views/Dashboard.vue'
import PowerAlerts from '@/views/PowerAlerts.vue';
import WaterAlerts from '@/views/WaterAlerts.vue';
import AddSupplierPower from '@/views/supplier/AddSupplierPower.vue';
import AddSupplierWater from '@/views/supplier/AddSupplierWater.vue';
import AddClientWater from '@/views/client/AddClientWater.vue';
import AddClientPower from '@/views/client/AddClientPower.vue';
import EditClientWater from '@/views/client/EditClientWater.vue';
import ListClientWater from '@/views/client/ListClientWater.vue';
import ListClientPower from '@/views/client/ListClientPower.vue';
import ListSupplierWater from '@/views/supplier/ListSupplierWater.vue';
import ListSupplierPower from '@/views/supplier/ListSupplierPower.vue';
import EditSupplierPower from '@/views/supplier/EditSupplierPower.vue';
import EditSupplierWater from '@/views/supplier/EditSupplierWater.vue';
import EditClientPower from '@/views/client/EditClientPower.vue';

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
    path: '/fornecedores-agua',
    name: 'Listar fornecedores água',
    component: ListSupplierWater
  },
  {
    path: '/fornecedores-agua/:id',
    name: 'Editar fornecedores água',
    component: EditSupplierWater
  },
  {
    path: '/adicionar-fornecedor-agua',
    name: 'Adicionar fornecedor água',
    component: AddSupplierWater
  },
  {
    path: '/fornecedores-energia',
    name: 'Listar fornecedores energia',
    component: ListSupplierPower
  },
  {
    path: '/fornecedores-energia/:id',
    name: 'Editar fornecedores energia',
    component: EditSupplierPower
  },
  {
    path: '/adicionar-fornecedor-energia',
    name: 'Adicionar fornecedor energia',
    component: AddSupplierPower
  },
  {
    path: '/clientes-agua',
    name: 'Listar clientes água',
    component: ListClientWater
  },
  {
    path: '/adicionar-cliente-agua',
    name: 'Adicionar cliente água',
    component: AddClientWater
  },
  {
    path: '/clientes-agua/:id',
    name: 'Editar cliente água',
    component: EditClientWater
  },
  {
    path: '/clientes-energia',
    name: 'Listar clientes energia',
    component: ListClientPower
  },
  {
    path: '/clientes-energia/:id',
    name: 'Editar clientes energia',
    component: EditClientPower
  },
  {
    path: '/adicionar-cliente-energia',
    name: 'Adicionar cliente energia',
    component: AddClientPower
  },
  {
    path: '/clientes-energia/:id',
    name: 'Editar cliente energia',
    component: EditSupplierPower
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

<template>
    <div class="list-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
            <div class="select-supplier-type">
                <button
                    @click="selectSupplierType('ÁGUA')">
                    ÁGUA
                    <i class="fa-solid fa-droplet"></i>
                </button>
                <button
                    @click="selectSupplierType('ENERGIA')">
                    ENERGIA
                    <i class="fa-solid fa-lightbulb"></i>
                </button>
            </div>
        </div>
        <div class="title-container">
            <div class="title">
                <h2>CLIENTES {{ supplierTypeValue }}</h2>
                <h4>Tabela de clientes cadastrados</h4>
            </div>
            <div class="add-button">
                <router-link to="/adicionar-cliente-energia" v-if="supplierTypeValue == 'ENERGIA'">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
                <router-link to="/adicionar-cliente-agua" v-if="supplierTypeValue == 'ÁGUA'">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        <div class="table-container">
            <TableComponent
                v-if="supplierTypeValue == 'ENERGIA'"
                :data="data"
                :column-names="['Contrato', 'Email', 'Ativo?', 'Nº Contrato', 'Nº Cliente']">
            </TableComponent>
            <TableComponent
                v-if="supplierTypeValue == 'ÁGUA'"
                :data="data"
                :column-names="['Contrato', 'Email', 'Ativo?', 'Nº Contrato', 'Nº Cliente']">
            </TableComponent>
        </div>
    </div>
</template>

<script setup>
import TableComponent from '@/components/Table/TableComponent.vue';
import '@/assets/styles/list-create.css';
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const apiUrl = 'http://localhost:8000/api'

const data = ref([
    {
        "name": "CLIENTE 1",
        "email": "cliente@gmail.com",
        "ativo": "Sim",
        "numero_contrato": "123809",
        "numero_cliente": "1203980",
    },
    {
        "name": "CLIENTE 2",
        "email": "cliente@gmail.com",
        "ativo": "Sim",
        "numero_contrato": "123809",
        "numero_cliente": "1203980",
    },
    {
        "name": "CLIENTE 2",
        "email": "cliente@gmail.com",
        "ativo": "Sim",
        "numero_contrato": "123809",
        "numero_cliente": "1203980",
    },
])

const supplierTypeValue = ref('ÁGUA')
const supplierUrlTypeValue = ref('agua')

const selectSupplierType = (type) => {
    supplierTypeValue.value = type
    if(type == 'ÁGUA') supplierUrlTypeValue.value = 'agua'
    if(type == 'ENERGIA') supplierUrlTypeValue.value = 'energia'
}



// axios.get(`${apiUrl}/${supplierUrlTypeValue}/clientes_contratos`)
//   .then(response => {
//     console.log(response.data);
//     data.value = response.data
//   })
//   .catch(error => {
//     console.error('Erro ao carregar alertas:', error);
//   });

</script>
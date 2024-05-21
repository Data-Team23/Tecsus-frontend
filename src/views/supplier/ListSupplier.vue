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
                <h2>FORNECEDORES DE {{ supplierTypeValue }}</h2>
                <h4>Tabela de fornecedores cadastradas</h4>
            </div>
            <div class="add-button">
                <router-link to="/adicionar-fornecedor" v-if="supplierTypeValue == 'ENERGIA'">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
                <router-link to="/adicionar-fornecedor-agua" v-if="supplierTypeValue == 'ÁGUA'">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        <div class="table-container">
            <TableComponent
                v-if="supplierTypeValue == 'ENERGIA'"
                :data="data"
                :column-names="['Fornecedor', 'Cód. Companhia', 'Planta']">
            </TableComponent>
            <TableComponent
                v-if="supplierTypeValue == 'ÁGUA'"
                :data="data"
                :column-names="['Fornecedor', 'Cód. Companhia', 'Planta']">
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
        "name": "Concessionaria 1",
        "cep": "12224-015",
        "endereco": "Rua, XXXXXXXXXXX, 230",
        "planta": "CO"
    },
    {
        "name": "Concessionaria 2",
        "cep": "12224-016",
        "endereco": "Rua, XXXXXXXXXXX, 231",
        "planta": "CO"
    },
    {
        "name": "Concessionaria 3",
        "cep": "12224-017",
        "endereco": "Rua, XXXXXXXXXXX, 232",
        "planta": "CO"
    }
])

const supplierTypeValue = ref('ÁGUA')

const selectSupplierType = (type) => {
    supplierTypeValue.value = type
}

// axios.get(`${apiUrl}/concessionaires.json`)
//   .then(response => {
//     console.log(response.data);
//     data.value = response.data
//   })
//   .catch(error => {
//     console.error('Erro ao carregar alertas:', error);
//   });

</script>
<template>
    <div class="create-concessionaire-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
        </div>
        <div class="title-container">
            <div class="title">
                <h2>CONCESSIONÁRIAS</h2>
                <h4>Tabela de concessionárias cadastradas</h4>
            </div>
            <div class="add-button">
                <router-link to="/adicionar-concessionaria">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        <div class="table-container">
            <TableComponent
                :data="data"
                :column-names="['Concessionária', 'CEP', 'Endereço', 'Planta']">
            </TableComponent>
        </div>
    </div>
</template>

<script setup>
import TableComponent from '@/components/Table/TableComponent.vue';
import '@/assets/styles/concessionaire.css';
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

// axios.get(`${apiUrl}/concessionaires.json`)
//   .then(response => {
//     console.log(response.data);
//     data.value = response.data
//   })
//   .catch(error => {
//     console.error('Erro ao carregar alertas:', error);
//   });

</script>
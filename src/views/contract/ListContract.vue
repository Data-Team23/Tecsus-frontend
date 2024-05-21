<template>
    <div class="list-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
        </div>
        <div class="title-container">
            <div class="title">
                <h2>CONTRATOS</h2>
                <h4>Tabela de contratos cadastrados</h4>
            </div>
            <div class="add-button">
                <router-link to="/adicionar-contrato">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        <div class="table-container">
            <TableComponent
                :data="data"
                :column-names="['FORNECEDOR', 'Cliente', 'Modalidade', 'Email', 'Cidade']">
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
        "name": "FORNECEDOR 1",
        "client": "Cliente 1",
        "modalidade": "XXXXX",
        "email": "Email1@gmail.com",
        "cidade": "São José dos Campos"
    },
    {
        "name": "FORNECEDOR 2",
        "client": "Cliente 2",
        "modalidade": "XXXXX",
        "email": "Email2@gmail.com",
        "cidade": "São José dos Campos"
    },
    {
        "name": "FORNECEDOR 3",
        "client": "Cliente 3",
        "modalidade": "XXXXX",
        "email": "Email3@gmail.com",
        "cidade": "São José dos Campos"
    },
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
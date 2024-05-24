<template>
    <div class="list-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
            <div class="select-supplier-type">
                <router-link to="/fornecedores-agua">
                    <button>
                        ÁGUA
                        <i class="fa-solid fa-droplet"></i>
                    </button>
                </router-link>
                <router-link to="/fornecedores-energia">
                    <button>
                        ENERGIA
                        <i class="fa-solid fa-lightbulb"></i>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="title-container">
            <div class="title">
                <h2>FORNECEDORES DE ÁGUA</h2>
                <h4>Tabela de fornecedores cadastradas</h4>
            </div>
            <div class="add-button">
                <router-link to="/adicionar-fornecedor-agua">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        <div class="table-container">
            <TableComponent
                :id-prop-name="'id'"
                :show-edit-column="true"
                :data="data"
                :display-columns="['name', 'cep', 'endereco', 'planta']"
                :column-names="['Fornecedor', 'Cód. Companhia', 'Endereço', 'Planta']">
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
        "name": "Fornecedor 1",
        "cep": "12224-015",
        "endereco": "Rua, XXXXXXXXXXX, 230",
        "planta": "CO",
        "id": "1"
    },
    {
        "name": "Fornecedor 2",
        "cep": "12224-016",
        "endereco": "Rua, XXXXXXXXXXX, 231",
        "planta": "CO",
        "id": "1"
    },
    {
        "name": "Fornecedor 3",
        "cep": "12224-017",
        "endereco": "Rua, XXXXXXXXXXX, 232",
        "planta": "CO",
        "id": "1"
    }
])

// axios.get(`${apiUrl}/agua/fornecedores_agua`)
//   .then(response => {
//     console.log(response.data);
//     data.value = response.data
//   })
//   .catch(error => {
//     console.error('Erro ao carregar alertas:', error);
//   });

</script>
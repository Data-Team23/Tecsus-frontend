<template>
    <div class="list-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
            <div class="select-supplier-type">
                <router-link to="/clientes-agua">
                    <button>
                        ÁGUA
                        <i class="fa-solid fa-droplet"></i>
                    </button>
                </router-link>
                <router-link to="/clientes-energia">
                    <button>
                        ENERGIA
                        <i class="fa-solid fa-lightbulb"></i>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="title-container">
            <div class="title">
                <h2>CLIENTES ÁGUA</h2>
                <h4>Tabela de clientes cadastrados</h4>
            </div>
            <div class="add-button">
                <router-link to="/adicionar-cliente-agua">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        <div class="table-container">
            <TableComponent
                :id-prop-name="'codigo_de_ligacao_rgi'"
                :show-edit-column="true"
                :column-names="['Contrato', 'Email', 'Ativo?', 'Nº Contrato', 'Nº Cliente']"
                :display-columns="['nome_contrato', 'email', 'ativo', 'numero_contrato', 'numero_cliente']"
                :data="data">
            </TableComponent>
        </div>
    </div>
</template>

<script setup>
import TableComponent from '@/components/Table/TableComponent.vue';
import '@/assets/styles/list-create.css';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const toast = useToast();

const apiUrl = 'http://localhost:8000/api'

const data = ref([])


axios.get(`${apiUrl}/agua/clientes_contratos`)
  .then(response => {
    console.log(response.data);
    data.value = response.data
  })
  .catch(error => {
    console.error('Erro ao carregar clientes:', error);
  });

</script>
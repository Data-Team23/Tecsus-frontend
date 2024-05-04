<template>
    <div class="alerts-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
        </div>
        <div class="title-container">
            <h2>CONSUMO DE ENERGIA</h2>
            <h4>Alertas</h4>
        </div>
        <div class="table-container">
            <TableComponent
                :data="data"
                :column-names="['ID Alerta', 'ID Usuário', 'Email Usuário', 'Consumo médio', 'Consumo atual', 'Conta']">
            </TableComponent>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import TableComponent from '@/components/Table/TableComponent.vue';
import '@/assets/styles/alerts.css';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const apiUrl = 'http://localhost:8000/api'

const data = ref([])

let tableObject = {};

axios.get(`${apiUrl}/energia/alertas_energia`)
  .then(response => {
    console.log(response.data);
    data.value = response.data
  })
  .catch(error => {
    console.error('Erro ao carregar alertas:', error);
  });


</script>
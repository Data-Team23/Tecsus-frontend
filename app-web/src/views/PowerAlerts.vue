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
                :data-object="tableObject"
                :data="data">
            </TableComponent>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import TableComponent from '@/components/Table/TableComponent.vue';
import '@/assets/styles/alerts.css';
import dataMocked from '@/assets/mockedDatas/waterAlerts.json'

import { useToast } from 'vue-toastification';
const toast = useToast();

const apiUrl = ''

const data = ref([
    {
        "USUÁRIO": "User 1",
        "EMAIL": "user1@gmail.com",
        "ID DO ALERTA": "1837998",
        "ALERTA": "10",
        "CONSUMO": "6",
        "MÊS": "01/01/2024",
        "MÈDIA": "5",
    },
    {
        "USUÁRIO": "User 2",
        "EMAIL": "user2@gmail.com",
        "ID DO ALERTA": "3347998",
        "ALERTA": "16",
        "CONSUMO": "10",
        "MÊS": "01/03/2024",
        "MÈDIA": "8",
    },
    {
        "USUÁRIO": "User 1",
        "EMAIL": "user1@gmail.com",
        "ID DO ALERTA": "2237998",
        "ALERTA": "11",
        "CONSUMO": "7",
        "MÊS": "01/02/2024",
        "MÈDIA": "5",
    },
])

let tableObject = {
    id: "374682736",
    name: "Conta de Luz",
    value: "50.000",
    year: "2023",
    code: "451",
    unity: "Unidade 1",
};

// fetch(apiUrl, {  
//     method: 'GET',
// })
// .then(response => {
//     if (response.ok) {
//         data.value = response.value
//     } else {
//         toast.error('Erro carregar alertas.', {
//           position: 'bottom-center'
//         });
//     }
// })
// .catch(() => {
//     toast.error('Erro ao carregar alertas.', {
//         position: 'bottom-center'
//     });
// });


</script>
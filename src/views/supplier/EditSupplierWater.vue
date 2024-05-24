<template>
    <div class="add-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
            <div class="back-list-button" @click="goBack()">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        </div>
        <div class="title-container">
            <div class="title">
                <h2>EDITAR FORNECEDOR</h2>
                <h4>Formulário de edição de fornecedor</h4>
            </div>
        </div>
        <form action="" class="add-concessionaire-form">
            <InputField
                label="NOME DO FORNECEDOR"
                placeholder="Informe o nome do fornecedor"
                v-model="fornecedorValue"
                type="text">
            </InputField>
            <br>
            <InputField
                label="COMPANHIA"
                placeholder="Informe o código da companhia"
                v-model="codCompanhiaValue"
                type="text">
            </InputField>
            <br>
            <InputField
                label="PLANTA"
                placeholder="Informe a planta"
                v-model="plantaValue"
                type="text">
            </InputField>
            <br>
            <InputField
                label="RGI"
                placeholder="Informe o código RGI"
                v-model="rgiValue"
                type="text">
            </InputField>
            <br>
            <div class="input-button-container">
                <InputButton 
                    :textButton="'Salvar'" 
                    :onClick="console.log('Botão input acionado')">
                </InputButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import InputField from '@/components/InputField/InputField.vue';
import InputButton from '@/components/InputButton/InputButton.vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const route = useRoute();
const router = useRouter();

const fornecedorId = route.params.id
const fornecedorValue = ref();
const codCompanhiaValue = ref();
const plantaValue = ref();
const rgiValue = ref();

const apiUrl = 'http://localhost:8000/api'


// axios.get(`${apiUrl}/agua/fornecedores_agua/${fornecedorId}`)
//   .then(response => {
//     fornecedorValue.value = response.fornecedor
//     codCompanhiaValue.value = response.cod_companhia
//     plantaValue = response.planta
//     rgiValue.value = response.codigo_de_ligacao_rgi
//   })
//   .catch(error => {
//     console.error('Erro ao carregar alertas:', error);
//   });

console.log("id do fornecedor: ", fornecedorId)

const goBack = () => {
    router.go(-1)
}

</script>
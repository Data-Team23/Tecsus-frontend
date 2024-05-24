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
                <h2>CADASTRAR FORNECEDORES DE ÁGUA</h2>
                <h4>Formulário de cadastro de fornecedores</h4>
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
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import '@/assets/styles/list-create.css';

const apiUrl = 'http://localhost:8000/api'

const router = useRouter();
const fornecedorValue = ref();
const codCompanhiaValue = ref();
const plantaValue = ref();
const rgiValue = ref();

// const criarFornecedor = async () => {
//     const fornecedorData = {
//         fornecedor: fornecedorValue.value,
//         cod_companhia: codCompanhiaValue.value,
//         planta: plantaValue.value,
//         codigo_de_ligacao_rgi: rgiValue.value,
//     }
//     try {
//         const response = axios.post(`${apiUrl}/agua/fornecedor_agua`, fornecedorData)
//         console.log('Resposta da API:', response.data);
//     } catch (error) {
//         console.log('Erro: ', error)
//     }
// }


const goBack = () => {
    router.go(-1)
}

</script>
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
                    :onClick="criarFornecedor">
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
import { useToast } from 'vue-toastification';
import axios from 'axios';
import '@/assets/styles/list-create.css';

const apiUrl = 'http://3.18.214.149/api'

const router = useRouter();
const toast = useToast();

const fornecedorValue = ref("");
const codCompanhiaValue = ref("");
const plantaValue = ref("");
const rgiValue = ref("");

const criarFornecedor = async () => {
    event.preventDefault()
    const fornecedorData = {
        fornecedor: fornecedorValue.value,
        cod_companhia: codCompanhiaValue.value,
        planta: plantaValue.value,
        codigo_de_ligacao_rgi: rgiValue.value,
    }

    console.log(fornecedorData)
    
    try {
        axios.post(`${apiUrl}/agua/fornecedores_agua/`, fornecedorData)
        toast.success('Fornecedor criado com sucesso!', {
            position: 'bottom-center'
        });
        clearForm()
    } catch (error) {
        toast.error('Erro criar fornecedor.', {
          position: 'bottom-center'
        });
        console.log('Erro: ', error)
    }
}

const clearForm = () => {
    fornecedorValue.value = ''
    codCompanhiaValue.value = ''
    plantaValue.value = ''
    rgiValue.value = ''
}


const goBack = () => {
    router.push('/fornecedores-agua')
}

</script>
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
                <h2>CADASTRAR FORNECEDORES DE ENERGIA</h2>
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
                label="CONTRATO"
                placeholder="Informe o número do contrato"
                v-model="contratoValue"
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
import '@/assets/styles/list-create.css';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/api'


const toast = useToast();
const router = useRouter();
const fornecedorValue = ref();
const contratoValue = ref();

const criarFornecedor = async () => {
    event.preventDefault()
    const fornecedorData = {
        fornecedor: fornecedorValue.value,
        num_contrato: parseInt(contratoValue.value),
    }

    console.log(fornecedorData)
    try {
        axios.post(`${apiUrl}/energia/fornecedores_energia/`, fornecedorData)
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
    contratoValue.value = ''
}

const goBack = () => {
    router.push('/fornecedores-energia')
}

</script>
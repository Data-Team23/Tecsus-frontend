ia<template>
    <div class="add-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
            <div class="back-list-button" @click="goBack()">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        </div>
        <div class="title-container">
            <div class="title">
                <h2>CADASTRAR CLIENTES DE ENERGIA</h2>
                <h4>Formulário de cadastro de clientes</h4>
            </div>
        </div>
        <form action="" class="add-concessionaire-form">
            <InputField
                label="NOME DO CONTRATO"
                placeholder="Informe o nome do contrato"
                v-model="contratoValue"
                type="text">
            </InputField>
            <br>
            <InputField
                label="Nº CONTRATO"
                placeholder="Informe o código RGI"
                v-model="numContratoValue"
                type="text">
            </InputField>
            <br>
            <InputField
                label="Nº CLIENTE"
                placeholder="Informe o número do cliente"
                v-model="numClienteValue"
                type="text">
            </InputField>
            <br>    
            <InputField
                label="Nº INSTALAÇÃO"
                placeholder="Informe o número da instalação"
                v-model="numInstalacaoValue"
                type="text">
            </InputField>
            <br>    
            <InputField
                label="EMAIL"
                placeholder="example@gmail.com"
                v-model="emailValue"
                type="email">
            </InputField>
            <br>
            <InputField
                label="GRUPO"
                placeholder="Informe o grupo"
                v-model="grupoValue"
                type="text">
            </InputField>
            <br>
            <InputField
                label="FORMA DE PAGAMENTO"
                placeholder="Débito, Crédito, Pix"
                v-model="pagValue"
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
                label="ATIVO"
                placeholder="SIM OU NÃO"
                v-model="ativoValue"
                type="text">
            </InputField>
            <br>
            <div class="input-button-container">
                <InputButton 
                    :textButton="'Salvar'" 
                    :onClick="criarCliente">
                </InputButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import InputField from '@/components/InputField/InputField.vue';
import InputButton from '@/components/InputButton/InputButton.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import '@/assets/styles/list-create.css';
import { useToast } from 'vue-toastification';

const apiUrl = 'http://3.18.214.149/api'

const toast = useToast()

const router = useRouter();
const contratoValue = ref();
const numContratoValue = ref();
const numClienteValue = ref();
const numInstalacaoValue = ref();
const emailValue = ref();
const grupoValue = ref();
const pagValue = ref();
const plantaValue = ref();
const ativoValue = ref();

const criarCliente = async () => {
    event.preventDefault()
    const clienteData = {
        nome_contrato: contratoValue.value,
        email: emailValue.value,
        ativo: ativoValue.value,
        num_contrato: numContratoValue.value,
        num_cliente: numClienteValue.value,
        num_instalacao: numInstalacaoValue.value,
        grupo: grupoValue.value,
        forma_pagamento: pagValue.value,
        planta: plantaValue.value
    }
    console.log(clienteData)
    try {
        axios.post(`${apiUrl}/energia/clientes_contratos/`, clienteData)
        toast.success('Cliente criado com sucesso!', {
            position: 'bottom-center'
        });
        clearForm()
    } catch (error) {
        toast.error('Erro criar cliente.', {
          position: 'bottom-center'
        });
        console.log('Erro: ', error)
    }
}

const clearForm = () => {
    contratoValue.value = ''
    emailValue.value = ''
    ativoValue.value = ''
    numContratoValue.value = ''
    numClienteValue.value = ''
    numInstalacaoValue.value = ''
    grupoValue.value = ''
    pagValue.value = ''
    plantaValue.value = ''
}

const goBack = () => {
    router.push('/clientes-energia')
}

</script>
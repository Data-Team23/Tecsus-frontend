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
                <h2>CADASTRAR CLIENTES DE ÁGUA</h2>
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
                label="EMAIL"
                placeholder="Informe o email"
                v-model="emailValue"
                type="email">
            </InputField>
            <br>
            <InputField
                label="RGI"
                placeholder="Informe o código RGI"
                v-model="rgiValue"
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
import { ref } from 'vue'
import '@/assets/styles/list-create.css';
import { useToast } from 'vue-toastification';

const apiUrl = 'http://localhost:8000/api'

const toast = useToast()

const router = useRouter();
const contratoValue = ref()
const numContratoValue = ref()
const numClienteValue = ref()
const emailValue = ref()
const ativoValue = ref()
const rgiValue = ref()

const criarCliente = async () => {
    event.preventDefault()
    const clienteData = {
        nome_contrato: contratoValue.value,
        email: emailValue.value,
        ativo: ativoValue.value,
        numero_contrato: numContratoValue.value,
        numero_cliente: numClienteValue.value,
        codigo_de_ligacao_rgi: rgiValue.value
    }
    console.log(clienteData)
    try {
        await axios.post(`${apiUrl}/agua/clientes_contratos/`, clienteData)
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
    rgiValue.value = ''
}

const goBack = () => {
    router.push('/clientes-agua')
}

</script>
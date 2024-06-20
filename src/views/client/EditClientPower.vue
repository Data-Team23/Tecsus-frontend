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
                <h2>EDITAR CLIENTES</h2>
                <h4>Formulário de edição de clientes</h4>
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
                placeholder="Informe o número do contrato"
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
                    :onClick="updateClient">
                </InputButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'
import InputField from '@/components/InputField/InputField.vue';
import InputButton from '@/components/InputButton/InputButton.vue';
import { ref } from 'vue';
import '@/assets/styles/list-create.css';
import { useToast } from 'vue-toastification';

const apiUrl = 'http://3.15.180.222/api'

const toast = useToast()

const router = useRouter();
const route = useRoute();

const clienteId = route.params.id
const contratoValue = ref();
const numContratoValue = ref();
const numClienteValue = ref();
const numInstalacaoValue = ref();
const emailValue = ref();
const grupoValue = ref();
const pagValue = ref();
const plantaValue = ref();
const ativoValue = ref();


axios.get(`${apiUrl}/energia/clientes_contratos/${clienteId}`)
  .then(response => {
    contratoValue.value = response.data.nome_contrato
    emailValue.value = response.data.email
    ativoValue.value = response.data.ativo
    numContratoValue.value = response.data.num_contrato
    numClienteValue.value = response.data.num_cliente
    numInstalacaoValue.value = response.data.num_instalacao
    grupoValue.value = response.data.grupo
    pagValue.value = response.data.forma_pagamento
    plantaValue.value = response.data.planta
  })
  .catch(error => {
    toast.error('Erro ao carregar dados do fornecedor', {
        position: 'bottom-center'
    })
  });

const updateClient = async () => {
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
        await axios.put(`${apiUrl}/energia/clientes_contratos/${clienteId}`, clienteData);
        toast.success('Cliente atualizado com sucesso!', {
            position: 'bottom-center'
        });
    } catch (error) {
        toast.error('Erro ao atualizar cliente', {
            position: 'bottom-center'
        });
    }
}

const goBack = () => {
    router.go(-1)
}

console.log(clienteId)

</script>
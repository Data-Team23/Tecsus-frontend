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
            <InputField label="NOME DO CONTRATO" placeholder="Informe o nome do contrato" v-model="contratoValue"
                type="text">
            </InputField>
            <br>
            <InputField label="Nº CONTRATO" placeholder="Informe o código RGI" v-model="numContratoValue" type="text">
            </InputField>
            <br>
            <InputField label="Nº CLIENTE" placeholder="Informe o número do cliente" v-model="numClienteValue"
                type="text">
            </InputField>
            <br>
            <InputField label="EMAIL" placeholder="Informe o email" v-model="emailValue" type="email">
            </InputField>
            <br>
            <InputField label="RGI" placeholder="Informe o código RGI" v-model="rgiValue" type="text">
            </InputField>
            <br>
            <InputField label="ATIVO" placeholder="SIM OU NÃO" v-model="ativoValue" type="text">
            </InputField>
            <br>
            <br>
            <div class="input-button-container">
                <InputButton :textButton="'Salvar'" :onClick="updateClient">
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
import { ref } from 'vue'
import '@/assets/styles/list-create.css';
import { useToast } from 'vue-toastification';

const apiUrl = 'http://3.18.214.149/api'

const toast = useToast()

const router = useRouter();
const route = useRoute();

const clienteId = route.params.id

const contratoValue = ref()
const numContratoValue = ref()
const numClienteValue = ref()
const emailValue = ref()
const ativoValue = ref()
const rgiValue = ref()

axios.get(`${apiUrl}/agua/clientes_contratos/${clienteId}`)
    .then(response => {
        try {
            contratoValue.value = response.data.nome_contrato
            emailValue.value = response.data.email
            ativoValue.value = response.data.ativo
            numContratoValue.value = response.data.numero_contrato
            numClienteValue.value = response.data.numero_cliente
            rgiValue.value = response.data.codigo_de_ligacao_rgi
        } catch (error) {
            toast.error('Erro ao carregar dados do cliente', {
                position: 'bottom-center'
            })
        }
    })

const updateClient = async () => {
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
        await axios.put(`${apiUrl}/agua/clientes_contratos/${clienteId}`, clienteData);
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
    router.push('/clientes-agua')
}

console.log(route.params.id)

</script>
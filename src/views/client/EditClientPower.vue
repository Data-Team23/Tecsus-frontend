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
                    :onClick="console.log('Botão input acionado')">
                </InputButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import InputField from '@/components/InputField/InputField.vue';
import InputButton from '@/components/InputButton/InputButton.vue';
import { ref } from 'vue';
import '@/assets/styles/list-create.css';

const router = useRouter();
const route = useRoute();

const contratoValue = ref();
const numContratoValue = ref();
const numClienteValue = ref();
const emailValue = ref();
const grupoValue = ref();
const pagValue = ref();
const plantaValue = ref();
const ativoValue = ref();


// axios.get(`${apiUrl}/energia/fornecedores_energia/${fornecedorId}`)
//   .then(response => {
//     fornecedor.value = response.fornecedor
//     num_contrato.value = response.num_contrato
//   })
//   .catch(error => {
//     console.error('Erro ao carregar alertas:', error);
//   });

// console.log("id do fornecedor: ", fornecedorId)

const goBack = () => {
    router.go(-1)
}

console.log(route.params.id)

</script>
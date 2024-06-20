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
                label="CONTRATO"
                placeholder="Informe o número do contrato"
                v-model="contratoValue"
                type="text">
            </InputField>
            <br>
            <div class="input-button-container">
                <InputButton 
                    :textButton="'Salvar'" 
                    :onClick="updateFornecedor">
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
const fornecedorValue = ref()
const contratoValue = ref()

const apiUrl = 'http://3.18.214.149/api'


axios.get(`${apiUrl}/energia/fornecedores_energia/${fornecedorId}`)
  .then(response => {
    try {
        fornecedorValue.value = response.data.fornecedor
        contratoValue.value = response.data.num_contrato
        console.log(response)
    } catch (error) {
        toast.error('Erro ao carregar dados do fornecedor', {
            position: 'bottom-center'
        })
    }
  })

const updateFornecedor = async () => {
    event.preventDefault()
    const fornecedorData = {
        fornecedor: fornecedorValue.value,
        num_contrato: contratoValue.value
    }
    console.log(fornecedorData)
    try {
        await axios.put(`${apiUrl}/energia/fornecedores_energia/${fornecedorId}`, fornecedorData);
        toast.success('Fornecedor atualizado com sucesso!', {
            position: 'bottom-center'
        });
    } catch (error) {
        toast.error('Erro ao atualizar fornecedor', {
            position: 'bottom-center'
        });
    }
}

console.log("id do fornecedor: ", fornecedorId)

const goBack = () => {
    router.push('/fornecedores-energia')
}

</script>
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
                <h2>CADASTRAR CONTRATOS</h2>
                <h4>Formulário de cadastro de contratos</h4>
            </div>
        </div>
        <form action="" class="add-form">
            <div class="select-field-box">
                <SelectField
                    :option-values="contractType"
                    value-prop="id"
                    label-prop="name"
                    v-model="contractTypeValue"
                    pre-selected-prop="Selecione o tipo de contrato:">
                </SelectField> 
            </div>
            <br>
            <InputField
                label="Nº CONTRATO"
                placeholder="Informe o número da contrato"
                type="text">
            </InputField>
            <br>
            <InputField
                label="Nº INSTALAÇÃO"
                placeholder="Informe o número da instalação"
                type="text">
            </InputField>
            <br>
            <InputField
                label="Nº MEDIDOR"
                placeholder="Informe o número do medidor"
                type="text">
            </InputField>
            <br>
            <InputField
                label="Nº CLIENTE"
                placeholder="Informe o número do cliente"
                type="text">
            </InputField>
            <br>
            <InputField
                label="EMAIL"
                placeholder="Informe o email"
                type="text">
            </InputField>
            <br>
            <InputField
                label="CIDADE"
                placeholder="Informe a cidade"
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
import SelectField from '@/components/SelectField/SelectField.vue';
import InputButton from '@/components/InputButton/InputButton.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import '@/assets/styles/list-create.css';

let contractType = [
    {
        id: 'agua',
        name: 'Água',
        value: 'agua'
    },
    {
        id: 'energia',
        name: 'Energia',
        value: 'energia'
    }
]; 

const router = useRouter();

const goBack = () => {
    router.go(-1)
}

const contractTypeValue = ref("");


</script>
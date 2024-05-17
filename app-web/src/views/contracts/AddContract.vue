<template>
    <div class="add-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
        </div>
        <div class="title-container">
            <div class="title">
                <h2>CADASTRAR CONTRATOS</h2>
                <h4>Formulário de cadastro de contratos</h4>
            </div>
        </div>
        <form action="" class="add-form">
            <InputField
                label="FORNECEDOR"
                placeholder="Informe o fornecedor"
                type="text">
            </InputField>
            <br>
            <InputField
                label="CLIENTE"
                placeholder="Informe o cliente"
                type="text">
            </InputField>
            <br>
            <InputField
                label="MODALIDADE"
                placeholder="Informe a modalidade"
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
import InputButton from '@/components/InputButton/InputButton.vue';
import '@/assets/styles/list-create.css';




</script>
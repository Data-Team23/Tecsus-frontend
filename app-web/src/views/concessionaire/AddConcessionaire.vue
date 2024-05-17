<template>
    <div class="add-concessionaire-container">
        <div class="utilisense-logo">
            <img src="@/assets/utilisense-logo.png" alt="">
        </div>
        <div class="title-container">
            <div class="title">
                <h2>CADASTRAR CONCESSIONÁRIAS</h2>
                <h4>Formulário de cadastro de concessionárias</h4>
            </div>
        </div>
        <form action="" class="add-concessionaire-form">
            <InputField
                label="NOME DA CONCESSIONÁRIA"
                placeholder="Informe o nome"
                type="text">
            </InputField>
            <br>
            <InputField
                label="CEP"
                placeholder="Informe o número do cep sem traços ou pontos"
                type="text">
            </InputField>
            <br>
            <InputField
                label="ENDEREÇO"
                placeholder="Informe o nome da rua e número"
                type="text">
            </InputField>
            <br>
            <InputField
                label="PLANTA"
                placeholder="Informe a sigla correspondente ao tipo de planta"
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
import '@/assets/styles/concessionaire.css';




</script>
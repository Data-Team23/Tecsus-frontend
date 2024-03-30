<template>
<div>
    <div class="navbar-superior">
        <div class="navbar-logo">
            <img src="@/assets/logo.png" alt="Logo" class="logo">
        </div>
        <div class="navbar-user">
            <span class="email-label">aluno@fatec.sp.gov.br</span>
        </div>
    </div>
    <div :class="['navbar-lateral', { 'dobrada': dobrada }]">
    <div class="icon">
        <button @click="toggleDobrada">
        <i :class="['fa-solid', dobrada ? 'fa-angles-right' : 'fa-angles-left', 'fa-2xl']"></i>
        </button>
    </div>
    <div class="container" v-show=!dobrada>
        <router-link to="/upload">Importar Dados</router-link>
        <router-link to="/unidades">Unidades</router-link>
        <router-link to="/concessionarias">Concessionárias</router-link>
        <router-link to="/contratos">Contratos</router-link>
        <router-link to="/contas">Contas</router-link>
    </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script setup>
import '@/assets/styles/navbar.css';
import { ref } from 'vue';

const dobrada = ref(false);

const toggleDobrada = () => {
dobrada.value = !dobrada.value; 
};
</script>"


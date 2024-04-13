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
                <router-link to="/upload">
                    <i class="fa-solid fa-file-contract" style="color: #ffffff;"></i>
                    Importar Dados
                </router-link>
                <router-link to="/unidades">
                    <i class="fa-solid fa-box" style="color: #ffffff;"></i>
                    Unidades
                </router-link>
                <router-link to="/concessionarias">
                    <i class="fa-solid fa-building" style="color: #ffffff;"></i>
                    Concessionárias
                </router-link>
                <router-link to="/contratos">
                    <i class="fa-solid fa-file-signature" style="color: #ffffff;"></i>
                    Contratos
                </router-link>
                <router-link to="/contas">
                    <i class="fa-solid fa-file-invoice-dollar" style="color: #ffffff;"></i>
                    Contas
                </router-link>
            </div>
        </div>
        <router-view :class="{'view-dobrada': !dobrada}"></router-view>
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


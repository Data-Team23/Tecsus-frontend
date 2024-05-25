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
                <router-link to="/fornecedores-agua">
                    <i class="fa-solid fa-building" style="color: #ffffff;"></i>
                    Fornecedores
                </router-link>
                <router-link to="/clientes-agua">
                    <i class="fa-solid fa-building" style="color: #ffffff;"></i>
                    Clientes
                </router-link>
                <router-link to="/dashboard">
                    <i class="fa-solid fa-file-invoice-dollar" style="color: #ffffff;"></i>
                    Dashboard
                </router-link>
                <div class="nav-alert" to="/alerts">
                    <div class="alert" :onClick="toggleAlertsLinks">
                        <i class="fa-solid fa-triangle-exclamation" style="color: #ffffff;"></i>
                        Alertas
                        <i class="fa-sharp fa-solid fa-caret-down"></i>
                    </div>
                    <ul class="alert-list" v-if="alertLinks">
                        <li>
                            <i class="fa-solid fa-droplet"></i>
                            <router-link to="/consumo-de-agua">Consumo de Água</router-link>
                        </li>
                        <li>
                            <i class="fa-solid fa-lightbulb"></i>
                            <router-link to="/consumo-de-energia">Consumo de Energia</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view :class="{'view-dobrada': !dobrada}"></router-view>
    </div>
</template>

<script setup>
import '@/assets/styles/navbar.css';
import { ref } from 'vue';

const dobrada = ref(false);

const alertLinks = ref(false)

const toggleDobrada = () => {
    dobrada.value = !dobrada.value; 
};

const toggleAlertsLinks = () => {
    alertLinks.value = !alertLinks.value;
}
</script>"


<template>
    <section class="login">
      <div class="container-login">
        <form @submit.prevent="login">
          <div class="container-title">
            <p>Login</p>
          </div>
          <div class="container-input">
            <div class="input-login">
              <p>E-mail</p>
              <input v-model="email" type="text" placeholder="Seu e-mail">
            </div>
            <div class="input-login">
              <p>Senha</p>
              <input v-model="password" type="password" placeholder="Sua senha">
            </div>
          </div>
          <div class="container-access">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
<script setup>
import './style.css'

import { ref } from 'vue'
import router from '@/router/index.js'
import axios from 'axios';

const email = ref(null);
const password = ref(null);

function validateEmail(email) {
var re = /\S+@\S+\.\S+/;
return re.test(email);
}

async function loginData(payload) {
    return axios.post('http://127.0.0.1:8000/api/v1/jwt/create', payload)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error logging in:', error);
    });
};

async function login() {
    if (validateEmail(email.value)) {
        const payload = {
        email: email.value,
        password: password.value,
        };

        try {
        const data = await loginData(payload);
        
        if (data) {
            router.push({ name: 'Upload' });
        } else {
            window.alert('Login failed. Please check your credentials.')
        }
        } catch (error) {
            window.alert('Error logging in. Please try again later.')
        }
    } else {
        window.alert('Please enter a valid email address.')
    }
}

</script>
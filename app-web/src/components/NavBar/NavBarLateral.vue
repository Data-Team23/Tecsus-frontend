<template>
    <div :class="['navbar-dobravel', { 'dobrada': dobrada }]">
        <button @click="toggleDobrada">
            <i :class="['fa-solid', dobrada ? 'fa-angles-right' : 'fa-angles-left', 'fa-2xl']"></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const dobrada = ref(false);

const toggleDobrada = () => {
    dobrada.value = !dobrada.value; 
};
</script>

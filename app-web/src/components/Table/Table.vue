<!-- TableComponent.vue -->
<template>
    <table v-if="data">
      <thead>
        <tr>
          <th v-for="(value, index) in data[0]" :key="index">{{ index }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(value, key) in row" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import "./styles.css"
  import { ref } from 'vue';
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  });
  </script>
  
<template>
  <div>
    <table v-if="paginatedData">
      <caption>Dados importados</caption>
      <thead>
        <tr>
          <th v-for="(value, index) in paginatedData[0]" :key="index">{{ index }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in paginatedData" :key="index">
          <td v-for="(value, key) in row" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-buttons">
      <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Próxima</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import "./styles.css"

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 8
  }
});

const currentPage = ref(1);

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * props.itemsPerPage;
  const endIndex = currentPage.value * props.itemsPerPage;
  return props.data.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(props.data.length / props.itemsPerPage));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

</script>

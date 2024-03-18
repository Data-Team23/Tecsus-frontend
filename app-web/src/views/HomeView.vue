<template>
  <div class="home">
    <img alt="Vue logo" src="https://tecsus.com.br/wp-content/uploads/2020/10/logo_tecsus_horizontal.png">
    <HelloWorld msg="This is Hello World Component"/>
    <h1>This is an home page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

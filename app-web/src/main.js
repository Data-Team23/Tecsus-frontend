import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import * as powerbi from 'powerbi-client';

library.add(fas);

createApp(App)
  .use(router)
  .use(Toast, {
    transition: "Vue-Toastification__slideBlurred",
    maxToasts: 5,
    newestOnTop: true,
    filterBeforeCreate: (toast, toasts) => {
      if (toasts.filter((t) => t.type === toast.type).length !== 0) {
        return false;
      }
      return toast;
    },
  })
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

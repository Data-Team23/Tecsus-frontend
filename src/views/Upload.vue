<template>
    <div class="container-upload">
        <div class="container-filter">
            <SelectField
                :option-values="countTypes"
                value-prop="value"
                label-prop="label"
                id="conta"
                v-model="countTypeValue"
                pre-selected-prop="Selecione o tipo de conta:">
            </SelectField>
            <SelectField
                :option-values="documentTypes"
                value-prop="id"
                label-prop="name"
                id="documento"
                v-model="documentTypeValue"
                pre-selected-prop="Selecione o tipo de documento:">
            </SelectField>      
        </div>
        <div class="container-import">
            <InputField
                placeholder="Path"
                type="file"
                id="csv"
                v-on:change="onFileInputChange"
                @change="handleFileChange">
            </InputField>
        </div>
        <div class="container-table">
            <div class="container-table-message" v-if="!fileInputValue">
                <p>Para visualizar os dados!</p>
            </div>
            <TableComponent
                :data="data" 
                v-if="data">
            </TableComponent>
        </div>
        <div class="container-button">
            <InputButton 
                :textButton="'Limpar dados'" 
                :onClick="clearData">
            </InputButton>
            <InputButton 
                :textButton="'Salvar'"
                id="botao" 
                :onClick="uploadCSV">
            </InputButton>
        </div>
    </div>
</template>

<script setup>
import '@/assets/styles/upload.css';
import SelectField from '../components/SelectField/SelectField.vue';
import InputField from '../components/InputField/InputField.vue';
import InputButton from '../components/InputButton/InputButton.vue';
import TableComponent from '../components/Table/TableComponent.vue'
import { ref } from 'vue';

const countTypeValue = ref("");
const documentTypeValue = ref("");

import { useToast } from 'vue-toastification';
const toast = useToast();

let countTypes = [
    {
        label: 'Conta de água',
        value: 'agua'
    },
    {
        label: 'Conta de energia',
        value: 'energia'
    },
    {
        label: 'Conta de gás',
        value: 'gas'
    }
];

let documentTypes = [
    {
        id: 'contrato',
        name: 'Contrato',
        value: 'contrato'
    },
    {
        id: 'fatura',
        name: 'Fatura',
        value: 'fatura'
    }
];

let tableObject = {
    id: "374682736",
    name: "Conta de Luz",
    value: "50.000",
    year: "2023",
    code: "451",
    unity: "Unidade 1",
};

let fileInputValue = null;

const onFileInputChange = (event) => {
    fileInputValue = event.target.files[0];
};

const data = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const content = reader.result;
    processData(content);
  };
  reader.readAsText(file);
};

const processData = (content) => {
  const rows = content.trim().split('\n').map(row => row.split(','));
  const headers = rows.shift();
  const formattedData = rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  data.value = formattedData;
};

const clearData = () => {
    data.value = null;
    fileInputValue = null;
    countTypeValue.value = null;
    documentTypeValue.value = null;
};

const uploadCSV = () => {

  if (!fileInputValue) {
    toast.error('Selecione um arquivo CSS!', {
      timeout: 3000,
      position: 'bottom-center'
    });
    return;
  }

  if (!countTypeValue.value) {
    toast.error('Por favor, selecione o tipo de conta.', {
      position: 'bottom-center'
    });
    return;
  }

  if (!documentTypeValue.value) {
    toast.error('Por favor, selecione o tipo de documento.', {
      position: 'bottom-center'
    });
    return;
  }

  const formData = new FormData();
  formData.append('tipo_documento', documentTypeValue.value);
  formData.append('arquivo_csv', fileInputValue);

  toast.info('Salvando arquivo CSV...', {
    position: 'bottom-center'
  });

  fetch(`http://ec2-34-234-75-140.compute-1.amazonaws.com/api/${countTypeValue.value}/upload/`, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        toast.success('Arquivo CSV enviado com sucesso!', {
          position: 'bottom-center'
        });
      } else {
        toast.error('Erro ao enviar o arquivo CSV.', {
          position: 'bottom-center'
        });
      }
    })
    .catch(() => {
      toast.error('Erro ao enviar o arquivo CSV.', {
        position: 'bottom-center'
      });
    });
};

</script>

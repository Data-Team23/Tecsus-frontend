<template>
    <div class="container-upload">
        <div class="container-filter">
            <SelectField
                :option-values="countTypes"
                value-prop="value"
                label-prop="label"
                v-model="countTypeValue"
                pre-selected-prop="Selecione o tipo de conta:">
            </SelectField>
            <SelectField
                :option-values="documentTypes"
                value-prop="id"
                label-prop="name"
                v-model="documentTypeValue"
                pre-selected-prop="Selecione o tipo de documento:">
            </SelectField>      
        </div>
        <div class="container-import">
            <InputField
                placeholder="Path"
                type="file"
                v-on:change="onFileInputChange"
                @change="handleFileChange">
            </InputField>
        </div>
        <div class="container-table">
            <div v-if="!fileInputValue">
                <p>Para vizualizar os dados, selecione um arquivo para importar!</p>
            </div>
            <Table
                :data-object="tableObject"
                :data="data" 
                v-if="data">
            </Table>
        </div>
        <div class="container-button">
            <InputButton 
                :textButton="'Salvar'" 
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
import Table from '../components/Table/Table.vue'
import { ref } from 'vue';

const countTypeValue = ref("");
const documentTypeValue = ref("");

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

const uploadCSV = () => {
    if (!fileInputValue) {
        alert("Por favor, selecione um arquivo CSV.");
        return;
    }

    if (!countTypeValue.value) {
        alert("Por favor, selecione o tipo de conta.");
        return;
    }

    if (!documentTypeValue.value) {
        alert("Por favor, selecione o tipo de documento.");
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInputValue);

    fetch(`http://127.0.0.1:8000/api/contas/upload/${countTypeValue.value}/${documentTypeValue.value}/`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert("Arquivo CSV enviado com sucesso!");
        } else {
            alert("Erro ao enviar o arquivo CSV.");
        }
    })
    .catch(error => {
        alert("Erro ao enviar o arquivo CSV.");
    });
};

</script>

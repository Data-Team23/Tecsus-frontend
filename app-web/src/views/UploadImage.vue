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
                :option-values="concessionaires"
                value-prop="id"
                label-prop="name"
                v-model="concessionaireValue"
                pre-selected-prop="Selecione a concessionária:">
            </SelectField>
            <SelectField
                :option-values="units"
                value-prop="id"
                label-prop="name"
                v-model="unityValue"
                pre-selected-prop="Selecione a unidade:">
            </SelectField>        
        </div>
        <div class="container-import">
            <InputField
                placeholder="Path"
                type="file">
            </InputField>
        </div>
        <div class="container-table">
            <Table
                :data-object="tableObject">
            </Table>
        </div>
    </div>    

</template>

<script setup>
import './styles.css';
import SelectField from '../components/SelectField/SelectField.vue';
import InputField from '../components/InputField/InputField.vue';
import Table from '../components/Table/Table.vue'
import { ref } from 'vue';

const countTypeValue = ref("")
const unityValue = ref("")
const concessionaireValue = ref("")

let countTypes = [
    {
        label: 'Conta de água',
        value: 'conta_de_agua'
    },
    {
        label: 'Conta de luz',
        value: 'conta_de_luz'
    }
]

let concessionaires = [
    {
        id: 'concessionaria_1',
        name: 'Concessionária 1',
    },
    {
        id: 'concessionaria_2',
        name: 'Concessionária 2'
    }
]

let units = [
    {
        id: 'unidade_1',
        name: 'Unidade 1'
    },
    {
        id: 'unidade_2',
        name: 'Unidade 2'
    }
]

let tableObject = {
    id: "374682736",
    name: "Conta de Luz",
    value: "50.000",
    year: "2023",
    code: "451",
    unity: "Unidade 1",
}



</script>


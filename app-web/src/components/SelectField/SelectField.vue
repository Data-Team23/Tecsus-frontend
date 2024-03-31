<template>
    <select :value="modelValue" @input="updateSelect">
        <option v-if="preSelectedProp != undefined" disabled value="" selected>{{ preSelectedProp }}</option>
        <option v-else selected>Selecione uma opção</option>
        <template v-for="option in optionValues" :key="getSelectedValue(option)">
            <option :value="getSelectedValue(option)">{{ getSelectedLabel(option) }}</option>
        </template>
    </select>

</template>

<script>
import './styles.css'
export default {
    name: 'SelectField',
    props: {
        optionValues: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: String,
            default: null
        },
        valueProp: {
            type: String,
            default: 'value'
        },
        labelProp: {
            type: String,
            default: 'label'
        },
        preSelectedProp: {
            type: String,
            default: 'Selecione uma opção'
        }
    },
    methods: {
        updateSelect(event) {
            const selectedValue = (event.target).value;
            this.$emit('update:modelValue', selectedValue);
        },
        getSelectedValue(option) {
            return option[this.valueProp];
        },
        getSelectedLabel(option) {
            return option[this.labelProp]

        }
    }
}
</script>
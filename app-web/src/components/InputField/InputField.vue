<template>
    <label class="label">
        {{ label }}
        <input class="input-field-component" :type="type" :value="modelValue" :placeholder="placeholder"
            @input="updateInput">
    </label>
</template>

<script>
import "./styles.css"
export default {
    name: "InputField",
    props: {
        label: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        modelValue: {
            type: [String, Object],
            default: ""
        },
        placeholder: {
            type: String,
            default: "Informe o placeholder"
        }
    },
}
</script>
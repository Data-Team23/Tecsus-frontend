<template>
    <button @click="handleClick">{{ textButton }}</button>
</template>

<script setup>
import './styles.css'

const props = defineProps({
    textButton: {
        type: String,
        default: 'Enviar'
    },
    onClick: {
        type: Function,
        default: () => {}
    }
})

const handleClick = () => {
    props.onClick();
}
</script>
  
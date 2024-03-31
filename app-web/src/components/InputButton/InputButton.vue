<template>
    <button>{{ textButton }}</button>
</template>

<script>
import './styles.css'

export default {
    name: 'InputButton',
    props: {
        textButton: {
            type: String,
            default: 'Enviar'
        },
        onClick: {
            type: Function,
            default: () => {}
        }
    }
}
</script>
<template>
    <div>
        <table>
            <thead>
                <tr>
                    <!-- Loop pelas chaves do objeto e criando as colunas da tabela -->
                    <th v-for="(value, key) in dataObject" :key="key">{{ key }}</th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop pelos valores do objeto para preencher os dados da tabela -->
                <tr>
                    <td v-for="(value, key) in dataObject" :key="key">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import "./styles.css"
export default {
    name: 'Table',
    props: {
        dataObject: {
            type: Object,
            required: true
        }
    }
}
</script>

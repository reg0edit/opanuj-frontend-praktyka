<template>
    <label for="inputText">{{label}}</label>
    <input id="inputText" type="text" @input="setValue($event.target.value)" />
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: 'Wyszukaj'
    },
    setValue: {
        type: Function,
        required: true
    }
})
</script>

<style scoped>
label {
    margin: auto 4px;
}
</style>

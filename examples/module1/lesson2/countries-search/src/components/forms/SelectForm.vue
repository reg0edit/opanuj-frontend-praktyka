<template>
    <label :for="`f-${label}`">{{ label }}</label>
    <select :id="`f-${label}`" @input="setValue($event.target.value)">
        <option v-for="option in values" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    values: {
        type: Array,
        required: true
    },
    setValue: {
        type: Function,
        required: true
    }
})
</script>

<style scoped>
select {
    margin-right: 8px;
}

label {
    margin: auto 4px;
}
</style>

<template>
<h2>{{ title }}</h2>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "Wyszukiwarka krajów"
    }
})

</script>

<style scoped>
h2{
    margin: 8px auto;

}
</style>
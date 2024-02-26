<template>
    <div>
        <h3>{{ country.name }}</h3>
        <img :src="country.flagUrl" :alt="country.name.common" />
    </div>
</template>

<script setup>
defineProps({
    country: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 8px 0 #ccc;
    max-width: 250px;
}

img {
    width: 100%;
    max-width: 200px;
    margin: auto;
}
</style>

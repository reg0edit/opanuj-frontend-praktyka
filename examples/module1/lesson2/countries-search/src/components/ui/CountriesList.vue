<template>
    <div class="grid-parent">
        <CountryCard v-for="c in list" :key="c.ccn3" :country="c" />
    </div>
</template>

<script setup>
import CountryCard from './CountryCard.vue'

defineProps({
    list: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
.grid-parent {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>

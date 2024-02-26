<template>
    <div>
        <HeadTitle />
        <form>
            <SearchInput label="Wyszukaj" :set-value="setSearchVal" />
            <SelectForm label="Wyszukaj po" :values="SEARCH_BY_VALUES" :set-value="setSearchBy" />
            <SelectForm label="Sortuj po" :values="SORT_BY_VALUES" :set-value="setSortBy" />
        </form>
        <CountriesList :list="COUNTRIES" />
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { getApiData, sortCountries } from './services/utils'
import HeadTitle from './components/ui/HeadTitle.vue'
import SearchInput from './components/forms/SearchInput.vue'
import SelectForm from './components/forms/SelectForm.vue'
import CountriesList from './components/ui/CountriesList.vue'

const COUNTRIES = ref([])
let searchValue = ''
let searchBy = 'name'
let sortyBy = 'name'
const SEARCH_BY_VALUES = [
    { value: 'name', name: 'nazwa' },
    { value: 'capital', name: 'stolica' },
    { value: 'currency', name: 'waluta' }
]
const SORT_BY_VALUES = [
    { value: 'name', name: 'nazwa' },
    { value: 'population', name: 'populacja' }
]

async function setSearchVal(value) {
    searchValue = value
    COUNTRIES.value = await getApiData(searchValue, searchBy, sortyBy)
}

async function setSearchBy(value) {
    searchBy = value
    COUNTRIES.value = await getApiData(searchValue, searchBy, sortyBy)
}

function setSortBy(value) {
    sortyBy = value
    COUNTRIES.value = sortCountries(COUNTRIES.value, sortyBy)
}

onBeforeMount(async () => {
    COUNTRIES.value = await getApiData(searchValue, searchBy, sortyBy)
})
</script>

<style scoped>
div {
    flex-direction: column;
    display: flex;
}

form {
    margin: 16px auto;
}
</style>

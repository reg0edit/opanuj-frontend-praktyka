export const getApiData = async (searchValue, searchBy, sortyBy) => {
    let res = null
    if (searchValue === '') {
        res = await fetch('https://restcountries.com/v3.1/all')
    } else if (searchBy || searchValue) {
        res = await fetch(`https://restcountries.com/v3.1/${searchBy}/${searchValue}`)
    }
    if (res?.ok) {
        const ARR = await res.json()
        const SMALLER_ARR = ARR.map((country) => {
            return {
                name: country.name.common,
                population: country.population,
                flagUrl: country.flags.png
            }
        })
        return sortCountries(SMALLER_ARR, sortyBy)
    } else {
        return []
    }
}

export const sortCountries = (countries, sortKey) => {
    return countries.sort((a, b) => {
        if (a[sortKey] > b[sortKey]) {
            return 1
        }
        if (a[sortKey] < b[sortKey]) {
            return -1
        }
        return 0
    })
}

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of countries) {
        
    // }
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${country.flags.png}">
            <h1>${country.name.common}</h1>
            <h1>${country.capital}</h1>
        `
        countriesDiv.appendChild(div);
    });
}
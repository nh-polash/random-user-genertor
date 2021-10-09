const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of countries) {
        
    // }
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${country.name}</h2>
            <h5>Capital: ${country.capital}</h5>
            <button onclick="loadCountryByName('${country.name}')">
                Details
            </button>
        `
        countriesDiv.appendChild(div);
    });
}


const loadCountryByName = name => {
    // console.log(name)
    const url = `https://restcountries.com/v2/name/${name}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data));
}

const displayCountryDetails = country => {
    const countryNew = country[0];
    const card = document.getElementById('card');
    card.style.display = 'block';
    card.innerHTML = `
        <img src="${countryNew.flag}">
        <h1>Name: ${countryNew.name}</h1>
        <h4>Capital: ${countryNew.name}</h4>
        <p>Population: ${countryNew.population}</p>
        <p>Currency: ${countryNew.currencies[0].name}</p>
    `
}
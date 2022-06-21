export function countryСardTemplate({flags,name,capital,population,languages,}) {
    return `
        <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="100" />
        <h2 class="country-info__name">${name.official}</h2>
        <p class="country-info__capital">Capital: ${capital}</p>
        <p class="country-info__population">Population: ${population}</p>
        <p class="country-info__languages">Languages: ${Object.values(languages)}</p>
    `;}
  
  export function countryListTemplate(response) {
    return `
    <li class="country-list__item">
      <img class="country-list__flags" 
        src="${response.flags.svg}" 
        alt="${response.name.official}" width="30"
      />
      <h5 class="country-list__name">${response.name.official}</h5>
    </li>
    `;}
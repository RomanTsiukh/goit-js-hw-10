import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { countryСardTemplate, countryListTemplate } from './markupTemplate';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs = {
    inputEl: document.getElementById('search-box'),
    countryList: document.querySelector('ul.country-list'),
    countryInfo: document.querySelector('div.country-info'),
  };

refs.inputEl.addEventListener('input', 
  debounce (onInputCountry, DEBOUNCE_DELAY)
);

function onInputCountry() {
  const countryName = refs.inputEl.value.trim();

  fetchCountries(countryName)
    .then(responce => {

    if (responce.length <= 10) {
      const listMarkup = responce.map(
        country => countryListTemplate(country)
      );
      refs.countryList.innerHTML = listMarkup.join('');
      refs.countryInfo.innerHTML = '';
      }

    if (responce.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
    }

    if (responce.length === 1) {
      const markup = responce.map(country => countryСardTemplate(country));
      refs.countryInfo.innerHTML = markup.join('');
      refs.countryList.innerHTML = '';
    }

    })
    .catch(error => {
    Notify.failure ('Oops, there is no country with that name');
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
      return error;
    });
}
// Extract the country name from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('country');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const country = data[0];

        document.querySelector('.details-flag img').src = country.flags.png;
        document.querySelector('.text-grid h3').textContent = country.name.common;

        document.querySelector('.native-name').textContent = country.name.official;
        document.querySelector('.population').textContent = country.population;
        document.querySelector('.region').textContent = country.region;
        document.querySelector('.sub-region').textContent = country.subregion;
        document.querySelector('.capital').textContent = country.capital;
        document.querySelector('.tld').textContent = country.tld[0];
        document.querySelector('.languages').textContent = Object.values(country.languages).join(', ');

        const neighboringCountries = document.getElementById('neighboring-countries');
        neighboringCountries.innerHTML = '';
        if (country.borders && country.borders.length > 0) {
            country.borders.forEach(border => {
                const li = document.createElement('li');
                li.textContent = border;
                neighboringCountries.appendChild(li);
            });
        } else {
            neighboringCountries.innerHTML = '<li>I do not have any borders!</li>';
        }
    })
    .catch((error) => console.error("Error fetching country details:", error));

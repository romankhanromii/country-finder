
// const darkModeToggle = document.getElementById('darkModeToggle');

// darkModeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// fetch("https://restcountries.com/v3.1/all")
//     .then((response) => response.json())
//     .then((data) => {
//         updateUI(data)
//         }).catch((error)=>console.log("there is an error in fetching the data",error));
        
 

// async function getdatabyselect() {
//     let select = document.querySelector(".region-filter");
//     let selectedRegion = select.value;
//     console.log(selectedRegion)

//     try {
//         const response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
//         const data = await response.json();

//         console.log(data);
  
//         updateUI(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// document.querySelector(".country-search-input").addEventListener("input", handlesearch);

// async function handlesearch() {
//     const searchInput = document.querySelector(".country-search-input").value.trim();

//     try {
//         if (searchInput === "") {
  
//             const response = await fetch("https://restcountries.com/v3.1/all");
//             const data = await response.json();
//             updateUI(data);
//         } else {
      
//             const response = await fetch(`https://restcountries.com/v3.1/name/${searchInput}`);
//             const data = await response.json();
//             updateUI(data);
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }




// function updateUI(data) {
//     const cardsWrapper = document.querySelector(".cards-wrapper");
//     cardsWrapper.innerHTML = "";

//     data.forEach((country) => {
//         const markup = `
//             <div class="card-container" onclick="showCountryDetails('${country.name.common}')" >
//                 <div class="country-card-img">
//                     <img src="${country.flags.png}" alt="">
//                 </div>
//                 <div class="country-card-data">
//                     <h2 class="country-name">${country.name.common}</h2>
//                     <div class="country-data">
//                         <div class="population"><span>Population:</span> ${country.population}</div>
//                         <div class="region"><span>Region:</span> ${country.region}</div>
//                         <div class="capital"><span>Capital:</span> ${country.capital}</div>
//                     </div>
//                 </div>
//             </div>`;
//         cardsWrapper.innerHTML += markup; 
//     });
// }
//     function showCountryDetails(countryName) {
//         console.log("Country name received:", countryName); 
        
//         fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data); 
            
//                 const country = data[0];
//                 console.log(country)
                
//         console.log( document.querySelector('.details-flag img'))
//                 document.querySelector('.details-flag img').src = country.flags.png
//                 console.log( document.querySelector('.text-grid img'))
//                 document.querySelector('.text-grid h3').textContent = country.name.common;
            
//                 document.querySelector('.native-name').textContent = country.name.native.common;
            
//                 document.querySelector('.population').textContent = country.population;
            
//                 document.querySelector('.region').textContent = country.region;
        
//                 document.querySelector('.sub-region').textContent = country.subregion;
            
//                 document.querySelector('.capital').textContent = country.capital;
            
//                 document.querySelector('.tld').textContent = country.tld[0];
        
            
                
//                 document.querySelector('.languages').textContent = Object.values(country.languages).join(', ');

            
//                 const neighboringCountries = document.getElementById('neighboring-countries');
//                 neighboringCountries.innerHTML = '';
//                 if (country.borders && country.borders.length > 0) {
//                     country.borders.forEach(border => {
//                         const li = document.createElement('li');
//                         li.textContent = border;
//                         neighboringCountries.appendChild(li);
//                     });
//                 } else {
//                     neighboringCountries.innerHTML = '<li>I do not have any borders!</li>';
//                 }
//             })
//             .catch((error) => console.error("Error fetching country details:", error));
//     }
// index.js
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        updateUI(data)
    })
    .catch((error) => console.log("there is an error in fetching the data", error));
        
async function getdatabyselect() {
    let select = document.querySelector(".region-filter");
    let selectedRegion = select.value;

    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
        const data = await response.json();
  
        updateUI(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

document.querySelector(".country-search-input").addEventListener("input", handlesearch);

async function handlesearch() {
    const searchInput = document.querySelector(".country-search-input").value.trim();

    try {
        if (searchInput === "") {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            updateUI(data);
        } else {
            const response = await fetch(`https://restcountries.com/v3.1/name/${searchInput}`);
            const data = await response.json();
            updateUI(data);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function updateUI(data) {
    const cardsWrapper = document.querySelector(".cards-wrapper");
    cardsWrapper.innerHTML = "";

    data.forEach((country) => {
        const markup = `
            <div class="card-container" onclick="showCountryDetails('${country.name.common}')">
                <div class="country-card-img">
                    <img src="${country.flags.png}" alt="">
                </div>
                <div class="country-card-data">
                    <h2 class="country-name">${country.name.common}</h2>
                    <div class="country-data">
                        <div class="population"><span>Population:</span> ${country.population}</div>
                        <div class="region"><span>Region:</span> ${country.region}</div>
                        <div class="capital"><span>Capital:</span> ${country.capital}</div>
                    </div>
                </div>
            </div>`;
        cardsWrapper.innerHTML += markup; 
    });
}

function showCountryDetails(countryName) {
    console.log("Country name received:", countryName); 
    window.location.href = `countrydetial.html?country=${encodeURIComponent(countryName)}`;
}

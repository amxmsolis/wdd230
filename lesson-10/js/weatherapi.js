// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


/// b0f8553cf7734d56c5b1f0112382bbb7
/// 

const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=b0f8553cf7734d56c5b1f0112382bbb7`;

async function apiFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    const imageSrc=`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const imageDescription=weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imageSrc);
    weatherIcon.setAttribute('alt',`A ${imageDescription} icon is shown` );
    
    captionDesc.setAttribute('class', 'capitalizeClass');
    captionDesc.innerHTML = `${imageDescription}`;
  }
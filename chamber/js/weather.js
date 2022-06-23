const currentTempTitle = document.querySelector('#tempTitle');
const currentTemp = document.querySelector('#tempVar');
const currentSpeed = document.querySelector('#speedVar');
const currentWind = document.querySelector('#windVar');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');





const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=mexico,mx&units=imperial&appid=b0f8553cf7734d56c5b1f0112382bbb7`;

async function apiFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
    const imageSrc=`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const imageDescription=weatherData.weather[0].description;
    const speedVar = weatherData.wind.speed;
    const tempVar =weatherData.main.temp;
    let windVar;
    if (tempVar > 50) {
        windVar = "NA";
    } else {
        windVar = (35.74 + (0.6215 * tempVar)) - (35.75 * Math.pow(speedVar, 0.16)) + (0.4275 * tempVar * Math.pow(speedVar, 0.16));
        windVar = Math.round(windVar);
    }


    weatherIcon.setAttribute('src', imageSrc);
    weatherIcon.setAttribute('alt',`A ${imageDescription} icon is shown` );

    captionDesc.setAttribute('class', 'capitalizeClass');
    captionDesc.innerHTML = `${imageDescription}`;

    currentTempTitle.innerHTML = `${weatherData.name}`;
    currentTemp.innerHTML = `Temp: <strong>${weatherData.main.temp.toFixed(0)}</strong>°F `;
    currentSpeed.innerHTML = `Speed: <strong>${speedVar}</strong> mph `;
    currentWind.innerHTML = `Wind Chill: <strong>${windVar}</strong> `;


//document.querySelector("#speedVar").textContent = speedVar;
//document.querySelector("#windVar").textContent = windVar;


  }
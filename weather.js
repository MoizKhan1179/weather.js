
function weatherInfo(){




    let cityName = document.querySelector('#cityName').value
   
    console.log(cityName)
    
    
    axios.get(`http://api.weatherapi.com/v1/current.json?key=5cb162e3c91042b5bef121723230601&q="${cityName}"&days=5`)
.then(function (response) {
  // handle success
  console.log(response);
  document.querySelector('#name').innerHTML=`Country  ${response.data.location.country}`
  document.querySelector('#location').innerHTML=`Region  ${response.data.location.region}`
  document.querySelector('#currentTemp').innerHTML=`Temperature  ${response.data.current.temp_c}°C`
  document.querySelector('#tempF').innerHTML=`Temperature  ${response.data.current.temp_f}°F`
  document.querySelector('#humidity').innerHTML=`Humidity  ${response.data.current.humidity}`
  document.querySelector('#winDir').innerHTML=`Wind Direction  ${response.data.current.wind_dir}`
  document.querySelector('#high').innerHTML=`H  ${response.data.current.pressure_in}°C`
  document.querySelector('#low').innerHTML=`L ${response.data.current.pressure_mb}°C`
  document.querySelector('#img').src = `https${response.data.current.condition.icon}`
  document.querySelector('#condition').innerHTML=`Weather Condition:${response.data.current.condition.text}`
})

.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});}






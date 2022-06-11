//init weather object
const weather = new Weather;

//ui object
const ui = new UI;


const icon = document.querySelector('.fa');

// console.log(icon);

icon.addEventListener('click',function(){

  const Input = document.getElementById('search-input');

  
  const cityName = Input.value;

  

  if(cityName == ""){
    ui.alert("Enter City Name");
  }else{
    const weatherInfo = document.querySelector('.weather-info');
    const loader = document.querySelector('.loader-hide');
  if(cityName!=''){
    //make http call
    weather.getInfo(cityName)
    .then(data => {
      
      if(data.cityInfo.message==="city not found"){
        
        console.log(data);
        ui.alert("City Not Found");
        
      }else{
        

        let temp = parseInt(data.cityInfo.main.temp-273);
        let look= data.cityInfo.weather[0].main;
        let icon = data.cityInfo.weather[0].icon;
        let humid = data.cityInfo.main.humidity;
        let wind = (data.cityInfo.wind.speed * 3.6).toFixed(3);


        ui.setUI(cityName,temp,icon,humid,wind,look);


        setTimeout(() => {
          loader.className = 'loader-hide';
          weatherInfo.style.display = 'block';
        }, 2000);
        loader.className = 'loader';
        weatherInfo.style.display = 'none';
      }
      
    })
  }
  
  }

})

  

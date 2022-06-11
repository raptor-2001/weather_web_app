class UI{
  

  setUI(cityName,temp,icon,humid,wind,look){ 
    
    //elements

    // city name
    let c = document.querySelector('.city');
    c.textContent = cityName;

    // temperature
    let t = document.querySelector('.temp');
    t.textContent = `${temp}°C`;


    // look
    let l = document.querySelector('.icon-input');
    l.textContent = `${look}`;
    
    //icon
    let i = document.querySelector('.icon');
    i.attributes[0].value=` http://openweathermap.org/img/wn/${icon}.png`;

    //humidity
    let h = document.querySelector('.humidity');
    h.textContent = `${humid}%`;

    //wind
    let w = document.querySelector('.wind');
    w.textContent = `${wind} km/h`;

  }

  alert(message){

    const weatherInfo = document.querySelector('.weather-info');
    const loader = document.querySelector('.loader-hide');
  setTimeout(() => {
    loader.className = 'loader-hide';
  }, 2000);
  loader.className = 'loader';
  weatherInfo.style.display = 'none';
  loader.textContent = message;
 }
}

class Weather{

  constructor(){
    this.api_key = '5f294d22fd2f20fb625590b07ec6da5d';
  }

  async getInfo(cityName){

    const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.api_key}`);

    

    let cityInfo = await cityResponse.json();

    console.log(cityInfo);
    return{
      cityInfo
    }
  }
}
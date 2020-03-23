const apiKey = "MOrUW0sIdnmBJ0B0ZQPyoAqqmy2oFSh6TLF7QLGB";

const getWeather = async()=>{
    const base = 'https://api.nasa.gov/insight_weather/';
    const query = `?api_key=${apiKey}&feedtype=json&ver=1.0`;
    const response = await fetch(base+query);
    const data =await response.json();
    return data;
}

const weather = getWeather()
.then(data => GetWeatherData(data))
.catch(err => console.log(err));



var tempratures = [];
var date = [];
var season = [];
var sols = [];
 const GetWeatherData = (data =>{
    arrayOfSols = data.sol_keys;

    arrayOfSols.forEach(element => {
        sols.push(element);
         tempratures.push(data[element].AT.av);
         date.push(((data[element].First_UTC)));
         season.push(data[element].Season);
    });
    for (let index = 0; index < date.length; index++) {
        date[index] = String(date[index]).substring(0,String(date[index]).indexOf("T"));
    }
    for (let i = 7; i > 0; i--) {
        const weather_card = document.querySelector(`#weather_card_${8-i}`);
        weather_card.innerHTML = `
        <h3>Sol- ${(sols[i-1])}</h3>
        <p>${(date[i-1])}</p>
        <p>${parseInt(tempratures[i-1])}&#8457 | ${parseInt((tempratures[i-1]-32)*5/9)}&#8451</p>
        `
     }
     const weather_title = document.querySelector("#weather_title");
     weather_title.innerHTML = `${season[0]}`

 });









 





const apikey="d93ba77a990cbb71c59d88459b0db044";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function checkweather(city){
const response =await fetch(apiurl+city+`&appid=${apikey}`);
var data =await response.json();
console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
document.querySelector(".wind").innerHTML=data.wind.speed+"mph";
if(data.weather[0].main=="Clouds"){
weathericon.src="images/cloudy.png";
}
else if(data.weather[0].main=="Clear"){
weathericon.src="images/cloudy.png";
}
else if(data.weather[0].main=="Rain"){
weathericon.src="images/rainy.png";
}
else if(data.weather[0].main=="Drizzle"){
weathericon.src="images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
weathericon.src="images/fog.png";
}
} 
searchbtn.addEventListener("click",()=>{
checkweather(searchbox.value);
})
checkweather();
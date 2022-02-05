let Weather = {
   /* "apiKey": "e720fed13bfbbd4ee688a25453d8e00a",*/
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=e720fed13bfbbd4ee688a25453d8e00a"
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in" + " " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon+ ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" +" "+ humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed"+ " " + speed +"km/hr";
        document.querySelector(".weather").classList.remove("loading");
    },
    search : function (){
       this.fetchWeather(document.querySelector(".searchbar").value);
    }

};
document.querySelector( ".button").addEventListener("click",function(){
    Weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        Weather.search();
    }
});
Weather.fetchWeather("Denver");
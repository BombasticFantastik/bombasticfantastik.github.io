const apiKey='c27ff5019fdc192d3cfc8bc7dcd8a08f'

const weather_main_smile = document.getElementById('weather_main_smile');
const weather_main = document.getElementById('weather_main');
const weather_temp = document.getElementById('weather_temp');

async function getWeather(){
    const city='Kuragino'
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
    console.log(url)
    try {
        const response= await fetch(url)
        if (!response.ok){
            console.log('ГОРОДА НЕТ')
        }
        const data = await response.json()
        console.log(data)

        //погода и смайл
        if (data.weather[0].main=="Clouds"){
            main="Clouds"
            smile="☁️"
        }
        else if (data.weather[0].main=="Clear"){
            main="CLear"
            smile="☀️"
        }
        else if (data.weather[0].main=="Rain"){
            main="Rain"
            smile="🌧️"

        }
        else if (data.weather[0].main=="Thunderstorm"){
            main="Thunderstorm"
            smile="⛈️"
        }
        else if (data.weather[0].main=="Snow"){
            main="Snow"
            smile="🌨️"
        }
        
        
        //температура
        if (data.main.temp<-15){
            temp=data.main.temp+"🥶"
        }
        else if (data.main.temp<0){
            temp=data.main.temp+"❄️"
        }
        else if (data.main.temp<15){
            temp=data.main.temp+"♨️"
        }
        else if (data.main.temp<0){
            temp=data.main.temp+"🥵"
        }
        
        weather_main_smile.textContent=smile
        weather_main.textContent=main
        weather_temp.textContent=temp
        
    }
    catch (error){
        console.log(error)
    }+"❄️"+"☁️"
}

getWeather()
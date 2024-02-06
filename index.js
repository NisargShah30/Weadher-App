const apikey = "e27c84d1c6e0232921dc29498e28f3f9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weadhericon = document.querySelector(".weadher-icon")


async function checkweadher(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weadher").style.display = "none";
    } else {


        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weadhericon.src = "./clouds.png"

        }
        else if (data.weather[0].main == "clear") {
            weadhericon.src = "./clear.png"
        }

        else if (data.weather[0].main == "rain") {
            weadhericon.src = "./rain.png"
        }

        else if (data.weather[0].main == "drizzle") {
            weadhericon.src = "./drizzle.png"
        }

        else if (data.weather[0].main == "mist") {
            weadhericon.src = "./mist.png"
        }

        document.querySelector(".weadher").style.display = "block";
        document.querySelector(".error").style.display = "none";
        


    }

}
searchbtn.addEventListener("click", () => {
    checkweadher(searchbox.value);
})
checkweadher();
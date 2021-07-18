const param = {
    url: "https://api.openweathermap.org/data/2.5/",
    appid: "6bedfbac745523ecd7a4bd9dfcc6f496"
  };
  function getWeather() {
    const cityId = document.querySelector("#city").value;
    console.log(cityId);
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
      // fetch('http://api.openweathermap.org/data/2.5/weather?id=1523232&appid=6bedfbac745523ecd7a4bd9dfcc6f496')
      .then((weather) => {
        return weather.json();
      })
      .then((data) => showWeather(data));
  }
  
  function showWeather(data) {
    console.log(data);
    // здесь вы выводите на страницу
    document.querySelector(".package-name").textContent = data.name;
    document.querySelector(".price").innerHTML =
      Math.round(data.main.temp) + "&deg;";
    document.querySelector(".disclaimer").textContent =
      data.weather[0]["description"];
    // https://openweathermap.org/img/wn/02d@2x.png
    document.querySelector(
      ".features li"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  }
  
  getWeather();
  document.querySelector("#city").onchange = getWeather;
  function getElelms() {
    let arr = document.querySelectorAll(".package");
    console.log(arr);
  }
  getElelms();
  
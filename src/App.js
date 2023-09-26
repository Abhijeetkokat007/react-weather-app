import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import clear from "./Component/Images/clear.png";
import cloud from "./Component/Images/clouds.png";
import drizzle from "./Component/Images/drizzle.png";
import humidity from "./Component/Images/humidity.png";
import mist from "./Component/Images/mist.png";
import rain from "./Component/Images/rain.png";
import search from "./Component/Images/search.png";
import snow from "./Component/Images/snow.png";
import wind from "./Component/Images/wind.png";
import { useActionData } from "react-router-dom";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("pune");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [wicon, setWicon] = useState(cloud);

  async function loadWeathertheData() {
    let response = "";
    try {
      response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a98a72af7abee04e9ac0e54dc987e8b9 `
      );

      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadWeathertheData();
  }, []);

  useEffect(() => {
    loadWeathertheData();
  }, [city]);

  useEffect(() => {
    setWeatherDescription(`${weatherData?.weather?.[0]?.main} 
  (${weatherData?.weather?.[0]?.description}) `);
  }, [weatherData]);

  useEffect(() => {
    if (weatherDescription === "Clouds") {
      setWicon(cloud);
    } else if (weatherData?.weather?.[0]?.main === "Clear") {
      setWicon(clear);
    } else if (weatherData?.weather?.[0]?.main === "Rain") {
      setWicon(rain);
    } else if (weatherData?.weather?.[0]?.main === "Drizzle") {
      setWicon(drizzle);
    } else if (weatherData?.weather?.[0]?.main === "Mist") {
      setWicon(mist);
    } else if (weatherData?.weather?.[0]?.main === "Humidity") {
      setWicon(humidity);
    } else if (weatherData?.weather?.[0]?.main === "Snow") {
      setWicon(snow);
    } else if (weatherData?.weather?.[0]?.main === "Mist") {
      setWicon(mist);
    } else if (weatherData?.weather?.[0]?.main === "Search") {
      setWicon(search);
    } else if (weatherData?.weather?.[0]?.main === "Wind") {
      setWicon(wind);
    }
  }, [weatherDescription, weatherData]);

  return (
    <>
      <div className="container">
        <h1 className="app-name">
          {" "}
          weather app <br></br>
        
        </h1>
        <div className="text-center">
          <input
            className="search-input"
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        {/* <p id='not-found'> ????????</p> */}

        <div className="d-flex">
          <p className="city-name"> {weatherData?.name}</p>
          <img src={wicon} alt="asd" />
          <p className="temp">
            {" "}
            {(weatherData?.main?.temp - 273).toFixed(2)} °C
          </p>
        </div>

        <div className="d-flex">
          <div className="visi-main">
            <p>
              <span className="visi-span">{weatherData?.visibility}</span>{" "}
              <br></br>meters <br></br> <br></br>Visibility
            </p>
          </div>

          

          <div className="visi-main">
            <p>
              {" "}
              <span className="visi-span">
                {weatherData?.main?.humidity} %
              </span>{" "}
              <br></br>
              <br></br>
              <br></br> Humidity
            </p>
          </div>

          <div className="visi-main">
            <p>
              {" "}
              <span className="visi-span">{weatherData?.wind?.speed}</span>{" "}
              <br></br>km/h<br></br>
              <br></br>Wind Speed
            </p>
          </div>

          <div className="visi-main">
            <p>
              {" "}
              <span className="visi-span">
                {(weatherData?.main?.temp_max - 273).toFixed(2)}
              </span>{" "}
              <br></br> °C<br></br>
              <br></br>max. Temp
            </p>
          </div>

          <div className="visi-main">
            <p>
              {" "}
              <span className="visi-span">
                {(weatherData?.main?.temp_min - 273).toFixed(2)}
              </span>{" "}
              <br></br> °C<br></br>
              <br></br>max Temp
            </p>
          </div>

          <div className="visi-main">
            <p>
              {" "}
              <span className="visi-span">{weatherDescription}</span> <br></br>
              <br></br>
              <br></br>Description
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

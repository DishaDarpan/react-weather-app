import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      Weather
      <div class="weather-app">
        <div class="date"></div>
        <div class="time"></div>

        <form id="search-form">
          <input
            type="text"
            placeholder="Enter a city"
            autocomplete="off"
            id="search-text-input"
          />

          <input
            class="btn btn-outline-dark search-btn"
            type="submit"
            value="Search"
          />
        </form>

        <h3>
          <div class="current">
            <span class="city"></span>,<span class="country"></span>
            <div id="description"></div>
            <span class="icon">
              <img src="" alt="Clear" id="icon" />
            </span>
            <span class="current-temp"></span>
            <div class="feels">Feels like</div>
          </div>
        </h3>

        <div class="conditions">
          <div class="humidity">Humidity: 40%</div>
          <div class="wind">Wind: 19 km/h</div>
        </div>

        <div class="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}

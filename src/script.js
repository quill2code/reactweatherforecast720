document.querySelector("#search-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const city = document.querySelector("#city-input").value;
  getWeather(city);
});

function getWeather(city) {
  const apiKey = "YOUR_API_KEY_HERE"; // Replace with your SheCodes API key
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#city-name").textContent = data.city;
      document.querySelector("#temperature").textContent = `Temperature: ${Math.round(data.temperature.current)}°C`;
      document.querySelector("#description").textContent = `Conditions: ${data.condition.description}`;
    })
    .catch(error => {
      document.querySelector("#city-name").textContent = "City not found.";
      document.querySelector("#temperature").textContent = "";
      document.querySelector("#description").textContent = "";
      console.error(error);
    });
}

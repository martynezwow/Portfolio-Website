async function getWeather() {
  const apiKey = "325c6dc0777d9d08e484a991823ad392"; // Cseréld ki a saját kulcsodra!
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hu&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("A város nem található.");
    const data = await response.json();

    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Hőmérséklet: ${data.main.temp}°C</p>
      <p>💧 Páratartalom: ${data.main.humidity}%</p>
      <p>🌥️ Időjárás: ${data.weather[0].description}</p>
    `;
    document.getElementById("weatherData").innerHTML = weatherHtml;
  } catch (error) {
    document.getElementById("weatherData").innerHTML = `<p>${error.message}</p>`;
  }
}

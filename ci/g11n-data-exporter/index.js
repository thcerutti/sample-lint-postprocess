const { getWeather } = require('@resultadosdigitais/weather-sample-lib')

if (!getWeather) {
  console.error('no lib available')
  return
}
const info = {
  lat: -27.6,
  long: -48.55,
}
getWeather(info.lat, info.long).then((data) => console.log(data))

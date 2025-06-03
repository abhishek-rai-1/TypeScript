// let's say we are building a weather app and we want to define a set of possible weather conditions like "sunny", "cloudy", "rainy", "snowy" we should define an enum like this:

// enum WeatherConditions {
//   Sunny,
//   Cloudy,
//   Rainy,
//   Snowy,
// }

enum WeatherConditions {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

// weatherconditions is the name of the enum, and each of the values is assigned an automatic numerical value starting form 0.

const currentWeather = WeatherConditions.Sunny;
console.log(currentWeather);

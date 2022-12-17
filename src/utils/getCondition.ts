import { StaticImageData } from 'next/image'
import Clear from '../assets/Clear.png'
import Hail from '../assets/Hail.png'
import HeavyCloud from '../assets/HeavyCloud.png'
import HeavyRain from '../assets/HeavyRain.png'
import LightCloud from '../assets/LightCloud.png'
import LightRain from '../assets/LightRain.png'
import Shower from '../assets/Shower.png'
import Sleet from '../assets/Sleet.png'
import Snow from '../assets/Snow.png'
import Thunderstorm from '../assets/Thunderstorm.png'

export interface Condition {
  code: number;
  day?: string;
  night?: string;
  icon: StaticImageData;
}

export const conditions: Condition[] =
[
    {
      code: 1000,
      day: "Sunny",
      night: "Clear",
      icon: Clear
    },
    {
      code: 1003,
      day: "Partly cloudy",
      night: "Partly cloudy",
      icon: LightCloud
    },
    {
      code: 1006,
      day: "Cloudy",
      night: "Cloudy",
      icon: HeavyCloud
    },
    {
      code: 1009,
      day: "Overcast",
      night: "Overcast",
      icon: LightCloud
    },
    {
      code: 1030,
      day: "Mist",
      night: "Mist",
      icon: HeavyCloud
    },
    {
      code: 1063,
      day: "Patchy rain possible",
      night: "Patchy rain possible",
      icon: Shower
    },
    {
      code: 1066,
      day: "Patchy snow possible",
      night: "Patchy snow possible",
      icon: Snow
    },
    {
      code: 1069,
      day: "Patchy sleet possible",
      night: "Patchy sleet possible",
      icon: Sleet
    },
    {
      code: 1072,
      day: "Patchy freezing drizzle possible",
      night: "Patchy freezing drizzle possible",
      icon: Hail
    },
    {
      code: 1087,
      day: "Thundery outbreaks possible",
      night: "Thundery outbreaks possible",
      icon: Thunderstorm
    },
    {
      code: 1114,
      day: "Blowing snow",
      night: "Blowing snow",
      icon: Snow
    },
    {
      code: 1117,
      day: "Blizzard",
      night: "Blizzard",
      icon: Snow
    },
    {
      code: 1135,
      day: "Fog",
      night: "Fog",
      icon: HeavyCloud
    },
    {
      code: 1147,
      day: "Freezing fog",
      night: "Freezing fog",
      icon: Hail
    },
    {
      code: 1150,
      day: "Patchy light drizzle",
      night: "Patchy light drizzle",
      icon: LightRain
    },
    {
      code: 1153,
      day: "Light drizzle",
      night: "Light drizzle",
      icon: LightRain
    },
    {
      code: 1168,
      day: "Freezing drizzle",
      night: "Freezing drizzle",
      icon: Sleet
    },
    {
      code: 1171,
      day: "Heavy freezing drizzle",
      night: "Heavy freezing drizzle",
      icon: Hail
    },
    {
      code: 1180,
      day: "Patchy light rain",
      night: "Patchy light rain",
      icon: Shower
    },
    {
      code: 1183,
      day: "Light rain",
      night: "Light rain",
      icon: LightRain
    },
    {
      code: 1186,
      day: "Moderate rain at times",
      night: "Moderate rain at times",
      icon: LightRain
    },
    {
      code: 1189,
      day: "Moderate rain",
      night: "Moderate rain",
      icon: HeavyRain
    },
    {
      code: 1192,
      day: "Heavy rain at times",
      night: "Heavy rain at times",
      icon: HeavyRain
    },
    {
      code: 1195,
      day: "Heavy rain",
      night: "Heavy rain",
      icon: HeavyRain
    },
    {
      code: 1198,
      day: "Light freezing rain",
      night: "Light freezing rain",
      icon: Snow
    },
    {
      code: 1201,
      day: "Moderate or heavy freezing rain",
      night: "Moderate or heavy freezing rain",
      icon: Snow
    },
    {
      code: 1204,
      day: "Light sleet",
      night: "Light sleet",
      icon: Sleet
    },
    {
      code: 1207,
      day: "Moderate or heavy sleet",
      night: "Moderate or heavy sleet",
      icon: Sleet
    },
    {
      code: 1210,
      day: "Patchy light snow",
      night: "Patchy light snow",
      icon: Snow
    },
    {
      code: 1213,
      day: "Light snow",
      night: "Light snow",
      icon: Snow
    },
    {
      code: 1216,
      day: "Patchy moderate snow",
      night: "Patchy moderate snow",
      icon: Snow
    },
    {
      code: 1219,
      day: "Moderate snow",
      night: "Moderate snow",
      icon: Snow
    },
    {
      code: 1222,
      day: "Patchy heavy snow",
      night: "Patchy heavy snow",
      icon: Snow
    },
    {
      code: 1225,
      day: "Heavy snow",
      night: "Heavy snow",
      icon: Snow
    },
    {
      code: 1237,
      day: "Ice pellets",
      night: "Ice pellets",
      icon: Snow
    },
    {
      code: 1240,
      day: "Light rain shower",
      night: "Light rain shower",
      icon: Shower
    },
    {
      code: 1243,
      day: "Moderate or heavy rain shower",
      night: "Moderate or heavy rain shower",
      icon: Shower
    },
    {
      code: 1246,
      day: "Torrential rain shower",
      night: "Torrential rain shower",
      icon: Shower
    },
    {
      code: 1249,
      day: "Light sleet showers",
      night: "Light sleet showers",
      icon: Sleet
    },
    {
      code: 1252,
      day: "Moderate or heavy sleet showers",
      night: "Moderate or heavy sleet showers",
      icon: Sleet
    },
    {
      code: 1255,
      day: "Light snow showers",
      night: "Light snow showers",
      icon: Snow
    },
    {
      code: 1258,
      day: "Moderate or heavy snow showers",
      night: "Moderate or heavy snow showers",
      icon: Snow
    },
    {
      code: 1261,
      day: "Light showers of ice pellets",
      night: "Light showers of ice pellets",
      icon: Snow
    },
    {
      code: 1264,
      day: "Moderate or heavy showers of ice pellets",
      night: "Moderate or heavy showers of ice pellets",
      icon: Snow
    },
    {
      code: 1273,
      day: "Patchy light rain with thunder",
      night: "Patchy light rain with thunder",
      icon: Thunderstorm
    },
    {
      code: 1276,
      day: "Moderate or heavy rain with thunder",
      night: "Moderate or heavy rain with thunder",
      icon: Thunderstorm
    },
    {
      code: 1279,
      day: "Patchy light snow with thunder",
      night: "Patchy light snow with thunder",
      icon: Snow
    },
    {
      code: 1282,
      day: "Moderate or heavy snow with thunder",
      night: "Moderate or heavy snow with thunder",
      icon: Snow
    }
  ]

  export const getCondition = (code: number) => {
    const result = conditions.filter(condition => condition.code === code);
    return result[0].icon.src;
  }

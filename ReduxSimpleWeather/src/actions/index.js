const API_KEY = '6efb747b001c9056580278650d989c41';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    return {
        type: 'FETCH_WEATHER'
    };
 }
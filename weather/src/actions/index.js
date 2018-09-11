import axios from 'axios'

const API_KEY = 'c21f14d792c4c86ada60539de02737bf'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('REquest:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

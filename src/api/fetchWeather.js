import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '06d5088fc2cc31868e44f581ab27eaf6';


export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query, 
            units: 'metric', 
            APPID: API_KEY,
        }
    });

    return data;
}
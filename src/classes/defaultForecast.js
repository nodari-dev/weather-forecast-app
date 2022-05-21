import {WEEK_LIST} from "../contants";

export default class DefaultForecast {
    constructor(arr) {
        this.range = DefaultForecast.#getTempRange(arr);
        this.status = DefaultForecast.#getStatus(arr);
        this.day = DefaultForecast.#getWeekDay(arr);
    }

    static #getTempRange(arr) {
        let minArr = [];
        let maxArr = [];
        for (let i = 0; i < arr.length; i++) {
            minArr.push(arr[i].main.temp_min);
            maxArr.push(arr[i].main.temp_max);
        }

        return {min: Math.round(Math.min(...minArr)), max: Math.round(Math.max(...maxArr))}
    }

    static #getStatus(arr) {
        // if (arr.length > 1) {
        //     let res = arr.filter(element => element.dt_txt.includes(DEFAULT_DAY_TIME));
        //     return res[0].weather[0].main.toLowerCase();
        //
        // } else {
        //     return arr[0].weather[0].main.toLowerCase();
        // }
        return arr[0].weather[0].main.toLowerCase();

    }

    static #getWeekDay(arr){
        return WEEK_LIST[new Date(arr[0].dt_txt).getDay()];
    }
}
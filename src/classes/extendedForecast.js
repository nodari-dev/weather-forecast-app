import DefaultForecast from "./defaultForecast";

export default class ExtendedForecast extends DefaultForecast{
    constructor(arr) {
        super(arr);
        this._now = arr[0];

        this.temp = Math.round(this._now.main.temp);
        this.wind = this._now.wind.speed;
        this.humidity = this._now.main.humidity;
        this.description = this._now.weather[0].description;
    }
}

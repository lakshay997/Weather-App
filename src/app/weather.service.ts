import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://api.openweathermap.org/data/2.5/weather';
apikey = 'cd62dd120110df487e2bff8d729da8a5';
  constructor(private http: HttpClient) { }
  
  getDataByname(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.apikey)
    return this.http.get(this.url, {params});
  }
}

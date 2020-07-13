import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
weather;
weatherName:string; 
shows: boolean = false;
result1:boolean = false;
result2:boolean = false;
result3:boolean = false;
result4:boolean = false;
result5:boolean = false;
result6:boolean = false;
result7:boolean = false;
result8:boolean = false;
result9:boolean = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getCity1(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result1=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result1 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    }
    )
  }
  getCity2(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result2=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result2 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }
  getCity3(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result3=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result3 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }
  getCity4(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result4=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result4 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }
  getCity5(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result5=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result5 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }
  getCity6(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result6=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result6 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }
  getCity7(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result7=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result7 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }
  getCity8(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result8=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result8 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }
  getCity9(city){
    if (city === '') {
      alert("City must be filled out");
      return this.result9=false;
    }
    this.weatherService.getDataByname(city).subscribe(data => {
      this.weather = data;
      this.result9 = true;
    },
    (err)=>{
      if (err.error.cod == '404') {
        alert("City not found!! Try again");
        return this.result1=false;
      }
    })
  }

  show() {
    this.shows= true;
  }
}

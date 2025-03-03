import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  weatherData = {
    country: 'Georgia',
    city: 'tbilisi',
    monday: {
      today: true,
      temp: 30,
      vibe: 'bright',
      date: 'MON 08-23'
    },
    tuesday: {
      today: false,
      temp: 27,
      vibe: 'cloudy',
      date: 'MON 08-23'
    },
    wednesday: {
      today: false,
      temp: 28,
      vibe: 'light rain',
      date: 'MON 08-23'
    },
    thursday: {
      today: false,
      temp: 29,
      vibe: 'chilly',
      date: 'MON 08-23'
    },
    friday: {
      today: false,
      temp: 24,
      vibe: 'heavy rain, cool',
      date: 'MON 08-23'
    }
  }


getTodaysInfo(){
    if (this.weatherData.tuesday.temp)
      return this.weatherData.tuesday

    else if (this.weatherData.wednesday.temp)
      return this.weatherData.wednesday

    else if (this.weatherData.thursday.temp)
      return this.weatherData.thursday

    else if (this.weatherData.friday.temp)
      return this.weatherData.friday

    else
      return this.weatherData.monday
  }

getTime(){
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  if (minutes < 10)
    return `${new Date().getHours()}:0${new Date().getMinutes()}`

  return `${new Date().getHours()}:${new Date().getMinutes()}`
}
}

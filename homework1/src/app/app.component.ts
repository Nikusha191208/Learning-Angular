import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  country = 'Georgia'
  city = 'Tbilisi'
  date = 'February 27'

  temperature = 23
  nextFormat = "Fahrenheit"

  lightMode = true
  backgroundColor = 'lightgray'
  headerColor = 'black'
  headerTextColor = 'white'

  getTemperatureFahrenheit() {
    if (this.nextFormat == "Fahrenheit") {
      this.nextFormat = "Celcius"
      this.temperature = Math.round((this.temperature * 9/5 + 32) * 10) / 10
    } else {
      this.nextFormat = "Fahrenheit"
      this.temperature = Math.round(((this.temperature - 32) * 5/9) * 10) / 10
    }
  }

  switchMode() {
    this.lightMode = !this.lightMode
    this.backgroundColor = this.lightMode ? "lightgray" : "darkgray"
    this.headerColor = this.lightMode ? "black" : "white"
    this.headerTextColor = this.lightMode ? "white" : "black"
  }
}

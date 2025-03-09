import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  firstName?:string
  lastName?:string
  gmail?:string
  password?:string
  contact?:number

  placeholder1 = "First Name"
  placeholder2 = "Last Name"
  placeholder3 = "Gmail"
  placeholder4 = "Contact"
  placeholder5 = "Password"


  cardDisplay = false

  showCard(){
    this.cardDisplay = !this.cardDisplay
  }

}

import { Component } from '@angular/core';
import { Student } from '../models/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {



  student: Student = {
    name: '',
    age: 0,
    grade: 0,
    subjects: '',
    isEnrolled: false,
    address: {
      street: '',
      city: '',
      zip: ''
    }
  };

  showData(){
    
  }
}

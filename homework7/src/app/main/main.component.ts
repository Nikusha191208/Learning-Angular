import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../models/Student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  student: Student = {
    checked: false,
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

  students: Student[] = []

  resetStudent() {
    this.student = {
      checked: false,
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
    }
  }

  addCard() {
    const newStudent: Student = { ...this.student }
    this.students.push(newStudent)
    this.resetStudent()
  }

  removeCard(index: number) {
    this.students.splice(index, 1)
  }

  clear() {
    this.resetStudent()
  }

  editCard(index: number) {
    this.student = { ...this.students[index] }
    this.removeCard(index)
  }

  removeChecked(){
    this.students = this.students.filter(student => !student.checked)
  }
}

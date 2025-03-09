import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  author = 'Nikoloz Lortkipanidze'
  description = 'Fill The Form and Create Your Own Card!'
}

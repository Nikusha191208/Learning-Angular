import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { DisplayDataComponent } from '../display-data/display-data.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormComponent, DisplayDataComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

import { Component, Input,  } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ FontAwesomeModule ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss', 
})
export class InputComponent {
@Input() icon! : IconProp;
@Input() placeholder! : string;
}

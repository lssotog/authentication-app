import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ FontAwesomeModule ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class ButtonComponent {
  @Input() icon! : IconProp;
}

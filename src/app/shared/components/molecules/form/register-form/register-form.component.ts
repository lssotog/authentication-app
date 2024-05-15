import { Component, Input } from '@angular/core';
import { InputComponent } from '../../../atoms/input/input.component';
import { ButtonComponent } from '../../../atoms/button/button.component';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  @Input() placeholder!:string;
}

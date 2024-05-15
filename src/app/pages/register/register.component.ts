import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SharedModule } from '../../shared/common/shared.module';
import { RegisterFormComponent } from '../../shared/components/molecules/form/register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink, 
    RegisterFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}

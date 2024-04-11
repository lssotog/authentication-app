import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SharedModule } from '../../shared/common/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { faLock, faG,  faEnvelope, faX, faF } from '@fortawesome/free-solid-svg-icons';
import { copyText } from '../../shared/utils/constants/copy-text-constants';
import { SharedModule } from '../../shared/common/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink, 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faGoogle = faG;
  copyText = copyText;
  faX = faX;
  faF = faF;
}

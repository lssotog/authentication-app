import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faG,  faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
  faGoogle = faG;
  copyText = copyText;
  // faFacebook = faFacebook;
  // faTwitter = faTwitter;
  // faGithub = faGithub;
}

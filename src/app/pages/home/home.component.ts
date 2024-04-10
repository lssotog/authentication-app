import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faG,  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { copyText } from '../../shared/utils/constants/copy-text-constants';
import { SharedModule } from '../../shared/common/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faEnvelope = faEnvelope;
  faGoogle = faG;
  copyText = copyText;
  // faFacebook = faFacebook;
  // faTwitter = faTwitter;
  // faGithub = faGithub;
}

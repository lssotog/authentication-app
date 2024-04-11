import { Component } from '@angular/core';
import { faG,  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { copyText } from '../../shared/utils/constants/copy-text-constants';
@Component({
  selector: 'app-home',
  standalone: false,
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

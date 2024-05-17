import { Component } from '@angular/core';
import { faLock, faG,  faEnvelope, faX, faF } from '@fortawesome/free-solid-svg-icons';
import { copyText } from '../../shared/utils/constants/copy-text-constants';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faGoogle = faG;
  copyText = copyText;
  faX = faX;
  faF = faF;
}

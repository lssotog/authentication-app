import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faG,  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AuthorSignComponent } from '../components/author-sign/author-sign.component';
import { copyText } from '../utils/constants/copy-text-constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavBarComponent, 
    HeaderComponent, 
    InputComponent, 
    ButtonComponent,
    FooterComponent, 
    AuthorSignComponent,
    RouterLink
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

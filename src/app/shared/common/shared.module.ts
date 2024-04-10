import { NgModule } from "@angular/core";
import { AuthorSignComponent } from "../components/author-sign/author-sign.component";
import { ButtonComponent } from "../components/button/button.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { InputComponent } from "../components/input/input.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";

@NgModule({
  imports:[
    AuthorSignComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    InputComponent,
    NavBarComponent
  ],
  exports: [
    AuthorSignComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    InputComponent,
    NavBarComponent
  ],
  providers: [],
})

export class SharedModule {}
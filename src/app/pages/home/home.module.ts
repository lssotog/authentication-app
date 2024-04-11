import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SharedModule } from "../../shared/common/shared.module";

@NgModule({
  imports: [
    RouterLink,
    HomeRoutingModule,
    SharedModule    
  ],
  exports: [],
  declarations: [HomeComponent], providers: [],
})

export class HomeModule { }

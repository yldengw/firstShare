import { JwtService } from './service/jwt.service';
import { ShowAuthedDirective } from './directive/show-authed.directive';
import { UserLoginComponent } from './../user/user-login/user-login.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [HeaderComponent, UserLoginComponent, ShowAuthedDirective],
  exports: [
    HeaderComponent, UserLoginComponent, ShowAuthedDirective
  ],
  providers: [JwtService, UserService]
})
export class SharedModule { }

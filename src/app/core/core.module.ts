import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, LayoutComponent, UserComponent],
  exports: [FooterComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}

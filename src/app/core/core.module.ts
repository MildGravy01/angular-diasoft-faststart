import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent],
  imports: [CommonModule],
})
export class CoreModule {}

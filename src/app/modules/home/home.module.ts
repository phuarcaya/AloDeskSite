import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeIntroComponent } from './components/home-intro/home-intro.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FunctionPageComponent } from './pages/function-page/function-page.component';
import { ImplementationPageComponent } from './pages/implementation-page/implementation-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [HomePageComponent, HomeBannerComponent, HomeIntroComponent, AboutPageComponent, FunctionPageComponent, ImplementationPageComponent, ContactPageComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}

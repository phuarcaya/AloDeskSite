import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TopComponent } from './components/top/top.component';
import { AboutComponent } from './components/about/about.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ImplementationMethodComponent } from './components/implementation-method/implementation-method.component';
import { FrequentQuestionComponent } from './components/frequent-question/frequent-question.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactStripComponent } from './components/contact-strip/contact-strip.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopComponent,
    AboutComponent,
    FunctionsComponent,
    PropertiesComponent,
    BenefitsComponent,
    ImplementationMethodComponent,
    FrequentQuestionComponent,
    ContactComponent,
    ContactStripComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopComponent,
    AboutComponent,
    FunctionsComponent,
    PropertiesComponent,
    BenefitsComponent,
    ImplementationMethodComponent,
    FrequentQuestionComponent,
    ContactComponent,
    ContactStripComponent
  ],
})
export class SharedModule {}

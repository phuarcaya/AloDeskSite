import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FunctionPageComponent } from './pages/function-page/function-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImplementationPageComponent } from './pages/implementation-page/implementation-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'acerca-de',
    component: AboutPageComponent,
  },
  {
    path: 'funciones',
    component: FunctionPageComponent,
  },
  {
    path: 'metodo-implementacion',
    component: ImplementationPageComponent,
  },
  {
    path: 'contactanos',
    component: ContactPageComponent,
  },
  /*  {
    path: 'about',
    loadChildren: () => import('./home.module').then((m) => m.HomeModule),
  }, */
  /* {
    path: '**', //TODO 404 cuando no existe la ruta
    redirectTo: '/tracks',
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

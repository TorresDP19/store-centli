import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component'; // Importa AboutusComponent
import { ContactoComponent } from './components/contacto/contacto.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'learning', loadChildren: () => import('./pages/learning/learning.module').then(m => m.LearningModule) }, 
  { path: 'store', loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule) },
  { path: 'aboutus', component: AboutusComponent }, // Aquí agregas la ruta para Aboutus
  { path: 'contacto', component: ContactoComponent }, // Aquí agregas la ruta para contacto
  { path: 'tutorial', component: TutorialComponent }, // Aquí agregas la ruta para contacto

  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

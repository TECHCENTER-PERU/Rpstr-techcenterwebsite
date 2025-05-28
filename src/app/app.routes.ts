import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SolucionesComponent } from './component/soluciones/soluciones.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'soluciones', component: SolucionesComponent}
];

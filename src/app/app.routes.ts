import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SolucionesComponent } from './component/soluciones/soluciones.component';
import { TrabajoModernoComponent } from './component/soluciones/trabajo-moderno/trabajo-moderno.component';
import { AplicacionesEmpresarialesComponent } from './component/soluciones/aplicaciones-empresariales/aplicaciones-empresariales.component';
import { InfraestructuraComponent } from './component/soluciones/infraestructura/infraestructura.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'soluciones', component: SolucionesComponent},
    {path: 'trabajo-moderno', component: TrabajoModernoComponent},
    {path: 'aplicaciones-empresariales', component: AplicacionesEmpresarialesComponent},
    {path: 'infraestructura', component: InfraestructuraComponent}



];

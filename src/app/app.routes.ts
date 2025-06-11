import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SolucionesComponent } from './component/soluciones/soluciones.component';
import { TrabajoModernoComponent } from './component/soluciones/trabajo-moderno/trabajo-moderno.component';
import { AplicacionesEmpresarialesComponent } from './component/soluciones/aplicaciones-empresariales/aplicaciones-empresariales.component';
import { InfraestructuraComponent } from './component/soluciones/infraestructura/infraestructura.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { ContactoComponent } from './component/contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'soluciones-microsoft-cloud', component: SolucionesComponent},
    {path: 'soluciones-microsoft-cloud/trabajo-moderno-soluciones-microsoft-cloud', component: TrabajoModernoComponent},
    {path: 'soluciones-microsoft-cloud/aplicaciones-empresariales', component: AplicacionesEmpresarialesComponent},
    {path: 'soluciones-microsoft-cloud/infraestructura-microsoft-cloud', component: InfraestructuraComponent},
    {path: 'servicios-microsoft-cloud-transformacion-digital', component: ServiciosComponent},
    {path: 'innovacion-digital-empresas', component: NosotrosComponent},
    {path: 'transformacion-digital-e-innovacion', component: ContactoComponent}





];

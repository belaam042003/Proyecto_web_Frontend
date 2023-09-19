import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { SubirDocsComponent } from './laura/components/subir-docs/subir-docs.component';
import { RecursosCompartidosComponent } from './laura/components/recursos-compartidos/recursos-compartidos.component';
import { InicialComponent } from './nicolas/perfil/inicial/inicial.component';
import { InicioBusquedaComponent } from './paul/inicio-busqueda/inicio-busqueda.component';
import { inicialResenasComponent } from './julieth/resenas/inicialResenas/inicialResenas.component';
import { BlogComponent } from './guayara/blog/blog.component';
import { HomeGComponent } from './guayara/homeG/homeG.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {path: '', pathMatch: 'full',component: LoginComponent,},
  { path: 'recursos', component: RecursosCompartidosComponent,  }, 
  { path: 'subirDocs', component: SubirDocsComponent, } ,
  { path: 'perfil', component: InicialComponent,},
  { path: 'busqueda', component: InicioBusquedaComponent,},
  { path: 'resenas', component: inicialResenasComponent,},
  { path: 'homeG', component: HomeGComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login',component: LoginComponent,...canActivate(redirectToHome),},
  { path: 'sign-up',component: SignUpComponent,...canActivate(redirectToHome),},
  { path: 'home',component: HomeComponent,...canActivate(redirectToLogin),},
  { path: 'profile',component: ProfileComponent,...canActivate(redirectToLogin),},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

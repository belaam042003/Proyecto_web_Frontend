import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursosCompartidosComponent } from './laura/components/recursos-compartidos/recursos-compartidos.component';
import { CarouselComponent } from './laura/components/carousel/carousel.component';
import { SubirDocsComponent } from './laura/components/subir-docs/subir-docs.component';
import { NavBarComponent } from './laura/components/nav-bar/nav-bar.component';
import { SideBarComponent } from './laura/components/side-bar/side-bar.component';
import { FormRecursosComponent } from './laura/components/form-recursos/form-recursos.component';
import { InicialComponent } from './nicolas/perfil/inicial/inicial.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { SearchComponent } from './paul/components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { SearchPipe } from './paul/pipes/search.pipe';
import { InicioBusquedaComponent } from './paul/inicio-busqueda/inicio-busqueda.component';
import { inicialResenasComponent } from './julieth/resenas/inicialResenas/inicialResenas.component';
import { BlogComponent } from './guayara/blog/blog.component';
import { HomeGComponent } from './guayara/homeG/homeG.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './components/profile/profile.component';

import { MatListModule } from '@angular/material/list';
import {} from '@angular/material/form-field';
import {} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DateDisplayPipe } from './pipes/date-display.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { ListResourcesComponent } from './laura/components/list-resources/list-resources.component';
import { AddEditResourceComponent } from './laura/components/add-edit-resource/add-edit-resource.component';


@NgModule({
  declarations: [
    AppComponent,
    RecursosCompartidosComponent,
    CarouselComponent,
    SubirDocsComponent,
    NavBarComponent,
    SideBarComponent,
    FormRecursosComponent,
    InicialComponent,
    SearchComponent,
    SearchPipe,
    InicioBusquedaComponent,
    inicialResenasComponent,
    BlogComponent,
    HomeGComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    SignUpComponent,
    ProfileComponent,
    DateDisplayPipe,
    ListResourcesComponent,
    AddEditResourceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserServiceService} from './user-service.service';
import { UserAuthentificationComponent } from './user-authentification/user-authentification.component';
import { ConnexionComponent } from './connexion/connexion.component';

import { UserManagmentComponent } from './user-managment/user-managment.component';
import { SearchCompenentComponent } from './search-compenent/search-compenent.component';
import {CategorieService} from './categorie.service';
import {CategorieBienService} from './categorie-bien.service';
import {ServiceService} from './service.service';
import {BienService} from './bien.service';
import { HomeComponent } from './home/home.component';
import { OwnerManagementComponent } from './owner-management/owner-management.component';
import { PlainteComponent } from './plainte/plainte.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CategorieManagementComponent } from './categorie-management/categorie-management.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { QuartierComponent } from './quartier/quartier.component';
//----------------------------
import { AngularWebStorageModule } from 'angular-web-storage';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuartierListComponent } from './quartier-list/quartier-list.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieBienListComponent } from './categorie-bien-list/categorie-bien-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserAuthentificationComponent,
    ConnexionComponent,
    UserManagmentComponent,
    SearchCompenentComponent,
    HomeComponent,
    OwnerManagementComponent,
    PlainteComponent,
    DeconnexionComponent,
    ConfirmationComponent,
    CategorieManagementComponent,
    AdminSpaceComponent,
    QuartierComponent,
    PageNotFoundComponent,
    QuartierListComponent,
    CategorieListComponent,
    CategorieBienListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularWebStorageModule
  ],
  providers: [UserServiceService, CategorieService, CategorieBienService, ServiceService, BienService],
  bootstrap: [AppComponent]
})
export class AppModule { }

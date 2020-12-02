import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {UserManagmentComponent} from './user-managment/user-managment.component';
import {UserAuthentificationComponent} from './user-authentification/user-authentification.component';
import {SearchCompenentComponent} from './search-compenent/search-compenent.component';
import {HomeComponent} from './home/home.component';
import {OwnerManagementComponent} from './owner-management/owner-management.component';
import {PlainteComponent} from './plainte/plainte.component';
import {DeconnexionComponent} from './deconnexion/deconnexion.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {AdminSpaceComponent} from './admin-space/admin-space.component';
import {CategorieManagementComponent} from './categorie-management/categorie-management.component';
import {QuartierComponent} from './quartier/quartier.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {QuartierListComponent} from './quartier-list/quartier-list.component';
import {CategorieBienListComponent} from './categorie-bien-list/categorie-bien-list.component';
import {CategorieListComponent} from './categorie-list/categorie-list.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'gereUser', component: UserListComponent },
  { path: 'Authentification', component: UserAuthentificationComponent },
  { path: 'search', component: SearchCompenentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quartier', component: QuartierComponent },
  { path: 'Categorie', component: CategorieManagementComponent},
  { path: 'admin', component:  AdminSpaceComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'plainte', component: PlainteComponent  },
  { path: 'propose', component: OwnerManagementComponent },
  { path: 'user-management', component: UserManagmentComponent },
  { path: '', redirectTo: '/Authentification', pathMatch: 'full' },
  {path: '404', component: PageNotFoundComponent },
  { path: 'listeQuartier', component: QuartierListComponent },
  { path: 'listeCategorieService', component: CategorieListComponent},
  { path: 'listeCategorieBien', component: CategorieBienListComponent},

  {path: '**', redirectTo: '/404'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ContactManagerComponent } from './Components/contact-manager/contact-manager.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { ViewContactComponent } from './Components/view-contact/view-contact.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


export const routes: Routes = [
{ path : '' , redirectTo:'/contacts/admin' , pathMatch:'full'},
{path : 'contacts/admin' , component: ContactManagerComponent},
{path : 'contacts/add' , component:AddContactComponent},
{path : 'contacts/edit/contactId' , component:EditContactComponent},
{path : 'contacts/view/contactId' , component:ViewContactComponent},
{path : 'navbat' , component:NavbarComponent},
{path : '**' , component:PageNotFoundComponent}

];

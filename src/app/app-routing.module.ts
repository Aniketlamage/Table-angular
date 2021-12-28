import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'employee-component', component: EmployeeComponent },
  { path: 'employee-component/:id/:name/:department/:salary/:attendance', component: DetailsComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


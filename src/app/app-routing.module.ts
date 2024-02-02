import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallesListComponentComponent } from './salles-list-component/salles-list-component.component';
import { SalleComponentComponent } from './salle-component/salle-component.component';
import { ErrorsComponentComponent } from './errors-component/errors-component.component';
import { AppComponent } from './app.component';
import { PricipalPageComponent } from './pricipal-page/pricipal-page.component';

const routes: Routes = [
  { path: '', component: PricipalPageComponent },
  { path: 'salles', component: SallesListComponentComponent },
  { path: 'salles/:id', component: SalleComponentComponent },
  { path: '**', component: ErrorsComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

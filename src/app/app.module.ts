import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SallesListComponentComponent } from './salles-list-component/salles-list-component.component';
import { SalleComponentComponent } from './salle-component/salle-component.component';
import { ErrorsComponentComponent } from './errors-component/errors-component.component';
import { PricipalPageComponent } from './pricipal-page/pricipal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SallesListComponentComponent,
    SalleComponentComponent,
    ErrorsComponentComponent,
    PricipalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

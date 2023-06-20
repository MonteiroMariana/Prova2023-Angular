import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadEmpresaComponent } from './cad-empresa/cad-empresa.component';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CadEmpresaComponent,
    EmpresaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

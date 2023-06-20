import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
  })

@Component({
  selector: 'app-cad-empresa',
  templateUrl: './cad-empresa.component.html',
  styleUrls: ['./cad-empresa.component.css']

}),


export class CadEmpresaComponent {

  nome!: string ;
  cnpj!: string;
  endereco!: string;
  contato!: string;
  cadastrarEmpresa() {
    console.log('Empresa cadastrada:', this.nome, this.cnpj);

}
}

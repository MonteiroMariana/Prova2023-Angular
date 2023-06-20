import { CadEmpresaComponent } from './../cad-empresa/cad-empresa.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.css']
})
export class EmpresaListaComponent {

    { nome: 'empresa', cnpj: '111111111', endereco:'zanni 10', contato:'(11)97021-1010'},

    { nome: 'empresa', cnpj: '222222222', endereco:'zanni 20', contato:'(11)97021-2020' },

    { nome: 'empresa', cnpj: '333333333', endereco:'zanni 30', contato:'(11)97021-3030' },

    { nome: 'empresa', cnpj: '444444444', endereco:'zanni 40', contato:'(11)97021-4040' },
  ;
}

removerEmpresa(empresa: CadEmpresaComponent) {

  const index = this.empresas.indexOf(empresa);
  if (index !== -1) {
    this.empresas.splice(index, 1);
  }
}





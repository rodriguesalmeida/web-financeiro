import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario();
  public form:FormGroup = new FormGroup({
    nome:new FormControl(''),
    login: new FormControl(),
    senha:new FormControl()    
  })
  constructor() { }

  ngOnInit(): void {
  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos invalidos!');
      return;
    }
    this.usuario = this.form.value;
    console.log('Usuario', this.usuario);
    let jsonUsers = localStorage.getItem('usuarios');
    let usuarios:Usuario[] = []
    if (jsonUsers != null){
      usuarios = JSON.parse(jsonUsers);
    }
    usuarios.push(this.usuario); 
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.table(usuarios);
    alert('Salvo com Sucesso');
    this.form.reset();
  }

}

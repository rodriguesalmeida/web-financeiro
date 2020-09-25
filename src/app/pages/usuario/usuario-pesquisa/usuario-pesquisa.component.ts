import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.scss']
})
export class UsuarioPesquisaComponent implements OnInit {
  public usuarios:Usuario[] = [];
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource(this.usuarios);
  public displayedColumns:string[] = ['nome','login','senha','acoes'] ;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    let jsonUsers = localStorage.getItem('usuarios');
    if (jsonUsers != null){
      this.usuarios = JSON.parse(jsonUsers);
    }
    this.dataSource = new MatTableDataSource(this.usuarios);
    
  }

  public remover(usuario){
    console.log('Removendo o usuario',usuario)
    let index = this.usuarios.indexOf(usuario);
    this.usuarios.splice(index, 1);
    localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
    this.dataSource = new MatTableDataSource(this.usuarios);
  }

  public alterar(usuario){
    console.log('Alterando o usuario',usuario)
    this.router.navigate(['/usuario/cadastro', usuario]); 
  }

}

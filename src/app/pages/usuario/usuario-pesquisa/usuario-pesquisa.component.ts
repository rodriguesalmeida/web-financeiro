import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.scss']
})
export class UsuarioPesquisaComponent implements OnInit {
  public usuarios:Usuario[] = [];
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource(this.usuarios);
  public displayedColumns:string[] = ['nome','login','senha'] ;
  constructor() { }

  ngOnInit(): void {
    let jsonUsers = localStorage.getItem('usuarios');
    if (jsonUsers != null){
      this.usuarios = JSON.parse(jsonUsers);
    }
    this.dataSource = new MatTableDataSource(this.usuarios);
    
  }

}

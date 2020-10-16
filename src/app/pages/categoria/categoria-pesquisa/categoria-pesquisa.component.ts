import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.scss']
})
export class CategoriaPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['nome', 'descricao','acoes'];
  public dataSource:MatTableDataSource<Categoria> = new MatTableDataSource();
  public categorias:Categoria[] =[];

  constructor(private router:Router) { }

  ngOnInit(): void {
    let jsonVector = localStorage.getItem('categorias');
    if (jsonVector != null){
      this.categorias = JSON.parse(jsonVector);
    }
    this.dataSource = new MatTableDataSource(this.categorias);
  }

  public alterar(categoria){
    this.router.navigate(['categoria/cadastro', categoria]);
  }

  public remover(categoria){
    let index = this.categorias.indexOf(categoria);
    this.categorias.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.categorias);
  }

}

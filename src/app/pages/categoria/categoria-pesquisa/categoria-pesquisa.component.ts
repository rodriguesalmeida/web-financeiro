import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/categoria';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.scss'],
  providers:[
    CategoriaService
  ]

})
export class CategoriaPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['nome', 'descricao','acoes'];
  public dataSource:MatTableDataSource<Categoria> = new MatTableDataSource();
  public categorias:Categoria[] =[];

  constructor(private router:Router, private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.pesquisar('').subscribe((lista)=>{
      this.categorias = lista;
      this.dataSource = new MatTableDataSource(this.categorias);
    })
  }

  public alterar(categoria){
    this.router.navigate(['categoria/cadastro', categoria]);
  }

  public remover(categoria){
    this.categoriaService.excluir(categoria.id).subscribe((res)=>{
      let index = this.categorias.indexOf(categoria);
      this.categorias.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.categorias);
    })    
  }

  public pesquisar(nome){
    this.categoriaService.pesquisar(nome).subscribe((lista)=>{
      this.categorias = lista;
      this.dataSource = new MatTableDataSource(lista);
    });
  }

}

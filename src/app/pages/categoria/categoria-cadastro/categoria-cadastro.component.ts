import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.scss']
})
export class CategoriaCadastroComponent implements OnInit {

  public form:FormGroup;
  public categoria:Categoria = new Categoria();

  constructor(private route:ActivatedRoute,private router:Router,public formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:new FormControl(),
      descricao:new FormControl()
    });
    this.route.params.subscribe((cate)=>{
      this.categoria = cate as Categoria;
      this.form.patchValue(this.categoria);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Possui campos obrigatórios');
      return;
    }
    this.categoria = this.form.value;
    let jsonVector = localStorage.getItem("categorias");
    let categorias = [];
    if (jsonVector != null){
      categorias = JSON.parse(jsonVector);
    }
    categorias.push(this.categoria);
    localStorage.setItem('categorias', JSON.stringify(categorias));

    console.table(categorias);
    alert('Salvo com sucesso');
    this.router.navigate(['categoria/pesquisa']);    
  }

}

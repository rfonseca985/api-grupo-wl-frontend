import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from '../colaborador.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.css']
})
export class ColaboradorCreateComponent implements OnInit {

  colaborador: Colaborador = {
    nome: '',
    cpf: '',
    id: '',
    alimento: []
  }

  constructor(private service: ColaboradorService, private router: Router) { }

  ngOnInit(): void {
  }
  
  create(): void {
    this.service.create(this.colaborador).subscribe((resposta) => {
      this.router.navigate(['colaborador'])
      this.service.mensagem('Categoria criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }
  
  cancel(): void {
    this.router.navigate(['colaborador'])
  }

}

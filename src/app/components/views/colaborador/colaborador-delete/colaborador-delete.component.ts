import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from '../colaborador.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.css']
})
export class ColaboradorDeleteComponent implements OnInit {

  colaborador: Colaborador = {
    id: '',
    nome: '',
    cpf: '',
    alimento: []
  }
  constructor(private service: ColaboradorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.colaborador.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.colaborador.id!).subscribe((resposta) => {
      this.colaborador.nome = resposta.nome
      this.colaborador.cpf = resposta.cpf
    })
  }

  delete(): void {
    this.service.delete(this.colaborador.id!).subscribe((resposta) => {
      this.router.navigate(['colaborador'])
      this.service.mensagem('Colabaorador deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['colaborador'])
  }

}

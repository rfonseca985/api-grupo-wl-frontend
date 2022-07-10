import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimento } from '../alimento.model';
import { AlimentoService } from '../alimento.service';

@Component({
  selector: 'app-alimento-create',
  templateUrl: './alimento-create.component.html',
  styleUrls: ['./alimento-create.component.css']
})
export class AlimentoCreateComponent implements OnInit {

  id_colab: String = ''

  alimento: Alimento={
    id: '',
    nome: ''
  }

  constructor(private service: AlimentoService, private route: ActivatedRoute,private router: Router) { }

  

  ngOnInit(): void {
    this.id_colab = this.route.snapshot.paramMap.get('id_colab')!
  }

  create():void{
      this.service.create(this.alimento, this.id_colab).subscribe(resposta =>{
        this.router.navigate([`colaborador/${this.id_colab}/alimento`])
        this.service.mensagem('Alimento adicionado com sucesso!')
      },err => {
        this.router.navigate([`colaborador/${this.id_colab}/alimento`])
        this.service.mensagem('Erro ao adicionar alimento! Tente novamente')
      });
  }

  cancel(): void{
    this.router.navigate([`colaborador/${this.id_colab}/alimento`])
  }

}

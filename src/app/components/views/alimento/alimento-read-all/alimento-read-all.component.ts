import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimento } from '../alimento.model';
import { AlimentoService } from '../alimento.service';

@Component({
  selector: 'app-alimento-read-all',
  templateUrl: './alimento-read-all.component.html',
  styleUrls: ['./alimento-read-all.component.css']
})
export class AlimentoReadAllComponent implements OnInit {

  displayedColumns: string[] = ["id", "nome", "acoes"];

  id_colab: any = ''

  alimentos: Alimento[] = []

  constructor(private service: AlimentoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_colab = this.route.snapshot.paramMap.get('id_colab')
    this.findAll();
  }

  findAll():void {
    this.service.findAllByColaborador(this.id_colab).subscribe((resposta) => {
      console.log(resposta);
      this.alimentos = resposta;
    });
  }

  navegarParaCriarAlimento(){
    this.router.navigate([`colaborador/${this.id_colab}/alimento/create`])
  }

}

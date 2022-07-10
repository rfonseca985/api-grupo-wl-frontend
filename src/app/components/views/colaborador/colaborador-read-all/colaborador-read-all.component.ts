import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from '../colaborador.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-read-all',
  templateUrl: './colaborador-read-all.component.html',
  styleUrls: ['./colaborador-read-all.component.css']
})
export class ColaboradorReadAllComponent implements OnInit {

  colaboradores: Colaborador[] = [];

  displayedColumns: string[] = ["id", "nome", "cpf", "alimentos"];

  constructor(private service: ColaboradorService, private router: Router) { }

  ngOnInit(): void {
    this.findAllWithAlimento();
  }


  findAllWithAlimento() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.colaboradores = resposta;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlimentoService } from "../../alimento/alimento.service";
import { Colaborador } from "../colaborador.model";
import { ColaboradorService } from "../colaborador.service";

@Component({
  selector: "app-colaborador-read",
  templateUrl: "./colaborador-read.component.html",
  styleUrls: ["./colaborador-read.component.css"],
})
export class ColaboradorReadComponent implements OnInit {
  
  colaboradores: Colaborador[] = [];

  displayedColumns: string[] = ["id", "nome", "cpf", "alimentos", "acoes"];

  constructor(private service: ColaboradorService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.colaboradores = resposta;
    });
  }

  navegarParaColaboradorCreate() {
    this.router.navigate(["colaborador/create"]);
  }


}

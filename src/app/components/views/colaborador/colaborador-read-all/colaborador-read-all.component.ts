import { Component, OnInit } from "@angular/core";
import { Alimento } from "../../alimento/alimento.model";
import { Colaborador } from "../colaborador.model";
import { ColaboradorService } from "../colaborador.service";

@Component({
  selector: "app-colaborador-read-all",
  templateUrl: "./colaborador-read-all.component.html",
  styleUrls: ["./colaborador-read-all.component.css"],
})
export class ColaboradorReadAllComponent implements OnInit {
  
  public colaboradores: Colaborador[] = [];
  public alimentos: Alimento[] = [];

  displayedColumns: string[] = ["id", "nome", "cpf", "alimentos"];
  
  constructor(private service: ColaboradorService) {}

  ngOnInit(): void {
    this.findAllWithAlimento();
  }

  findAllWithAlimento() {
    this.service.findAllWithAlimento().subscribe((resposta) => {
      console.log(resposta);
      this.colaboradores = resposta;
    });
  }
 
}

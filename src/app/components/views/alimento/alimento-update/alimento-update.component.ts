import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Alimento } from "../alimento.model";
import { AlimentoService } from "../alimento.service";

@Component({
  selector: "app-alimento-update",
  templateUrl: "./alimento-update.component.html",
  styleUrls: ["./alimento-update.component.css"],
})
export class AlimentoUpdateComponent implements OnInit {
  
  id_colab: String = '';

  alimento: Alimento = {
    id: '',
    nome:'',
  };

  constructor(
    private service: AlimentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_colab = this.route.snapshot.paramMap.get("id_colab")!;
    this.alimento.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }


  cancel(): void {
    this.router.navigate([`colaborador/${this.id_colab}/alimento`]);
  }

  findById():void{
    this.service.findById(this.alimento.id!).subscribe((resposta) => {
      this.alimento =  resposta
    })
  }

  update():void{
    this.service.update(this.alimento).subscribe((resposta) =>{
      this.router.navigate([`colaborador/${this.id_colab}/alimento`]);
      this.service.mensagem("Alimento atualizado com sucesso!")
    }, err => {
      this.router.navigate([`colaborador/${this.id_colab}/alimento`]);
      this.service.mensagem("Falha atualizar!, Tente novamente!")
    })
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Alimento } from "../alimento.model";
import { AlimentoService } from "../alimento.service";
@Component({
  selector: 'app-alimento-delete',
  templateUrl: './alimento-delete.component.html',
  styleUrls: ['./alimento-delete.component.css']
})
export class AlimentoDeleteComponent implements OnInit {

  
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
    this.findById()
  }


  cancel(): void {
    this.router.navigate([`colaborador/${this.id_colab}/alimento`]);
  }

  findById():void{
    this.service.findById(this.alimento.id!).subscribe((resposta) => {
      this.alimento =  resposta
    })
  }

  delete():void{
    this.service.delete(this.alimento.id!).subscribe(()=>{
      this.router.navigate([`colaborador/${this.id_colab}/alimento`]);
      this.service.mensagem("Alimento excluido com sucesso!")
    }, err =>{
      this.router.navigate([`colaborador/${this.id_colab}/alimento`]);
      this.service.mensagem("Falha ao excluir aliento! Tente novamente!")
    })
  }
}

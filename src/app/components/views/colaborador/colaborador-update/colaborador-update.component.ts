import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from '../colaborador.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.css']
})
export class ColaboradorUpdateComponent implements OnInit {

  colaborador: Colaborador= {
    id: '',
    nome: '',
    cpf: '',
    alimento: []
  }

  constructor(private service: ColaboradorService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.colaborador.id =this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  findById(){
  this.service.findById(this.colaborador.id).subscribe((resposta)=>{
    this.colaborador.nome = resposta.nome
    this.colaborador.cpf = resposta.cpf
  })
  }

  update(): void{
    this.service.update(this.colaborador).subscribe((resposta)=> {
    this.router.navigate(['colaborador'])
    this.service.mensagem('Colaborador atualizado com sucesso');
    }, err => {
      console.log(err)
        this.service.mensagem("Verifique se todos os campos estão preenchidos corretamente!!!")
      
    });
  }

  cancel(){
    this.router.navigate(['colaborador'])
  }
}

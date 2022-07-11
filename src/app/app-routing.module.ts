import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlimentoCreateComponent } from "./components/views/alimento/alimento-create/alimento-create.component";
import { AlimentoDeleteComponent } from "./components/views/alimento/alimento-delete/alimento-delete.component";
import { AlimentoReadAllComponent } from "./components/views/alimento/alimento-read-all/alimento-read-all.component";
import { AlimentoUpdateComponent } from "./components/views/alimento/alimento-update/alimento-update.component";
import { ColaboradorCreateComponent } from "./components/views/colaborador/colaborador-create/colaborador-create.component";
import { ColaboradorDeleteComponent } from "./components/views/colaborador/colaborador-delete/colaborador-delete.component";
import { ColaboradorReadAllComponent } from "./components/views/colaborador/colaborador-read-all/colaborador-read-all.component";
import { ColaboradorReadComponent } from "./components/views/colaborador/colaborador-read/colaborador-read.component";
import { ColaboradorUpdateComponent } from "./components/views/colaborador/colaborador-update/colaborador-update.component";
import { HomeComponent } from "./components/views/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "colaborador",
    component: ColaboradorReadComponent,
  },
  {
    path: "colaborador/create",
    component: ColaboradorCreateComponent,
  },
  {
    path: 'colaborador/delete/:id',
    component: ColaboradorDeleteComponent
  },
  {
    path: 'colaborador/update/:id',
    component: ColaboradorUpdateComponent
  },
  {
    path: 'colaborador/:id_colab/alimento',
    component: AlimentoReadAllComponent
  },
  {
  path: 'colaborador/:id_colab/alimento/create',
  component: AlimentoCreateComponent
  },
  {
    path: 'colaborador/:id_colab/alimento/:id/update',
    component: AlimentoUpdateComponent
  },
  {
    path: 'colaborador/:id_colab/alimento/:id/delete',
    component: AlimentoDeleteComponent
  },
  {
    path:'colaborador/all',
    component: ColaboradorReadAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

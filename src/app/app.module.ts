import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ColaboradorReadComponent } from './components/views/colaborador/colaborador-read/colaborador-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ColaboradorCreateComponent } from './components/views/colaborador/colaborador-create/colaborador-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ColaboradorDeleteComponent } from './components/views/colaborador/colaborador-delete/colaborador-delete.component';
import { ColaboradorUpdateComponent } from './components/views/colaborador/colaborador-update/colaborador-update.component';
import { AlimentoReadAllComponent } from './components/views/alimento/alimento-read-all/alimento-read-all.component';
import { AlimentoCreateComponent } from './components/views/alimento/alimento-create/alimento-create.component';
import { AlimentoUpdateComponent } from './components/views/alimento/alimento-update/alimento-update.component';
import { AlimentoDeleteComponent } from './components/views/alimento/alimento-delete/alimento-delete.component';
import { ColaboradorReadAllComponent } from './components/views/colaborador/colaborador-read-all/colaborador-read-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ColaboradorReadComponent,
    ColaboradorCreateComponent,
    ColaboradorDeleteComponent,
    ColaboradorUpdateComponent,
    AlimentoReadAllComponent,
    AlimentoCreateComponent,
    AlimentoUpdateComponent,
    AlimentoDeleteComponent,
    ColaboradorReadAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

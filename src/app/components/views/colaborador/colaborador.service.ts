import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Alimento } from "../alimento/alimento.model";
import { Colaborador } from "./colaborador.model";

@Injectable({
  providedIn: "root",
})
export class ColaboradorService {

  baseUrl: String = environment.baseUrl;

  findAllByColaborador(id_colab: String): Observable<Alimento[]> {
    const url = `${this.baseUrl}/alimento?colaborador=${id_colab}`;
    return this.http.get<Alimento[]>(url);
  }

  constructor(private http: HttpClient, private snack: MatSnackBar) {}
  findAll(): Observable<Colaborador[]> {
    const url = `${this.baseUrl}colaborador/`;
    return this.http.get<Colaborador[]>(url);
  }

  findAllWithAlimento(): Observable<Colaborador[]> {
    const url = `${this.baseUrl}colaborador/all/`;
    return this.http.get<Colaborador[]>(url);
  }
  findById(id: String): Observable<Colaborador> {
    const url = `${this.baseUrl}colaborador/${id}`;
    return this.http.get<Colaborador>(url);
  }

  create(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${this.baseUrl}colaborador`;
    return this.http.post<Colaborador>(url, colaborador);
  }
  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}colaborador/${id}`;
    return this.http.delete<void>(url);
  }

  update(colaborador: Colaborador): Observable<void> {
    const url = `${this.baseUrl}colaborador/${colaborador.id}`;
    return this.http.put<void>(url, colaborador);
  }

  mensagem(str: String): void {
    this.snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}

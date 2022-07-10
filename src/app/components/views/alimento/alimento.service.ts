import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Alimento } from "./alimento.model";

@Injectable({
  providedIn: "root",
})
export class AlimentoService {
  baseUrl: String = environment.baseUrl;
  snack: any;

  constructor(private http: HttpClient) {}

  findAllByColaborador(id_colab: String): Observable<Alimento[]> {
    const url = `${this.baseUrl}/alimento?colaborador=${id_colab}`;
    return this.http.get<Alimento[]>(url);
  }

  findById(id: String):Observable<Alimento>{
    const url = `${this.baseUrl}/alimento/${id}`
    return this.http.get<Alimento>(url)
  }

  update(alimento: Alimento):Observable<Alimento>{
    const url = `${this.baseUrl}/alimento/${alimento.id}`
    return this.http.put<Alimento>(url, alimento)
  }

  create(alimento: Alimento, id_colab: String): Observable<Alimento> {
    const url = `${this.baseUrl}/alimento?colaborador=${id_colab}`;
    return this.http.post<Alimento>(url, alimento);
  }


  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/alimento/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(str: String): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}

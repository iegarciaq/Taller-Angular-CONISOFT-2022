import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicios {

  constructor(private http: HttpClient) { }

  private url = "https://api.meaningcloud.com/sentiment-2.1";
  private key = "9a27e9aa23c188a096c8c58a7b104cef";
  private of = "json";
  private lang = "es";
  private ilang = "es";

  private urlFirebase = "https://opiniones2022-34d6c-default-rtdb.firebaseio.com"

  obtenerSentimiento(comentarios: string){
    return this.http.post(`${this.url}?key=${this.key}&of=${this.of}&lang=${this.lang}&ilang=${this.ilang}&txt=${comentarios}`,"")
  }

  guardarComentariosFirebase(comentarios: string, carrera: string, sentimiento: string){
    return this.http.post(`${this.urlFirebase}/opiniones/${carrera}/${sentimiento}.json`,
    JSON.stringify(comentarios))
  }

  obtenerComentariosPorCarrera(carrera : string){
    return this.http.get(`${this.urlFirebase}/opiniones/${carrera}.json`);
  }
}

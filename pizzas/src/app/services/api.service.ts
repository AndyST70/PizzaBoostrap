import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Api_uri = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public agregar_cliente (form: any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let direccion = this.Api_uri + "clientes/crear";
    return this.http.post<any>(direccion, form, {headers});
  }

  public agregar_pedido (clienteid: number, pizzaid:number, cantidad:number):Observable<any>{
    const params = new HttpParams()
      .set('clienteid', clienteid.toString())
      .set('pizzaid', pizzaid.toString())
      .set('cantidad', cantidad.toString());

    let direccion = this.Api_uri + "pedidos/agregar";
    return this.http.post(direccion, null, {params});
  }

  public listar_pedidos(): Observable<any[]>{
    let direccion = this.Api_uri + "pedidos/listar";
    return this.http.get<any[]>(direccion);
  }

  public listar_pizzas(): Observable<any[]>{
    let direccion = this.Api_uri + "Getpizzas";
    return this.http.get<any[]>(direccion);
  }

}

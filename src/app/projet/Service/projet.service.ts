import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Projet} from "../Model/projet";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  nomApi: string = "https://www.mani-api.ma/api/Projets";

  constructor(private  http:HttpClient) { }

  FindAll(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.nomApi);
  }
  delete(id:number):Observable<any>
  {
   return this.http.delete(`${this.nomApi}/${id}`);
  }
  add(projet:Projet):Observable<Projet>
  {
    return this.http.post<Projet>(this.nomApi,projet);
  }
  update(id:number, projet:Projet):Observable<Projet>{
    // return this.http.put<MarqueAdd>(`${this.url}Marques/${id}`,marque);
      return this.http.put<Projet>(this.nomApi+'/'+id,projet);
  }
  detailProjet(id:number):Observable<Projet>{
    return this.http.get<Projet>(this.nomApi+'/'+id);
  }
}

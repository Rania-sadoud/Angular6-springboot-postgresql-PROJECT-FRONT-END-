import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RgaaCatService {
 private baseUrl = 'http://localhost:8080/api/rgaa/listrgaa';
 private baseUrlrgaa = 'http://localhost:8080/api/rgaa/saveRGAA';
 private baseUrlrgaainfos = 'http://localhost:8080/api/rgaa/Details';
 private baseUrlcatinfos = 'http://localhost:8080/api/rgaa/Catdetails';
private baseUrlupdatergaa = 'http://localhost:8080/api/rgaa/update';
 private updatecatUrl = 'http://localhost:8080/api/cat/update';
  
private urlsupp = 'http://localhost:8080/api/rgaa/supprimerrgaa';
 
  constructor(private http: HttpClient) { }

	createRgaa(rgaa:  Object): Observable<Object> {
    return this.http.post(`${this.baseUrlrgaa}`, rgaa);
  }

  getRgaaList(rgaacatid: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${rgaacatid}`);
  }
  getCatInfos(rgaacatid: string): Observable<any> {
    return this.http.get(`${this.baseUrlcatinfos}/${rgaacatid}`);}
   
 getRgaaInfos(rgaaid: string): Observable<any> {
    return this.http.get(`${this.baseUrlrgaainfos}/${rgaaid}`);}
    getRgaaInfosModif(rgaaid: string): Observable<any> {
    return this.http.get(`${this.baseUrlrgaainfos}/${rgaaid}`);}
   
    createRgaaModif(rgaa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlupdatergaa}`, rgaa);
  }
 deleteRgaa(id: number): Observable<any> {
    return this.http.delete(`${this.urlsupp}/${id}`, { responseType: 'text' });
  }
  updatecat(cat: Object): Observable<Object> {
    return this.http.post(`${this.updatecatUrl}`, cat);
  }
 
}
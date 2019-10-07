import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseUrl = 'http://localhost:8080/api/categories';
  private baseUrl2 = 'http://localhost:8080/api/file/deletecat';
 
  
  constructor(private http: HttpClient) { }

  getCat(id_cat: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id_cat}`);
  }

  createCat(cat:  Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, cat);
  }
  createCatfile(filemodel:  Object): Observable<Object> {
    return this.http.post('http://localhost:8080/api/file/upload', filemodel);
  }

  updateCat(id_cat: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id_cat}`, value);
  }

  deleteCat(id_cat: number): Observable<any> {
    return this.http.delete(`${this.baseUrl2}/${id_cat}`, { responseType: 'text' });
  }

  getCatList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
   
   updateFile(value: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/api/file/updatCATID`, value);
  }
  /********************************************************************************************************/

  /**********************************************************************************************************/


  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
    
}

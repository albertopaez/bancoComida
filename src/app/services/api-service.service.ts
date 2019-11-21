import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {

  }

  url = 'http://localhost:3000/api/pruebas';

  getDataPrueba() {
    return this.http.get(this.url);
  }
}

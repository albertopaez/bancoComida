import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable
import * as _ from 'lodash';

interface Config {
  name: string,
  data: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  config;
  coso: Observable<Config[]>

  ngOnInit() {
    this.coso = this.http.get<Config[]>('http://localhost:3000/api/pruebas').map(data => _.values(data))

  }
  

}

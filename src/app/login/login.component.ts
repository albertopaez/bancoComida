import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    
  }
  

}

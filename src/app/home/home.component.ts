import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private constants: ConstantsService) {}

  products = this.getProducts();

  getProducts() {
    return this.http.get(`${this.constants.API_ENDPOINT}products`);
  }

  ngOnInit() {
  }
}

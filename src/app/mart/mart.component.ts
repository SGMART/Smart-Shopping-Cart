import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-mart',
  templateUrl: './mart.component.html',
  styleUrls: ['./mart.component.css']
})
export class MartComponent implements OnInit {

  constructor(private http: Http) { }
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});


  products = [];
  fetchData = function() {
    this.http.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )
  }

  deleteProduct = function(id) {
    if(confirm("Are you sure?")) {
      const url = '${"http://localhost:5555/products"}/${id}';
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() =>  {
        this.fetchData();
      })
    }
  }
    

  ngOnInit() {
    this.fetchData(); 
      }

}


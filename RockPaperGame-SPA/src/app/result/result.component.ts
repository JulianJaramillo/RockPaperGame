import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  values: any;
  public result;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  // Se recibe el nombre de ganador
  ngOnInit() {
    const nameWinner = this.route.snapshot.paramMap.get('winner');
    this.result = nameWinner;
    this.getValues();
  }

  // Consulta al servicio net core donde se almacenan los resultados de los jugadores
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public result;
  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {
    let nameWinner = this.route.snapshot.paramMap.get('winner');
    this.result = nameWinner;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  @ViewChild('player1') player1: any;
  @ViewChild('player2') player2: any;
  ngOnInit() {
  }

  onSelect(player1, player2) {
    this.router.navigate(['/game', player1, player2]);
  }
}

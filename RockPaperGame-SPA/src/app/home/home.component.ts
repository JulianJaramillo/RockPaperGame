import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // obtener y enviar parametros de los jugadores al componente de Game(juego)
  constructor(private router: Router) { }
  @ViewChild('player1') player1: any;
  @ViewChild('player2') player2: any;
  ngOnInit() {
  }

  // Metodo para redereccionar la informacion de los jugadores al componente Game
  onSelect(player1, player2) {
    if (player1 !== '' && player2 !== '') {
      this.router.navigate(['/game', player1, player2]);
    } else {
      alert('The player has to be named');
    }

  }
}

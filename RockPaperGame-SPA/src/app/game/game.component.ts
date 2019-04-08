import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // Nombre de los jugadores
  public playerName;
  public player2Name;

  // Marcador
  scores = [0, 0];
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];

  playerSelected = -1;
  isResultShow = false;
  // Variable para los turnos
  isVisiblePlayer1 = true;
  isVisiblePlayer2 = false;

  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0;
  enemySelected = -1;
  showClass = true;

  // Metodo de seleccion jugador 1
  pick(weapon: number): void {
    this.playerSelected = weapon;
    this.isVisiblePlayer1 = false;
    this.isVisiblePlayer2 = true;
  }


  // Metodo de seleccion jugador 2
  pickEnemy(weapon: number): void {
    this.enemySelected = weapon;
    this.checkResult();
    this.isResultShow = true;
    this.isVisiblePlayer1 = true;
    this.isVisiblePlayer2 = false;
  }

  // reinicar marcador
  reset(): void {
    this.scores = [0, 0];
  }

  // Verificar Marcador
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;

    if (playerPick === enemyPick) {
      this.theResult = 2;
    } else if ((playerPick - enemyPick + 3) % 3 === 1) {
      this.theResult = 0;
      this.scores[0] = this.scores[0] + 1;
      if (this.scores[0] === 3) {
        this.postInfo(this.playerName, this.scores[0].toString(), this.scores[1].toString());
        this.router.navigate(['/results', this.playerName]);
      }
    } else {
      this.theResult = 1;
      this.scores[1] = this.scores[1] + 1;
      if (this.scores[1] === 3) {
        this.postInfo(this.player2Name, this.scores[1].toString(), this.scores[0].toString());
        this.scores = [0, 0];
        this.router.navigate(['/results', this.player2Name]);
      }
    }
  }

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  // Asignar Nombres Jugadores
  ngOnInit() {
    const name1 = this.route.snapshot.paramMap.get('player1');
    const name2 = this.route.snapshot.paramMap.get('player2');
    this.playerName = name1;
    this.player2Name = name2;
  }

  // Guardar Datos de los Jugadores en la BD
  postInfo(name: string, win: string, lost: string) {
    this.http.post('http://localhost:5000/api/values',
      {
        NamePlayer: name,
        WonGames: win,
        LostGames: lost
      }
    ).subscribe(
      (data: any) => {
        console.log(data);
      }
    );

  }
}

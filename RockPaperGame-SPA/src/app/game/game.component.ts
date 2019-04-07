import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
 public playerName;
 public player2Name;
  scores = [0 , 0];
  weapons = [
    'rock',
    'paper',
    'scissors'
  ]
  playerSelected = -1;
  isResultShow = false;
  
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0 
  enemySelected  = -1;
  showClass= true;

 pick( weapon: number): void {
   this.playerSelected = weapon;
 }

 pickEnemy( weapon: number): void {
  this.enemySelected = weapon;
  this.checkResult();
  this.isResultShow = true;
 }

 reset(): void {
  this.scores = [0,0];
 }
 checkResult(): void {
   const playerPick = this.playerSelected;
   const enemyPick = this.enemySelected;
  
   if( playerPick == enemyPick){
    this.theResult = 2;
    }

    //You Win
    else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
      this.theResult = 0;
      this.scores[0] = this.scores[0]+1;
      if(this.scores[0] == 3){
        this.scores = [0,0];
      }
    }
    //You Lose
    else{
      this.theResult = 1;
      this.scores[1] = this.scores[1]+1;
      if(this.scores[1] == 3){
        this.scores = [0,0];
      }
    }
 }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let name1 = this.route.snapshot.paramMap.get('player1');
    let name2 = this.route.snapshot.paramMap.get('player2');
    this.playerName = name1;
    this.player2Name = name2;
  }

}

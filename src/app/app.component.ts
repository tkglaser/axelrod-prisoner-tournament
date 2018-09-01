import { Component, OnInit } from '@angular/core';
import { GameRoundRobin } from './game/game-round-robin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prisoner';
  outcome = '';

  ngOnInit(): void {
    const tournament = new GameRoundRobin();

    this.outcome = tournament.play();
  }
}

import { Player } from './player';
import { TitForTat } from './player/tit-for-tat';
import { Game } from './game';
import { Bully } from './player/bully';
import { TitForTatForgiving } from './player/tit-for-tat-forgiving';
import { Softie } from './player/softie';

export class GameRoundRobin {
  playerTemplates = [
    { count: 20, create: () => new TitForTat() },
    { count: 20, create: () => new TitForTatForgiving() },
    { count: 20, create: () => new Bully() },
    { count: 20, create: () => new Softie() }
  ];
  players: Player[];
  log = '';
  scoreByType = new Map<string, number>();
  constructor() {
    this.players = [];
    for (const playerClass of this.playerTemplates) {
      for (let i = 0; i < playerClass.count; ++i) {
        this.players.push(playerClass.create());
      }
    }
  }

  play(): string {
    for (const playerA of this.players) {
      for (const playerB of this.players) {
        if (playerA !== playerB) {
          const g = new Game(playerA, playerB);
          const outcome = g.play();
          // this.log += outcome + '\n';
        }
      }
    }

    for (const player of this.players) {
      if (!this.scoreByType.has(player.type())) {
        this.scoreByType.set(player.type(), 0);
      }
      this.scoreByType.set(
        player.type(),
        this.scoreByType.get(player.type()) + player.totalScore()
      );
      this.log += `Player [${player.type()}] score: [${player.totalScore()}]\n`;
    }
    for (const entry of Array.from(this.scoreByType.entries())) {
      this.log += `Type [${entry[0]}] score: [${entry[1]}]\n`;
    }
    return this.log;
  }
}

import { Player } from './player';
import { Move } from './move.enum';

export class Game {
  constructor(private a: Player, private b: Player) {}

  play(): string {
    const moveA = this.a.move();
    const moveB = this.b.move();
    const log = `[${this.a.type()}]vs[${this.b.type()}] `;

    this.a.otherPlayersMove(moveB);
    this.b.otherPlayersMove(moveA);

    if (moveA === Move.Cooperate) {
      if (moveB === Move.Cooperate) {
        this.a.score(3);
        this.b.score(3);
        return log + 'coop';
      } else {
        this.a.score(0);
        this.b.score(5);
        return log + 'B defects';
      }
    } else {
      if (moveB === Move.Cooperate) {
        this.a.score(5);
        this.b.score(0);
        return log + 'A defects';
      } else {
        this.a.score(1);
        this.b.score(1);
        return log + 'Both defect';
      }
    }
  }
}

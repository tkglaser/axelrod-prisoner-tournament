import { Player } from '../player';
import { Move } from '../move.enum';

export class Softie extends Player {
  move(): Move {
    return Move.Cooperate;
  }

  otherPlayersMove(m: Move): void {
  }

  type(): string {
    return "SFT";
  }
}

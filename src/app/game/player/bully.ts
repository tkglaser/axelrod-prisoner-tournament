import { Player } from '../player';
import { Move } from '../move.enum';

export class Bully extends Player {
  move(): Move {
    return Move.Defect;
  }

  otherPlayersMove(m: Move): void {
  }

  type(): string {
    return "BLY";
  }
}

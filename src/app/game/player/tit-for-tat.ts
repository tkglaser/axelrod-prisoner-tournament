import { Player } from "../player";
import { Move } from "../move.enum";

export class TitForTat extends Player {
  otherPlayersLastMove = Move.Cooperate;

  move(): Move {
    if (this.otherPlayersLastMove === Move.Cooperate) {
      return Move.Cooperate;
    } else {
      return Move.Defect;
    }
  }

  otherPlayersMove(m: Move): void {
    this.otherPlayersLastMove = m;
  }

  type(): string {
    return "TFT";
  }
}

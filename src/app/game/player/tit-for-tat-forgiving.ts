import { Player } from "../player";
import { Move } from "../move.enum";

export class TitForTatForgiving extends Player {
  otherPlayersLastMove = Move.Cooperate;
  forgiveCounter = 0;

  move(): Move {
    if (this.otherPlayersLastMove === Move.Cooperate) {
      return Move.Cooperate;
    } else {
      if (this.forgiveCounter > 2) {
        this.forgiveCounter = 0;
        return Move.Cooperate;
      } else {
        ++this.forgiveCounter;
        return Move.Defect;
      }
    }
  }

  otherPlayersMove(m: Move): void {
    this.otherPlayersLastMove = m;
  }

  type(): string {
    return "TFF";
  }
}

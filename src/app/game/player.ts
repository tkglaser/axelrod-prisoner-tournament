import { Move } from "./move.enum";

export abstract class Player {
  scoreCnt = 0;

  abstract move(): Move;
  abstract otherPlayersMove(m: Move): void;
  abstract type(): string;
  score(s: number): void {
    this.scoreCnt += s;
  }

  totalScore(): number {
    return this.scoreCnt;
  }
}

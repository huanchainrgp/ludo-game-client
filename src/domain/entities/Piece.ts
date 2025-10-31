import { PieceId } from '../value-objects/PieceId';
import { Position, SAFE_POSITIONS } from '../value-objects/Position';
import { PlayerId } from '../value-objects/Player';

export class Piece {
  constructor(
    public readonly id: PieceId,
    public readonly playerId: PlayerId,
    public position: Position,
    public readonly color: 'blue' | 'red' | 'green' | 'yellow'
  ) {}

  public isAtHome(): boolean {
    return this.position === '0';
  }

  public isAtSafePosition(): boolean {
    return SAFE_POSITIONS.includes(this.position);
  }

  public moveTo(newPosition: Position): void {
    this.position = newPosition;
  }

  public reset(): void {
    this.position = '0';
  }
}


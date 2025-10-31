import { Piece } from '../entities/Piece';
import { GameBoard } from '../entities/GameBoard';
import { PlayerId } from '../value-objects/Player';
import { Position } from '../value-objects/Position';

export interface CollisionResult {
  hasCollision: boolean;
  piecesToReturn: Array<{ piece: Piece; position: Position }>;
}

export class MovementService {
  public static canMovePiece(piece: Piece, diceRoll: number, allPieces: Piece[]): boolean {
    if (piece.isAtHome()) {
      return diceRoll === 6;
    }
    
    const playerPath = GameBoard.getPlayerPath(piece.playerId);
    const currentIndex = playerPath.indexOf(piece.position);
    const nextIndex = currentIndex + diceRoll;
    
    if (nextIndex >= playerPath.length) {
      return false;
    }
    
    const targetPosition = playerPath[nextIndex];
    const winnerPosition = GameBoard.getWinnerPosition(piece.playerId);
    if (targetPosition === winnerPosition && nextIndex < playerPath.length - 1) {
      return false;
    }
    
    return true;
  }

  public static getNextPosition(currentPosition: Position, playerId: PlayerId, diceRoll: number): Position {
    if (currentPosition === '0') {
      return GameBoard.getStartingPosition(playerId);
    }
    
    const path = GameBoard.getPlayerPath(playerId);
    const currentIndex = path.indexOf(currentPosition);
    const nextIndex = currentIndex + diceRoll;
    
    if (nextIndex >= path.length) {
      return currentPosition;
    }
    
    return path[nextIndex];
  }

  public static checkCollision(
    position: Position, 
    movingPlayerId: PlayerId, 
    allPieces: Piece[]
  ): CollisionResult {
    const piecesAtPosition = allPieces.filter(p => p.position === position);
    const opponentPieces = piecesAtPosition.filter(p => p.playerId !== movingPlayerId);
    
    if (opponentPieces.length === 0) {
      return { hasCollision: false, piecesToReturn: [] };
    }
    
    const piecesToReturn = opponentPieces.map(piece => ({
      piece,
      position: piece.position
    }));
    
    return {
      hasCollision: true,
      piecesToReturn
    };
  }

  public static returnPieceToHome(piece: Piece): void {
    piece.reset();
  }

  public static getAllMoveablePieces(
    playerId: PlayerId, 
    diceRoll: number, 
    allPieces: Piece[]
  ): Piece[] {
    return allPieces.filter(p => 
      p.playerId === playerId && this.canMovePiece(p, diceRoll, allPieces)
    );
  }
}


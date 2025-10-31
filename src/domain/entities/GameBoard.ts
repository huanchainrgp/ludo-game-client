import { Position } from '../value-objects/Position';
import { PlayerId } from '../value-objects/Player';

export interface PlayerPath {
  playerId: PlayerId;
  path: Position[];
}

export const PLAYER_PATHS: PlayerPath[] = [
  {
    playerId: 1,
    path: ['0', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', 
           '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 
           '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
           '30', '31', '32', '33', '34', '35', '36', '37', '38', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9']
  },
  {
    playerId: 2,
    path: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 
           '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
           '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', 
           '44', '45', '46', '47', '48', '49', '50', '51', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9']
  },
  {
    playerId: 3,
    path: ['0', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', 
           '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', 
           '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', 
           '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9']
  },
  {
    playerId: 4,
    path: ['0', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
           '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', 
           '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', 
           '17', '18', '19', '20', '21', '22', '23', '24', '25', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8', 'y9']
  }
];

export class GameBoard {
  public static getPlayerPath(playerId: PlayerId): Position[] {
    const playerPath = PLAYER_PATHS.find(p => p.playerId === playerId);
    return playerPath ? playerPath.path : [];
  }

  public static getStartingPosition(playerId: PlayerId): Position {
    const path = this.getPlayerPath(playerId);
    return path[1] || '0';
  }

  public static getNextPosition(currentPosition: Position, playerId: PlayerId): Position {
    const path = this.getPlayerPath(playerId);
    const currentIndex = path.indexOf(currentPosition);
    
    if (currentIndex === -1 || currentIndex === path.length - 1) {
      return currentPosition;
    }
    
    return path[currentIndex + 1];
  }

  public static getPreviousPosition(currentPosition: Position, playerId: PlayerId): Position | undefined {
    const path = this.getPlayerPath(playerId);
    const currentIndex = path.indexOf(currentPosition);
    
    if (currentIndex <= 0) {
      return undefined;
    }
    
    return path[currentIndex - 1];
  }

  public static isSafePosition(position: Position): boolean {
    const safePositions = ['1', '14', '27', '40'];
    return safePositions.includes(position);
  }

  public static getWinnerPosition(playerId: PlayerId): Position {
    const winners: Record<PlayerId, Position> = {
      1: 'b6',
      2: 'r6',
      3: 'g6',
      4: 'y6'
    };
    return winners[playerId];
  }
}


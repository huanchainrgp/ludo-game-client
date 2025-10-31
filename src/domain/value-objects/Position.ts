export type Position = string;

export interface BoardPosition {
  position: Position;
  isSafe: boolean;
  isHome: boolean;
}

export const SAFE_POSITIONS: Position[] = ['1', '14', '27', '40'];


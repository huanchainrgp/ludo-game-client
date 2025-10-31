export type PlayerId = 1 | 2 | 3 | 4;

export interface PlayerInfo {
  id: PlayerId;
  name: string;
  score: number;
  color: "blue" | "red" | "green" | "yellow";
}

export const ALL_PLAYERS: PlayerId[] = [1, 2, 3, 4];

export const PLAYER_COLORS: Record<PlayerId, PlayerInfo['color']> = {
  1: "blue",
  2: "red",
  3: "green",
  4: "yellow"
};

export const DEFAULT_PLAYER_NAMES: Record<PlayerId, string> = {
  1: "Player 1",
  2: "Player 2",
  3: "Player 3",
  4: "Player 4"
};


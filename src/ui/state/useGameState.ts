import { useState, useCallback } from 'react';
import { PlayerId } from '../../domain/value-objects/Player';

// Simplified game state for now
export interface GameState {
  currentPlayer: PlayerId;
  diceRoll: number;
  isPlayable: boolean;
  players: Record<PlayerId, { name: string; score: number }>;
  winner: PlayerId | null;
}

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentPlayer: 1,
    diceRoll: 1,
    isPlayable: true,
    players: {
      1: { name: "Player 1", score: 0 },
      2: { name: "Player 2", score: 0 },
      3: { name: "Player 3", score: 0 },
      4: { name: "Player 4", score: 0 }
    },
    winner: null
  });

  const setPlayerName = useCallback((playerId: PlayerId, name: string) => {
    setGameState(prev => ({
      ...prev,
      players: {
        ...prev.players,
        [playerId]: { ...prev.players[playerId], name }
      }
    }));
  }, []);

  const rollDice = useCallback((playerId: PlayerId) => {
    if (gameState.currentPlayer !== playerId || !gameState.isPlayable) {
      return;
    }

    const diceValue = Math.floor(Math.random() * 6) + 1;
    setGameState(prev => ({
      ...prev,
      diceRoll: diceValue,
      isPlayable: false
    }));
  }, [gameState]);

  const passTurn = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentPlayer: (prev.currentPlayer % 4 + 1) as PlayerId,
      isPlayable: true
    }));
  }, []);

  return {
    gameState,
    setPlayerName,
    rollDice,
    passTurn,
  };
};


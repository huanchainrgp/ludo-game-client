import { useState, useCallback } from 'react';
import { PieceId, PIECE_IDS } from '../../domain/value-objects/PieceId';
import { PlayerId } from '../../domain/value-objects/Player';
import { Position } from '../../domain/value-objects/Position';

interface PieceToReturn {
  piece: PieceId;
  place: Position;
}

export const useLudoGame = () => {
  const [players] = useState<PlayerId[]>([1, 2, 3, 4]);
  const [steps, setSteps] = useState<number>(1);
  const [player, setPlayer] = useState<PlayerId>(1);
  const [player1, setPlayer1] = useState<string>("Player 1");
  const [player2, setPlayer2] = useState<string>("Player 2");
  const [player3, setPlayer3] = useState<string>("Player 3");
  const [player4, setPlayer4] = useState<string>("Player 4");
  const [score1, setScore1] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);
  const [score3, setScore3] = useState<number>(0);
  const [score4, setScore4] = useState<number>(0);
  const [ableToplay, setAbleToPlay] = useState<boolean>(true);
  const [settings, setSettings] = useState<boolean>(true);
  const [positions, setPositions] = useState<Position[]>([
    "0", "0", "0", "0", "0", "0", "0", "0",
    "0", "0", "0", "0", "0", "0", "0", "0",
  ]);
  const [scores, setScores] = useState<number[]>(new Array(16).fill(0));
  const [winners, setWinners] = useState<PlayerId[]>([]);

  // Piece movement states
  const [bluePieces, setBluePieces] = useState({ 1: false, 2: false, 3: false, 4: false });
  const [redPieces, setRedPieces] = useState({ 1: false, 2: false, 3: false, 4: false });
  const [greenPieces, setGreenPieces] = useState({ 1: false, 2: false, 3: false, 4: false });
  const [yellowPieces, setYellowPieces] = useState({ 1: false, 2: false, 3: false, 4: false });

  // Width states
  const [pieceWidths, setPieceWidths] = useState<Record<PieceId, React.CSSProperties>>({
    'blue-1': { width: '22px' }, 'blue-2': { width: '22px' }, 'blue-3': { width: '22px' }, 'blue-4': { width: '22px' },
    'red-1': { width: '22px' }, 'red-2': { width: '22px' }, 'red-3': { width: '22px' }, 'red-4': { width: '22px' },
    'green-1': { width: '22px' }, 'green-2': { width: '22px' }, 'green-3': { width: '22px' }, 'green-4': { width: '22px' },
    'yellow-1': { width: '22px' }, 'yellow-2': { width: '22px' }, 'yellow-3': { width: '22px' }, 'yellow-4': { width: '22px' }
  });

  const getPlayerNames = useCallback(() => ({ player1, player2, player3, player4 }), [player1, player2, player3, player4]);
  const getScores = useCallback(() => ({ score1, score2, score3, score4 }), [score1, score2, score3, score4]);

  return {
    // State
    players,
    steps,
    setSteps,
    player,
    setPlayer,
    player1, setPlayer1,
    player2, setPlayer2,
    player3, setPlayer3,
    player4, setPlayer4,
    score1, score2, score3, score4,
    setScore1, setScore2, setScore3, setScore4,
    ableToplay,
    setAbleToPlay,
    settings,
    setSettings,
    positions,
    setPositions,
    scores,
    setScores,
    winners,
    setWinners,
    bluePieces,
    setBluePieces,
    redPieces,
    setRedPieces,
    greenPieces,
    setGreenPieces,
    yellowPieces,
    setYellowPieces,
    pieceWidths,
    setPieceWidths,
    // Helpers
    getPlayerNames,
    getScores,
  };
};


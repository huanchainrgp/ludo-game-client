import "../../App.css";
import profile from "../../img/profile.jpg";
import red from "../../img/red.png";
import green from "../../img/green.png";
import blue from "../../img/blue.png";
import yellow from "../../img/yellow.png";
import redSetting from "../../img/red3.JPG";
import greenSetting from "../../img/green3.JPG";
import blueSetting from "../../img/blue3.JPG";
import yellowSetting from "../../img/yellow3.JPG";
import settingsLogo from "../../img/settings.png";
import winner1 from "../../img/winner1.png";
import winner2 from "../../img/winner2.png";
import winner3 from "../../img/winner3.png";
import React, { useState } from "react";
import $ from "jquery";

type PieceId = 
  | "blue-1" | "blue-2" | "blue-3" | "blue-4"
  | "red-1" | "red-2" | "red-3" | "red-4"
  | "green-1" | "green-2" | "green-3" | "green-4"
  | "yellow-1" | "yellow-2" | "yellow-3" | "yellow-4";

type Position = string;
type Player = 1 | 2 | 3 | 4;

interface PieceToReturn {
  piece: PieceId;
  place: Position;
}

const Game: React.FC = () => {
  // const [music1, setMusic1] = useState(new Audio(m));
  const [players] = useState<Player[]>([1, 2, 3, 4]); // Always 4 players
  const [steps, setSteps] = useState<number>(1);
  const [player, setPlayer] = useState<Player>(1);
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
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);
  const [scores, setScores] = useState<number[]>([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);

  const [winners, setWinners] = useState<Player[]>([]);
  const [blue1, setBlue1] = useState(false);
  const [blue2, setBlue2] = useState(false);
  const [blue3, setBlue3] = useState(false);
  const [blue4, setBlue4] = useState(false);

  const [red1, setRed1] = useState(false);
  const [red2, setRed2] = useState(false);
  const [red3, setRed3] = useState(false);
  const [red4, setRed4] = useState(false);

  const [green1, setGreen1] = useState(false);
  const [green2, setGreen2] = useState(false);
  const [green3, setGreen3] = useState(false);
  const [green4, setGreen4] = useState(false);

  const [yellow1, setYellow1] = useState(false);
  const [yellow2, setYellow2] = useState(false);
  const [yellow3, setYellow3] = useState(false);
  const [yellow4, setYellow4] = useState(false);

  const [widthBlue1, setWidthBlue1] = useState<React.CSSProperties>({ width: "22px" });
  const [widthBlue2, setWidthBlue2] = useState<React.CSSProperties>({ width: "22px" });
  const [widthBlue3, setWidthBlue3] = useState<React.CSSProperties>({ width: "22px" });
  const [widthBlue4, setWidthBlue4] = useState<React.CSSProperties>({ width: "22px" });

  const [widthRed1, setWidthRed1] = useState<React.CSSProperties>({ width: "22px" });
  const [widthRed2, setWidthRed2] = useState<React.CSSProperties>({ width: "22px" });
  const [widthRed3, setWidthRed3] = useState<React.CSSProperties>({ width: "22px" });
  const [widthRed4, setWidthRed4] = useState<React.CSSProperties>({ width: "22px" });

  const [widthGreen1, setWidthGreen1] = useState<React.CSSProperties>({ width: "22px" });
  const [widthGreen2, setWidthGreen2] = useState<React.CSSProperties>({ width: "22px" });
  const [widthGreen3, setWidthGreen3] = useState<React.CSSProperties>({ width: "22px" });
  const [widthGreen4, setWidthGreen4] = useState<React.CSSProperties>({ width: "22px" });

  const [widthYellow1, setWidthYellow1] = useState<React.CSSProperties>({ width: "22px" });
  const [widthYellow2, setWidthYellow2] = useState<React.CSSProperties>({ width: "22px" });
  const [widthYellow3, setWidthYellow3] = useState<React.CSSProperties>({ width: "22px" });
  const [widthYellow4, setWidthYellow4] = useState<React.CSSProperties>({ width: "22px" });

  const pieces: PieceId[] = [
    "blue-1",
    "blue-2",
    "blue-3",
    "blue-4",
    "red-1",
    "red-2",
    "red-3",
    "red-4",
    "green-1",
    "green-2",
    "green-3",
    "green-4",
    "yellow-1",
    "yellow-2",
    "yellow-3",
    "yellow-4",
  ];

  const pathPlayer1: Position[] = ['0', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];
  const pathPlayer2: Position[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9'];
  const pathPlayer3: Position[] = ['0', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9'];
  const pathPlayer4: Position[] = ['0', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8', 'y9'];
  
  // Update winners
  function updateWinners(pos: Position[]): void {
    const new_winners = [...winners];
    for(let p of players) {
      if(!new_winners.includes(p)) {
        if(p === 1 && pos[0] === pos[1] && pos[1] === pos[2] && pos[2] === pos[3] && pos[3] === 'b6' ) {
          new_winners.push(p);
          const next = nextPlayer();
          if (next !== 0) setPlayer(next);
        }else if(p === 2 && pos[4] === pos[5] && pos[5] === pos[6] && pos[6] === pos[7] && pos[7] === 'r6' ) {
          new_winners.push(p);
          const next = nextPlayer();
          if (next !== 0) setPlayer(next);
        }else if(p === 3 && pos[8] === pos[9] && pos[9] === pos[10] && pos[10] === pos[11] && pos[11] === 'g6' ) {
          new_winners.push(p);
          const next = nextPlayer();
          if (next !== 0) setPlayer(next);
        }else if(p === 4 && pos[12] === pos[13] && pos[13] === pos[14] && pos[14] === pos[15] && pos[15] === 'y6' ) {
          new_winners.push(p);
          const next = nextPlayer();
          if (next !== 0) setPlayer(next);
        }
      }
    }
    setWinners(new_winners);
  }

  // Update size of caracter
  function updateWidth(pos: Position[]): void {
    for (let i = 0; i < pos.length; i++) {
      if (pos[i] !== "0") {
        const nb = pos.filter((elt) => elt === pos[i]).length;
        if (nb > 1) {
          switch (i) {
            case 0:
              setWidthBlue1({ width: "calc(22px / " + nb + ")" });
              break;
            case 1:
              setWidthBlue2({ width: "calc(22px / " + nb + ")" });
              break;
            case 2:
              setWidthBlue3({ width: "calc(22px / " + nb + ")" });
              break;
            case 3:
              setWidthBlue4({ width: "calc(22px / " + nb + ")" });
              break;
            case 4:
              setWidthRed1({ width: "calc(22px / " + nb + ")" });
              break;
            case 5:
              setWidthRed2({ width: "calc(22px / " + nb + ")" });
              break;
            case 6:
              setWidthRed3({ width: "calc(22px / " + nb + ")" });
              break;
            case 7:
              setWidthRed4({ width: "calc(22px / " + nb + ")" });
              break;
            case 8:
              setWidthGreen1({ width: "calc(22px / " + nb + ")" });
              break;
            case 9:
              setWidthGreen2({ width: "calc(22px / " + nb + ")" });
              break;
            case 10:
              setWidthGreen3({ width: "calc(22px / " + nb + ")" });
              break;
            case 11:
              setWidthGreen4({ width: "calc(22px / " + nb + ")" });
              break;
            case 12:
              setWidthYellow1({ width: "calc(22px / " + nb + ")" });
              break;
            case 13:
              setWidthYellow2({ width: "calc(22px / " + nb + ")" });
              break;
            case 14:
              setWidthYellow3({ width: "calc(22px / " + nb + ")" });
              break;
            case 15:
              setWidthYellow4({ width: "calc(22px / " + nb + ")" });
              break;
          }
        } else {
          switch (i) {
            case 0:
              setWidthBlue1({ width: "22px" });
              break;
            case 1:
              setWidthBlue2({ width: "22px" });
              break;
            case 2:
              setWidthBlue3({ width: "22px" });
              break;
            case 3:
              setWidthBlue4({ width: "22px" });
              break;
            case 4:
              setWidthRed1({ width: "22px" });
              break;
            case 5:
              setWidthRed2({ width: "22px" });
              break;
            case 6:
              setWidthRed3({ width: "22px" });
              break;
            case 7:
              setWidthRed4({ width: "22px" });
              break;
            case 8:
              setWidthGreen1({ width: "22px" });
              break;
            case 9:
              setWidthGreen2({ width: "22px" });
              break;
            case 10:
              setWidthGreen3({ width: "22px" });
              break;
            case 11:
              setWidthGreen4({ width: "22px" });
              break;
            case 12:
              setWidthYellow1({ width: "22px" });
              break;
            case 13:
              setWidthYellow2({ width: "22px" });
              break;
            case 14:
              setWidthYellow3({ width: "22px" });
              break;
            case 15:
              setWidthYellow4({ width: "22px" });
              break;
          }
        }
      }else {
        switch (i) {
          case 0:
            setWidthBlue1({ width: "22px" });
            break;
          case 1:
            setWidthBlue2({ width: "22px" });
            break;
          case 2:
            setWidthBlue3({ width: "22px" });
            break;
          case 3:
            setWidthBlue4({ width: "22px" });
            break;
          case 4:
            setWidthRed1({ width: "22px" });
            break;
          case 5:
            setWidthRed2({ width: "22px" });
            break;
          case 6:
            setWidthRed3({ width: "22px" });
            break;
          case 7:
            setWidthRed4({ width: "22px" });
            break;
          case 8:
            setWidthGreen1({ width: "22px" });
            break;
          case 9:
            setWidthGreen2({ width: "22px" });
            break;
          case 10:
            setWidthGreen3({ width: "22px" });
            break;
          case 11:
            setWidthGreen4({ width: "22px" });
            break;
          case 12:
            setWidthYellow1({ width: "22px" });
            break;
          case 13:
            setWidthYellow2({ width: "22px" });
            break;
          case 14:
            setWidthYellow3({ width: "22px" });
            break;
          case 15:
            setWidthYellow4({ width: "22px" });
            break;
        }
      }
    }
  }

  // generate the next place of the caracter
  function getNextPosition(currentPlace: Position): Position {
    if (currentPlace === "0") {
      if (player === 1) {
        return "40";
      } else if (player === 2) {
        return "1";
      } else if (player === 3) {
        return "14";
      } else if (player === 4) {
        return "27";
      }
      return "0"; // fallback
    } else {
      if (currentPlace === "52") {
        return "1";
      }
      if (player === 1) {
        if (currentPlace.charAt(0) !== "b" && Number(currentPlace) !== 38) {
          return (Number(currentPlace) + 1).toString();
        } else if (
          currentPlace.charAt(0) !== "b" &&
          Number(currentPlace) === 38
        ) {
          return "b1";
        } else {
          return "b" + (Number(currentPlace.charAt(1)) + 1).toString();
        }
      } else if (player === 2) {
        if (currentPlace.charAt(0) !== "r" && Number(currentPlace) !== 51) {
          return (Number(currentPlace) + 1).toString();
        } else if (
          currentPlace.charAt(0) !== "r" &&
          Number(currentPlace) === 51
        ) {
          return "r1";
        } else {
          return "r" + (Number(currentPlace.charAt(1)) + 1).toString();
        }
      } else if (player === 3) {
        if (currentPlace.charAt(0) !== "g" && Number(currentPlace) !== 12) {
          return (Number(currentPlace) + 1).toString();
        } else if (
          currentPlace.charAt(0) !== "g" &&
          Number(currentPlace) === 12
        ) {
          return "g1";
        } else {
          return "g" + (Number(currentPlace.charAt(1)) + 1).toString();
        }
      } else if (player === 4) {
        if (currentPlace.charAt(0) !== "y" && Number(currentPlace) !== 25) {
          return (Number(currentPlace) + 1).toString();
        } else if (
          currentPlace.charAt(0) !== "y" &&
          Number(currentPlace) === 25
        ) {
          return "y1";
        } else {
          return "y" + (Number(currentPlace.charAt(1)) + 1).toString();
        }
      }
      return currentPlace; // fallback
    }
    return currentPlace; // fallback
  }

  // disable pieces
  function disablePieces() {
    setBlue1(false);
    setBlue2(false);
    setBlue3(false);
    setBlue4(false);
    setRed1(false);
    setRed2(false);
    setRed3(false);
    setRed4(false);
    setGreen1(false);
    setGreen2(false);
    setGreen3(false);
    setGreen4(false);
    setYellow1(false);
    setYellow2(false);
    setYellow3(false);
    setYellow4(false);
  }

  // is this piece able to move or not
  function isAbleToMove(id: PieceId): boolean {
    switch (id) {
      case "blue-1":
        return blue1;
      case "blue-2":
        return blue2;
      case "blue-3":
        return blue3;
      case "blue-4":
        return blue4;

      case "red-1":
        return red1;
      case "red-2":
        return red2;
      case "red-3":
        return red3;
      case "red-4":
        return red4;

      case "green-1":
        return green1;
      case "green-2":
        return green2;
      case "green-3":
        return green3;
      case "green-4":
        return green4;

      case "yellow-1":
        return yellow1;
      case "yellow-2":
        return yellow2;
      case "yellow-3":
        return yellow3;
      case "yellow-4":
        return yellow4;
    }
  }

  // Move caracter without click
  function move_piece(id: PieceId, nb: number): void {
    updateScore(id, nb);
    disablePieces();
    let currentPlace = positions[pieces.indexOf(id)];
    if (nb === 6 && currentPlace === "0") {
      moveToNextPlace(id, currentPlace, false, true);
    } else {
      for (let i = 1; i <= nb; i++) {
        if (i === nb) {
          if (
            nb !== 6 &&
            !["b6", "r6", "y6", "g6"].includes(getNextPosition(currentPlace))
          ) {
            const place = getNextPosition(currentPlace);
              if(['1', '14', '27', '40'].includes(place)){
                moveToNextPlace(id, currentPlace, true, true);
              }else {
                const indexes: number[] = [];
                for(let i = 0; i <= 15; i++) {
                  if(positions[i] === place) {
                    indexes.push(i);
                  }
                }
                const piecesToReturn: PieceToReturn[] = [];
                let b = false;
                for(let i of indexes) {
                  if(!(player * 4 - 4 <= i && i <= player * 4 - 1)) {
                    piecesToReturn.push({piece : pieces[i], place : place});
                    b = true;
                  }
                }
                if(b === true) {
                  moveToNextPlace(id, currentPlace, false, true);
                  for (let elt of piecesToReturn) {
                    returnPieceToHome(elt.piece, elt.place);
                  }
                }else {
                  moveToNextPlace(id, currentPlace, true, true);
                }
              }
          } else {
            const place = getNextPosition(currentPlace);
              if(['1', '14', '27', '40'].includes(place)){
                moveToNextPlace(id, currentPlace, true, true);
              }else {
                const indexes: number[] = [];
                for(let i = 0; i <= 15; i++) {
                  if(positions[i] === place) {
                    indexes.push(i);
                  }
                }
                const piecesToReturn: PieceToReturn[] = [];
                let b = false;
                for(let i of indexes) {
                  if(!(player * 4 - 4 <= i && i <= player * 4 - 1)) {
                    piecesToReturn.push({piece : pieces[i], place : place});
                    b = true;
                  }
                }
                if(b === true) {
                  moveToNextPlace(id, currentPlace, false, true);
                  for (let elt of piecesToReturn) {
                    returnPieceToHome(elt.piece, elt.place);
                  }
                }else {
                  moveToNextPlace(id, currentPlace, false, true);
                }
              }
            // moveToNextPlace(id, currentPlace, false, true);
          }
        } else {
          moveToNextPlace(id, currentPlace, false, false);
          currentPlace = getNextPosition(currentPlace);
        }
      }
    }
  }

  // Update score
  function updateScore(id: PieceId, nb: number): void {
    const new_scores = [...scores];
    new_scores[pieces.indexOf(id)] = new_scores[pieces.indexOf(id)] + nb;
    setScores(new_scores);
    if(player === 1){
      setScore1(Math.floor((new_scores[0] + new_scores[1] + new_scores[2] + new_scores[3]) * 100 / 248));
    }else if(player === 2) {
      setScore2(Math.floor((new_scores[4] + new_scores[5] + new_scores[6] + new_scores[7]) * 100 / 248));
    }else if(player === 3) {
      setScore3(Math.floor((new_scores[8] + new_scores[9] + new_scores[10] + new_scores[11]) * 100 / 248));
    }else {
      setScore4(Math.floor((new_scores[12] + new_scores[13] + new_scores[14] + new_scores[15]) * 100 / 248));
    }
  }

  // Update score
  function downScore(id: PieceId): void {
    const new_scores = [...scores];
    new_scores[pieces.indexOf(id)] = 0;
    setScores(new_scores);
    if(id.includes('blue')){
      setScore1(Math.floor((new_scores[0] + new_scores[1] + new_scores[2] + new_scores[3]) * 100 / 248));
    }else if(id.includes('red')) {
      setScore2(Math.floor((new_scores[4] + new_scores[5] + new_scores[6] + new_scores[7]) * 100 / 248));
    }else if(id.includes('green')) {
      setScore3(Math.floor((new_scores[8] + new_scores[9] + new_scores[10] + new_scores[11]) * 100 / 248));
    }else {
      setScore4(Math.floor((new_scores[12] + new_scores[13] + new_scores[14] + new_scores[15]) * 100 / 248));
    }
  }

  // Move caracter
  function move(id: PieceId): void {
    if (isAbleToMove(id)) {
      window.navigator.vibrate(50);
      updateScore(id, steps);
      disablePieces();
      let currentPlace = positions[pieces.indexOf(id)];
      if (steps === 6 && currentPlace === "0") {
        moveToNextPlace(id, currentPlace, false, true);
      } else {
        for (let i = 1; i <= steps; i++) {
          if (i === steps) {
            if (
              steps !== 6 &&
              !["b6", "r6", "y6", "g6"].includes(getNextPosition(currentPlace))
            ) {
              const place = getNextPosition(currentPlace);
              if(['1', '14', '27', '40'].includes(place)){
                moveToNextPlace(id, currentPlace, true, true);
              }else {
                const indexes: number[] = [];
                for(let i = 0; i <= 15; i++) {
                  if(positions[i] === place) {
                    indexes.push(i);
                  }
                }
                const piecesToReturn: PieceToReturn[] = [];
                let b = false;
                for(let i of indexes) {
                  if(!(player * 4 - 4 <= i && i <= player * 4 - 1)) {
                    piecesToReturn.push({piece : pieces[i], place : place});
                    b = true;
                  }
                }
                if(b === true) {
                  moveToNextPlace(id, currentPlace, false, true);
                  for (let elt of piecesToReturn) {
                    returnPieceToHome(elt.piece, elt.place);
                  }
                }else {
                  moveToNextPlace(id, currentPlace, true, true);
                }
              }
              
            } else {
              const place = getNextPosition(currentPlace);
              if(['1', '14', '27', '40'].includes(place)){
                moveToNextPlace(id, currentPlace, true, true);
              }else {
                const indexes: number[] = [];
                for(let i = 0; i <= 15; i++) {
                  if(positions[i] === place) {
                    indexes.push(i);
                  }
                }
                const piecesToReturn: PieceToReturn[] = [];
                let b = false;
                for(let i of indexes) {
                  if(!(player * 4 - 4 <= i && i <= player * 4 - 1)) {
                    piecesToReturn.push({piece : pieces[i], place : place});
                    b = true;
                  }
                }
                if(b === true) {
                  moveToNextPlace(id, currentPlace, false, true);
                  for (let elt of piecesToReturn) {
                    returnPieceToHome(elt.piece, elt.place);
                  }
                }else {
                  moveToNextPlace(id, currentPlace, false, true);
                }
              }
              // moveToNextPlace(id, currentPlace, false, true);
            }
          } else {
            moveToNextPlace(id, currentPlace, false, false);
            currentPlace = getNextPosition(currentPlace);
          }
        }
      }
    }
  }

  function moveToNextPlace(id: PieceId, currentPlace: Position, next: boolean, able: boolean): void {
    $("#" + id).animate({ top: "auto" }, 260, function () {
      $("#" + id)
        .detach()
        .appendTo("#" + getNextPosition(currentPlace));
      let pos = [...positions];
      pos[pieces.indexOf(id)] = getNextPosition(currentPlace);
      setPositions(pos);
      updateWidth(pos);
      if (next) {
        const nextPlayerValue = nextPlayer();
        if (nextPlayerValue !== 0) setPlayer(nextPlayerValue);
      }
      updateWinners(pos);
      if (able) {
        setAbleToPlay(true);
      }
    });
  }

  function getPrevPosition(currentPlace: Position, id: PieceId): Position | undefined {
    if(currentPlace !== '0') {
      if(id.includes('blue')) {
        return pathPlayer1[pathPlayer1.indexOf(currentPlace) - 1];
      }else if(id.includes('red')) {
        return pathPlayer2[pathPlayer2.indexOf(currentPlace) - 1];
      }else if(id.includes('green')) {
        return pathPlayer3[pathPlayer3.indexOf(currentPlace) - 1];
      }else {
        return pathPlayer4[pathPlayer4.indexOf(currentPlace) - 1];
      }
    }
  }

  function moveToPrevPlace(id: PieceId, currentPlace: Position): void {
    const prev = getPrevPosition(currentPlace, id);
    if (prev && prev !== '0') {
      $("#" + id).animate({ top: "auto" }, 180, function () {
        $("#" + id)
          .detach()
          .appendTo("#" + prev);
        let pos = [...positions];
        pos[pieces.indexOf(id)] = prev;
        setPositions(pos);
        updateWidth(pos);
      });
    } else {
      $("#" + id).animate({ top: "auto" }, 200, function () {
        $("#" + id)
          .detach()
          .appendTo("#pos-" + id);
        let pos = [...positions];
        pos[pieces.indexOf(id)] = prev || '0';
        setPositions(pos);
        updateWidth(pos);
        setAbleToPlay(true);
      });
    }
  }

  function returnPieceToHome(id: PieceId, currentPlace: Position): void {
    downScore(id);
    let place: Position | undefined = currentPlace;
    while(place && place !== '0') {
      moveToPrevPlace(id, place);
      place = getPrevPosition(place, id);
    }
  }

  // Generate a random number between 2 and 10, including both 2 and 10
  function generateRandomIntegerInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function nextPlayer(): Player | 0 {
    if(winners.length < players.length - 1) {
      const w = winners;
      const pl: Player[] = [];
      for(let p of players) {
        if(!w.includes(p)) {
          pl.push(p);
        }
      }
      return getNext(pl);
    }else {
      return 0;
    }
  }

  function getNext(p: Player[]): Player {
    if (p.indexOf(player) < p.length - 1) {
      return p[p.indexOf(player) + 1];
    }
    return p[0];
  }

  function allowPlayer(p: Player, nb: number): void {
    let allow = false;
    const allowed: PieceId[] = [];
    if (p === 1) {
      const pos = ["b1", "b2", "b3", "b4", "b5", "b6"];
      if (nb === 6) {
        if (positions[0] === "0" || !pos.includes(positions[0])) {
          setBlue1(true);
          allow = true;
          allowed.push(pieces[0]);
        }
        if (positions[1] === "0" || !pos.includes(positions[1])) {
          setBlue2(true);
          allow = true;
          allowed.push(pieces[1]);
        }
        if (positions[2] === "0" || !pos.includes(positions[2])) {
          setBlue3(true);
          allow = true;
          allowed.push(pieces[2]);
        }
        if (positions[3] === "0" || !pos.includes(positions[3])) {
          setBlue4(true);
          allow = true;
          allowed.push(pieces[3]);
        }
      } else {
        if (
          (!pos.includes(positions[0]) ||
            nb + pos.indexOf(positions[0]) <= 5) &&
          positions[0] !== "0"
        ) {
          setBlue1(true);
          allow = true;
          allowed.push(pieces[0]);
        }
        if (
          (!pos.includes(positions[1]) ||
            nb + pos.indexOf(positions[1]) <= 5) &&
          positions[1] !== "0"
        ) {
          setBlue2(true);
          allow = true;
          allowed.push(pieces[1]);
        }
        if (
          (!pos.includes(positions[2]) ||
            nb + pos.indexOf(positions[2]) <= 5) &&
          positions[2] !== "0"
        ) {
          setBlue3(true);
          allow = true;
          allowed.push(pieces[2]);
        }
        if (
          (!pos.includes(positions[3]) ||
            nb + pos.indexOf(positions[3]) <= 5) &&
          positions[3] !== "0"
        ) {
          setBlue4(true);
          allow = true;
          allowed.push(pieces[3]);
        }
      }
    } else if (p === 2) {
      const pos = ["r1", "r2", "r3", "r4", "r5", "r6"];
      if (nb === 6) {
        if (positions[4] === "0" || !pos.includes(positions[4])) {
          setRed1(true);
          allow = true;
          allowed.push(pieces[4]);
        }
        if (positions[5] === "0" || !pos.includes(positions[5])) {
          setRed2(true);
          allow = true;
          allowed.push(pieces[5]);
        }
        if (positions[6] === "0" || !pos.includes(positions[6])) {
          setRed3(true);
          allow = true;
          allowed.push(pieces[6]);
        }
        if (positions[7] === "0" || !pos.includes(positions[7])) {
          setRed4(true);
          allow = true;
          allowed.push(pieces[7]);
        }
      } else {
        if (
          (!pos.includes(positions[4]) ||
            nb + pos.indexOf(positions[4]) <= 5) &&
          positions[4] !== "0"
        ) {
          setRed1(true);
          allow = true;
          allowed.push(pieces[4]);
        }
        if (
          (!pos.includes(positions[5]) ||
            nb + pos.indexOf(positions[5]) <= 5) &&
          positions[5] !== "0"
        ) {
          setRed2(true);
          allow = true;
          allowed.push(pieces[5]);
        }
        if (
          (!pos.includes(positions[6]) ||
            nb + pos.indexOf(positions[6]) <= 5) &&
          positions[6] !== "0"
        ) {
          setRed3(true);
          allow = true;
          allowed.push(pieces[6]);
        }
        if (
          (!pos.includes(positions[7]) ||
            nb + pos.indexOf(positions[7]) <= 5) &&
          positions[7] !== "0"
        ) {
          setRed4(true);
          allow = true;
          allowed.push(pieces[7]);
        }
      }
    } else if (p === 3) {
      const pos = ["g1", "g2", "g3", "g4", "g5", "g6"];
      if (nb === 6) {
        if (positions[8] === "0" || !pos.includes(positions[8])) {
          setGreen1(true);
          allow = true;
          allowed.push(pieces[8]);
        }
        if (positions[9] === "0" || !pos.includes(positions[9])) {
          setGreen2(true);
          allow = true;
          allowed.push(pieces[9]);
        }
        if (positions[10] === "0" || !pos.includes(positions[10])) {
          setGreen3(true);
          allow = true;
          allowed.push(pieces[10]);
        }
        if (positions[11] === "0" || !pos.includes(positions[11])) {
          setGreen4(true);
          allow = true;
          allowed.push(pieces[11]);
        }
      } else {
        if (
          (!pos.includes(positions[8]) ||
            nb + pos.indexOf(positions[8]) <= 5) &&
          positions[8] !== "0"
        ) {
          setGreen1(true);
          allow = true;
          allowed.push(pieces[8]);
        }
        if (
          (!pos.includes(positions[9]) ||
            nb + pos.indexOf(positions[9]) <= 5) &&
          positions[9] !== "0"
        ) {
          setGreen2(true);
          allow = true;
          allowed.push(pieces[9]);
        }
        if (
          (!pos.includes(positions[10]) ||
            nb + pos.indexOf(positions[10]) <= 5) &&
          positions[10] !== "0"
        ) {
          setGreen3(true);
          allow = true;
          allowed.push(pieces[10]);
        }
        if (
          (!pos.includes(positions[11]) ||
            nb + pos.indexOf(positions[11]) <= 5) &&
          positions[11] !== "0"
        ) {
          setGreen4(true);
          allow = true;
          allowed.push(pieces[11]);
        }
      }
    } else if (p === 4) {
      const pos = ["y1", "y2", "y3", "y4", "y5", "y6"];
      if (nb === 6) {
        if (positions[12] === "0" || !pos.includes(positions[12])) {
          setYellow1(true);
          allow = true;
          allowed.push(pieces[12]);
        }
        if (positions[13] === "0" || !pos.includes(positions[13])) {
          setYellow2(true);
          allow = true;
          allowed.push(pieces[13]);
        }
        if (positions[14] === "0" || !pos.includes(positions[14])) {
          setYellow3(true);
          allow = true;
          allowed.push(pieces[14]);
        }
        if (positions[15] === "0" || !pos.includes(positions[15])) {
          setYellow4(true);
          allow = true;
          allowed.push(pieces[15]);
        }
      } else {
        if (
          (!pos.includes(positions[12]) ||
            nb + pos.indexOf(positions[12]) <= 5) &&
          positions[12] !== "0"
        ) {
          setYellow1(true);
          allow = true;
          allowed.push(pieces[12]);
        }
        if (
          (!pos.includes(positions[13]) ||
            nb + pos.indexOf(positions[13]) <= 5) &&
          positions[13] !== "0"
        ) {
          setYellow2(true);
          allow = true;
          allowed.push(pieces[13]);
        }
        if (
          (!pos.includes(positions[14]) ||
            nb + pos.indexOf(positions[14]) <= 5) &&
          positions[14] !== "0"
        ) {
          setYellow3(true);
          allow = true;
          allowed.push(pieces[14]);
        }
        if (
          (!pos.includes(positions[15]) ||
            nb + pos.indexOf(positions[15]) <= 5) &&
          positions[15] !== "0"
        ) {
          setYellow4(true);
          allow = true;
          allowed.push(pieces[15]);
        }
      }
    }
    if (!allow) {
      const nextPlayerValue = nextPlayer();
      if (nextPlayerValue !== 0) {
        setPlayer(nextPlayerValue);
      }
      setAbleToPlay(true);
    } else {
      if (allowed.length === 1) {
        move_piece(allowed[0], nb);
      }
    }
  }

  // Play function
  function play(p: Player): void {
    if (p === player && ableToplay) {
      window.navigator.vibrate(50);
      setAbleToPlay(false);
      for (let i = 0; i <= 410; i++) {
        setTimeout(function () {
          const nb = generateRandomIntegerInRange(1, 6);
          setSteps(nb);
          if (i === 410) {
            allowPlayer(player, nb);
          }
        }, 1);
      }
    }
  }

  const one = (
    <React.Fragment>
      <div className="nard point_container">
        <div className="one_point"></div>
      </div>
    </React.Fragment>
  );

  const two = (
    <React.Fragment>
      <div className="nard">
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          >
            <div className="one_point"></div>
          </div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          >
            <div className="one_point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );

  const three = (
    <React.Fragment>
      <div className="nard">
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          >
            <div className="point"></div>
          </div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          ></div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 1px)" }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );

  const four = (
    <React.Fragment>
      <div className="nard">
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          >
            <div className="point"></div>
          </div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "50%", height: "calc((100vw - 152vh)/8)" }}
          >
            <div className="point"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  const five = (
    <React.Fragment>
      <div className="nard">
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          ></div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  const six = (
    <React.Fragment>
      <div className="nard">
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
        </div>
        <div className="line" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          ></div>
          <div
            className="column point_container"
            style={{ width: "33%", height: "calc((100vw - 152vh)/12 - 3px)" }}
          >
            <div className="point"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div id="parent_div">
      {settings && (
        <div className="setting">
          <div className="setting-header">
            <h1 className="setting-title">Settings</h1>
          </div>
          <div className="setting-content">
            <div className="setting-left">
              <div className="info-card">
                <div className="info-icon">🎮</div>
                <h2 className="info-title">4 Người Chơi</h2>
                <p className="info-subtitle">Game này luôn sử dụng 4 người chơi</p>
              </div>
            </div>
            <div className="setting-right">
              <div className="players-container">
                <div className="player-row">
                  <div className="player-avatar-wrapper">
                    <img className="imgSetting" src={blueSetting} alt="Player 1" />
                  </div>
                  <input
                    className="playerName"
                    type="text"
                    placeholder="Nhập tên người chơi"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                  />
                </div>
                <div className="player-row">
                  <div className="player-avatar-wrapper">
                    <img className="imgSetting" src={redSetting} alt="Player 2" />
                  </div>
                  <input
                    className="playerName"
                    type="text"
                    placeholder="Nhập tên người chơi"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                  />
                </div>
                <div className="player-row">
                  <div className="player-avatar-wrapper">
                    <img className="imgSetting" src={greenSetting} alt="Player 3" />
                  </div>
                  <input
                    className="playerName"
                    type="text"
                    placeholder="Nhập tên người chơi"
                    value={player3}
                    onChange={(e) => setPlayer3(e.target.value)}
                  />
                </div>
                <div className="player-row">
                  <div className="player-avatar-wrapper">
                    <img className="imgSetting" src={yellowSetting} alt="Player 4" />
                  </div>
                  <input
                    className="playerName"
                    type="text"
                    placeholder="Nhập tên người chơi"
                    value={player4}
                    onChange={(e) => setPlayer4(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="setting-footer">
            <button className="startGame" onClick={() => setSettings(false)}>
              Bắt Đầu Chơi
            </button>
          </div>
        </div>
      )}
      {!settings && (
        <div className="container_game">
          <div className="control-1">
            <div className="control-player">
              <br />
              <br />
              <div className="dashboard">
                <div className="profile">
                  {player1} <br />
                  <img src={profile} alt="" className="profile_pic" /> <br />
                  Score : {score1 + "%"}
                </div>
                {player === 1 && (
                  <div className="de" onClick={() => play(1)}>
                    {steps === 1 && one}
                    {steps === 2 && two}
                    {steps === 3 && three}
                    {steps === 4 && four}
                    {steps === 5 && five}
                    {steps === 6 && six}
                  </div>
                )}
                {player !== 1 && (
                  <div className="de" onClick={() => play(1)}>
                    {winners.length > 0 && winners[0] === 1 && <img alt="" src={winner1} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 1 && winners[1] === 1 && <img alt="" src={winner2} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 2 && winners[2] === 1 && <img alt="" src={winner3} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                  </div>
                )}
              </div>
            </div>
            <div className="control-player">
              <br />
              <br />
              <br />
              <br />
              <div className="dashboard">
                <div className="profile">
                  {player4} <br />
                  <img src={profile} alt="" className="profile_pic" /> <br />
                  Score : {score4 + "%"}
                </div>
                {player === 4 && (
                  <div className="de" onClick={() => play(4)}>
                    {steps === 1 && one}
                    {steps === 2 && two}
                    {steps === 3 && three}
                    {steps === 4 && four}
                    {steps === 5 && five}
                    {steps === 6 && six}
                  </div>
                )}
                {player !== 4 && (
                  <div className="de" onClick={() => play(4)}>
                    {winners.length > 0 && winners[0] === 4 && <img alt="" src={winner1} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 1 && winners[1] === 4 && <img alt="" src={winner2} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 2 && winners[2] === 4 && <img alt="" src={winner3} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="control-2">
            <div className="row">
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div id="50" className="col left_top"></div>
              <div id="51" className="col left_top"></div>
              <div id="52" className="col left_top right"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
            </div>
            <div className="row">
              <div className="col blue"></div>
              <div id="pos-blue-1" className="col bottom_right_blue">
                <img
                  id="blue-1"
                  className={blue1 ? "caracter abletomove" : "caracter"}
                  src={blue}
                  onClick={() => move("blue-1")}
                  style={widthBlue1}
                  alt=""
                />
              </div>
              <div className="col bottom_left_blue"></div>
              <div id="pos-blue-2" className="col bottom_right_blue">
                <img
                  style={widthBlue2}
                  id="blue-2"
                  className={blue2 ? "caracter abletomove" : "caracter"}
                  src={blue}
                  onClick={() => move("blue-2")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_blue"></div>
              <div className="col blue"></div>
              <div id="49" className="col left_top"></div>
              <div id="r1" className="col red left_top"></div>
              <div id="1" className="col red left_top right"></div>
              <div className="col red"></div>
              <div id="pos-red-1" className="col bottom_right_red">
                <img
                  style={widthRed1}
                  id="red-1"
                  className={red1 ? "caracter abletomove" : "caracter"}
                  src={red}
                  onClick={() => move("red-1")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_red"></div>
              <div id="pos-red-2" className="col bottom_right_red">
                <img
                  style={widthRed2}
                  id="red-2"
                  className={red2 ? "caracter abletomove" : "caracter"}
                  src={red}
                  onClick={() => move("red-2")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_red"></div>
              <div className="col red"></div>
            </div>
            <div className="row">
              <div className="col blue"></div>
              <div className="col top_right_blue"></div>
              <div className="col top_left_blue"></div>
              <div className="col top_right_blue"></div>
              <div className="col top_left_blue"></div>
              <div className="col blue"></div>
              <div id="48" className="col left_top"></div>
              <div id="r2" className="col red left_top"></div>
              <div id="2" className="col left_top right"></div>
              <div className="col red"></div>
              <div className="col top_right_red"></div>
              <div className="col top_left_red"></div>
              <div className="col top_right_red"></div>
              <div className="col top_left_red"></div>
              <div className="col red"></div>
            </div>
            <div className="row">
              <div className="col blue"></div>
              <div id="pos-blue-3" className="col bottom_right_blue">
                <img
                  style={widthBlue3}
                  id="blue-3"
                  className={blue3 ? "caracter abletomove" : "caracter"}
                  src={blue}
                  onClick={() => move("blue-3")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_blue"></div>
              <div id="pos-blue-4" className="col bottom_right_blue">
                <img
                  style={widthBlue4}
                  id="blue-4"
                  className={blue4 ? "caracter abletomove" : "caracter"}
                  src={blue}
                  onClick={() => move("blue-4")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_blue"></div>
              <div className="col blue"></div>
              <div id="47" className="col left_top"></div>
              <div id="r3" className="col red left_top"></div>
              <div id="3" className="col left_top right"></div>
              <div className="col red"></div>
              <div id="pos-red-3" className="col bottom_right_red">
                <img
                  style={widthRed3}
                  id="red-3"
                  className={red3 ? "caracter abletomove" : "caracter"}
                  src={red}
                  onClick={() => move("red-3")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_red"></div>
              <div id="pos-red-4" className="col bottom_right_red">
                <img
                  style={widthRed4}
                  id="red-4"
                  className={red4 ? "caracter abletomove" : "caracter"}
                  src={red}
                  onClick={() => move("red-4")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_red"></div>
              <div className="col red"></div>
            </div>
            <div className="row">
              <div className="col blue"></div>
              <div className="col top_right_blue"></div>
              <div className="col top_left_blue"></div>
              <div className="col top_right_blue"></div>
              <div className="col top_left_blue"></div>
              <div className="col blue"></div>
              <div id="46" className="col left_top"></div>
              <div id="r4" className="col red left_top"></div>
              <div id="4" className="col left_top right"></div>
              <div className="col red"></div>
              <div className="col top_right_red"></div>
              <div className="col top_left_red"></div>
              <div className="col top_right_red"></div>
              <div className="col top_left_red"></div>
              <div className="col red"></div>
            </div>
            <div className="row">
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div className="col blue"></div>
              <div id="45" className="col left_top bottom"></div>
              <div id="r5" className="col red left_top bottom"></div>
              <div id="5" className="col left_top bottom right"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
              <div className="col red"></div>
            </div>
            <div className="row">
              <div id="39" className="col left_top"></div>
              <div id="40" className="col blue left_top"></div>
              <div id="41" className="col left_top"></div>
              <div id="42" className="col left_top"></div>
              <div id="43" className="col left_top"></div>
              <div id="44" className="col left_top"></div>
              <div
                className="col"
                style={{
                  background:
                    "linear-gradient(45deg, rgb(38, 113, 252) 50%, rgb(192, 0, 0) 50%)",
                }}
              ></div>
              <div id="r6" className="col red"></div>
              <div
                className="col"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(192, 0, 0) 50%, green 50%)",
                }}
              ></div>
              <div id="6" className="col left_top"></div>
              <div id="7" className="col left_top"></div>
              <div id="8" className="col left_top"></div>
              <div id="9" className="col left_top"></div>
              <div id="10" className="col left_top"></div>
              <div id="11" className="col left_top"></div>
            </div>
            <div className="row">
              <div id="38" className="col left_top"></div>
              <div id="b1" className="col left_top blue"></div>
              <div id="b2" className="col left_top blue"></div>
              <div id="b3" className="col left_top blue"></div>
              <div id="b4" className="col left_top blue"></div>
              <div id="b5" className="col left_top blue right">
                {/* <img className={blue1 ? "caracter abletomove": "caracter"} src={green} alt=""/> */}
              </div>
              <div id="b6" className="col blue"></div>
              <div className="col" id="center"></div>
              <div id="g6" className="col green"></div>
              <div id="g5" className="col left_top green">
                {/* <img className={blue1 ? "caracter abletomove": "caracter"} src={red} alt=""/> */}
              </div>
              <div id="g4" className="col left_top green"></div>
              <div id="g3" className="col left_top green"></div>
              <div id="g2" className="col left_top green"></div>
              <div id="g1" className="col left_top green"></div>
              <div id="12" className="col left_top"></div>
            </div>
            <div className="row">
              <div id="37" className="col left_top bottom"></div>
              <div id="36" className="col left_top bottom"></div>
              <div id="35" className="col left_top bottom"></div>
              <div id="34" className="col left_top bottom"></div>
              <div id="33" className="col left_top bottom"></div>
              <div id="32" className="col left_top bottom"></div>
              <div
                className="col"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(38, 113, 252) 50%, rgb(216, 216, 0) 50%)",
                }}
              ></div>
              <div id="y6" className="col yellow"></div>
              <div
                className="col"
                style={{
                  background:
                    "linear-gradient(45deg, rgb(216, 216, 0) 50%, green 50%)",
                }}
              ></div>
              <div id="18" className="col left_top bottom"></div>
              <div id="17" className="col left_top bottom"></div>
              <div id="16" className="col left_top bottom"></div>
              <div id="15" className="col left_top bottom"></div>
              <div id="14" className="col left_top bottom green"></div>
              <div id="13" className="col left_top bottom"></div>
            </div>
            <div className="row">
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div id="31" className="col left_top"></div>
              <div id="y5" className="col left_top yellow"></div>
              <div id="19" className="col left_top right"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
            </div>
            <div className="row">
              <div className="col yellow"></div>
              <div id="pos-yellow-1" className="col bottom_right_yellow">
                <img
                  style={widthYellow1}
                  id="yellow-1"
                  className={yellow1 ? "caracter abletomove" : "caracter"}
                  src={yellow}
                  onClick={() => move("yellow-1")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_yellow"></div>
              <div id="pos-yellow-2" className="col bottom_right_yellow">
                <img
                  style={widthYellow2}
                  id="yellow-2"
                  className={yellow2 ? "caracter abletomove" : "caracter"}
                  src={yellow}
                  onClick={() => move("yellow-2")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_yellow"></div>
              <div className="col yellow"></div>
              <div id="30" className="col left_top"></div>
              <div id="y4" className="col left_top yellow"></div>
              <div id="20" className="col left_top right"></div>
              <div className="col green"></div>
              <div id="pos-green-1" className="col bottom_right_green">
                <img
                  style={widthGreen1}
                  id="green-1"
                  className={green1 ? "caracter abletomove" : "caracter"}
                  src={green}
                  onClick={() => move("green-1")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_green"></div>
              <div id="pos-green-2" className="col bottom_right_green">
                <img
                  style={widthGreen2}
                  id="green-2"
                  className={green2 ? "caracter abletomove" : "caracter"}
                  src={green}
                  onClick={() => move("green-2")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_green"></div>
              <div className="col green"></div>
            </div>
            <div className="row">
              <div className="col yellow"></div>
              <div className="col top_right_yellow"></div>
              <div className="col top_left_yellow"></div>
              <div className="col top_right_yellow"></div>
              <div className="col top_left_yellow"></div>
              <div className="col yellow"></div>
              <div id="29" className="col left_top"></div>
              <div id="y3" className="col left_top yellow"></div>
              <div id="21" className="col left_top right"></div>
              <div className="col green"></div>
              <div className="col top_right_green"></div>
              <div className="col top_left_green"></div>
              <div className="col top_right_green"></div>
              <div className="col top_left_green"></div>
              <div className="col green"></div>
            </div>
            <div className="row">
              <div className="col yellow"></div>
              <div id="pos-yellow-3" className="col bottom_right_yellow">
                <img
                  style={widthYellow3}
                  id="yellow-3"
                  className={yellow3 ? "caracter abletomove" : "caracter"}
                  src={yellow}
                  onClick={() => move("yellow-3")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_yellow"></div>
              <div id="pos-yellow-4" className="col bottom_right_yellow">
                <img
                  style={widthYellow4}
                  id="yellow-4"
                  className={yellow4 ? "caracter abletomove" : "caracter"}
                  src={yellow}
                  onClick={() => move("yellow-4")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_yellow"></div>
              <div className="col yellow"></div>
              <div id="28" className="col left_top"></div>
              <div id="y2" className="col left_top yellow"></div>
              <div id="22" className="col left_top right"></div>
              <div className="col green"></div>
              <div id="pos-green-3" className="col bottom_right_green">
                <img
                  style={widthGreen3}
                  id="green-3"
                  className={green3 ? "caracter abletomove" : "caracter"}
                  src={green}
                  onClick={() => move("green-3")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_green"></div>
              <div id="pos-green-4" className="col bottom_right_green">
                <img
                  style={widthGreen4}
                  id="green-4"
                  className={green4 ? "caracter abletomove" : "caracter"}
                  src={green}
                  onClick={() => move("green-4")}
                  alt=""
                />
              </div>
              <div className="col bottom_left_green"></div>
              <div className="col green"></div>
            </div>
            <div className="row">
              <div className="col yellow"></div>
              <div className="col top_right_yellow"></div>
              <div className="col top_left_yellow"></div>
              <div className="col top_right_yellow"></div>
              <div className="col top_left_yellow"></div>
              <div className="col yellow"></div>
              <div id="27" className="col left_top yellow"></div>
              <div id="y1" className="col left_top yellow"></div>
              <div id="23" className="col left_top right"></div>
              <div className="col green"></div>
              <div className="col top_right_green"></div>
              <div className="col top_left_green"></div>
              <div className="col top_right_green"></div>
              <div className="col top_left_green"></div>
              <div className="col green"></div>
            </div>
            <div className="row">
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div className="col yellow"></div>
              <div id="26" className="col left_top bottom"></div>
              <div id="25" className="col left_top bottom"></div>
              <div id="24" className="col left_top bottom right"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
              <div className="col green"></div>
            </div>
          </div>
          <div className="control-3">
            <div className="control-player">
              <div style={{borderRadius : '50%', backgroundColor : 'white', width : '34px', marginLeft: 'auto', marginTop : '5px', marginRight: '5px', marginBottom: '5px'}}>
                <img src={settingsLogo} alt="" style={{width : '34px'}} onClick={() => setSettings(true)}/>
              </div>
              <div className="dashboard">
              
                {player === 2 && (
                  <div className="de" onClick={() => play(2)}>
                    {steps === 1 && one}
                    {steps === 2 && two}
                    {steps === 3 && three}
                    {steps === 4 && four}
                    {steps === 5 && five}
                    {steps === 6 && six}
                  </div>
                )}
                {player !== 2 && (
                  <div className="de" onClick={() => play(2)}>
                    {winners.length > 0 && winners[0] === 2 && <img alt="" src={winner1} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 1 && winners[1] === 2 && <img alt="" src={winner2} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 2 && winners[2] === 2 && <img alt="" src={winner3} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                  </div>
                )}
                <div className="profile">
                  {player2} <br />
                  <img src={profile} alt="" className="profile_pic" /> <br />
                  Score : {score2 + "%"}
                </div>
              </div>
            </div>
            <div className="control-player">
              <br />
              <br />
              <br />
              <br />
              <div className="dashboard">
                {player === 3 && (
                  <div className="de" onClick={() => play(3)}>
                    {steps === 1 && one}
                    {steps === 2 && two}
                    {steps === 3 && three}
                    {steps === 4 && four}
                    {steps === 5 && five}
                    {steps === 6 && six}
                  </div>
                )}
                {player !== 3 && (
                  <div className="de" onClick={() => play(3)}>
                    {winners.length > 0 && winners[0] === 3 && <img alt="" src={winner1} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 1 && winners[1] === 3 && <img alt="" src={winner2} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                    {winners.length > 2 && winners[2] === 3 && <img alt="" src={winner3} style={{width : 'calc(((100vw - 137vh)/4) - 12px)', height: 'auto', margin: '0'}} />}
                  </div>
                )}
                <div className="profile">
                  {player3} <br />
                  <img src={profile} alt="" className="profile_pic" /> <br />
                  Score : {score3 + "%"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;

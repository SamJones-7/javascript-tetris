Math.import;

let pieceO = [[1,1],
              [1,1]];

let pieceI = [[1,1,1,1]];

let pieceS = [[0,1,1],
              [1,1,0]];

let pieceZ = [[1,1,0],
              [0,1,1]];

let pieceL = [[1,0],
              [1,0],
              [1,1]];

let pieceJ = [[0,1],
              [0,1],
              [1,1]];

let pieceT = [[1,1,1],
              [0,1,0]];

let pieces = [pieceI,pieceJ,pieceL,pieceO,pieceS,pieceT,pieceZ];

function getNextPiece (pieces) {
    let rng = Math.floor(Math.random() * pieces.length);
    let nextPiece = pieces[rng];
    return nextPiece;
}
for (let i = 0; i < 10; i++) {
    let nextPiece = getNextPiece(pieces);
    console.log(nextPiece);
}
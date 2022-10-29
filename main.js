let board = [[5, 4, 3, 2, 1], [], []];


// assign each array to a peg
let peg1 = board[0];
let peg2 = board[1];
let peg3 = board[2];


let numOfDiscs = board[0].length;


// store each disc's size and location
let discs = {
  disc1:  {
  size: 1,
  location: peg1
  },
  disc2: {
    size: 2,
    location: peg1
  },
  disc3: {
    size: 3,
    location: peg1
  },
  disc4: {
    size: 4,
    location: peg1
  }, 
  disc5: {
    size: 5,
    location: peg1
  }
};

// reference each disc in the object 
let discOne = discs.disc1;
let discTwo = discs.disc2;
let discThree = discs.disc3;
let discFour = discs.disc4;
let discFive = discs.disc5;



checkWinner = function(object) {
  for (const disc in object) {

    if (object[disc].location.length === 5 && object[disc].location !== peg1) {
      console.log('You are a winner!');
      alert('You wonnn!')
      
      object[disc].location = peg1;
      resetGame(object);
    }
  }
}

resetGame = function(object) {
  for (const disc in object) {
    peg1.push(object[disc].size);
    peg1.sort().reverse();
    object[disc].location = peg1;

    }
}
 
console.log('The beginning board is:')

// print 2D to the console
board.map(function (peg) {
  console.log('--- ' + peg.join(' '));
 });

// play the game by moving discs to different pegs  
let moveDisc = function (disc, peg) {
  let topDisc = disc.location[disc.location.length - 1];

  // if disc is at the top of the peg and the peg is empty **
  if (disc.size === topDisc && typeof peg[peg.length - 1] === 'undefined') {
    disc.location.pop();
    peg.push(disc.size);
    disc.location = peg;
    console.log('Move was successful. Board is now:');
        
        
  // if disc is at the top of the peg and the peg has a ring(s) on it already ?*
  } else if (disc.size === topDisc && peg[peg.length - 1] && disc.size < peg[peg.length - 1]) {
        disc.location.pop();
        peg.push(disc.size);
        disc.location = peg;
        console.log('Move was successful. Board is now:');

  // if attempt is not a legitimate move
  } else {
    console.log('Move was unsuccessful. Board is now:')
  }
  board.map(function (peg) {
    console.log('--- ' + peg.join(' '));   
   });

   checkWinner(discs);
  }


  moveDisc(discOne, peg3);
  moveDisc(discTwo, peg2);
  moveDisc(discOne, peg2);
  moveDisc(discThree, peg3);
  moveDisc(discOne, peg1);
  moveDisc(discTwo, peg3);
  moveDisc(discOne, peg3);
  moveDisc(discFour, peg2);
  moveDisc(discOne, peg2);
  moveDisc(discTwo, peg1);
  moveDisc(discOne, peg1);
  moveDisc(discOne, peg3);
  moveDisc(discFour, peg2);
  moveDisc(discOne, peg2);
  moveDisc(discTwo, peg1);
  
  //3rd break
  moveDisc(discOne, peg1);
  moveDisc(discThree, peg2);
  moveDisc(discOne, peg3);
  moveDisc(discTwo, peg2);
  moveDisc(discOne, peg2);

  //4
  moveDisc(discFive, peg3);
  moveDisc(discOne, peg1);
  moveDisc(discTwo, peg3);
  moveDisc(discOne, peg2);
  moveDisc(discOne, peg3);
  moveDisc(discThree, peg1);
//5
  moveDisc(discOne, peg2);
  moveDisc(discTwo, peg1);
  moveDisc(discOne, peg1);
  moveDisc(discFour, peg3);
  moveDisc(discOne, peg3);
//6
moveDisc(discTwo, peg2);
moveDisc(discOne, peg2);
moveDisc(discThree, peg3);
moveDisc(discOne, peg1);
moveDisc(discTwo, peg3);
moveDisc(discOne, peg3);

          console.clear();
        
          board[2].length = 0;
        
        board.map(function (peg) {
          console.log('--- ' + peg.join(' '));
         });
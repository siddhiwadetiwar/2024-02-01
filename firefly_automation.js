/*requirement was to create a 30 by 50 grid box with
 * an asterisk '*' at any one random place and then
 * rest should be blank space then requirement was to
 * move asterisk randomly in either of the 9 directions
 * left right up down diagonally also the asterisk should 
 * be within the boundary of the box.
 */


/**This is a function to create a grid box with possible directions
 * @param {Number} n the width of the box on output
 * @param {Number} m the height of the box on output
 * @return {Array<Array<String>>} the array of array of string of box
 * @throws {Error} when the width and height are invalid
 */




function printRandomStarPattern(n,m) {
  setInterval(() => {
    
    const n = 30; 
    const m = 35; 

    const randomRow = Math.floor(Math.random() * n) + 1;
    const randomColumn = Math.floor(Math.random() * m) + 1;
//
    for (let i = 1; i <= n; i++) {
      let row = '| ';
      for (let j = 1; j <= m; j++) {
        if (i === randomRow && j === randomColumn) {
          row += '* ';
        } else {
          row += '  '; 
        }
      }
      row += '|';
      console.log(row);
    }

    console.log("".padStart((m * 2) + 2, '-')); 
  }, 1000); 
}

printRandomStarPattern();
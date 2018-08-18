

let turn = 'blue'; 
let turnColor = 'dodgerblue';

const buttonText = 'button--text';

const app = {};

app.turnswap = function() {
    
    if (turn == 'blue') {
        turn = 'red';
        turnColor = 'tomato';
        console.log('now it is red turn');
        $('.player-turn').css('color', 'tomato').text('player 2');
    } else if (turn == 'red') {
        turn = 'blue';
        turnColor = 'dodgerblue'
        console.log('now it is blue turn'); 
        $('.player-turn').css('color', 'dodgerblue').text('player 1'); 
    }
    
}

app.cells = [
    // ROW ONE
    //1
    { x: 1, y: 4, z: 1, player: "" },
    { x: 1, y: 4, z: 2, player: "" },
    { x: 1, y: 4, z: 3, player: "" },
    { x: 1, y: 4, z: 4, player: "" },
    //2
    { x: 2, y: 4, z: 1, player: "" },
    { x: 2, y: 4, z: 2, player: "" },
    { x: 2, y: 4, z: 3, player: "" },
    { x: 2, y: 4, z: 4, player: "" },
    //3
    { x: 3, y: 4, z: 1, player: "" },
    { x: 3, y: 4, z: 2, player: "" },
    { x: 3, y: 4, z: 3, player: "" },
    { x: 3, y: 4, z: 4, player: "" },
    //4
    { x: 4, y: 4, z: 1, player: "" },
    { x: 4, y: 4, z: 2, player: "" },
    { x: 4, y: 4, z: 3, player: "" },
    { x: 4, y: 4, z: 4, player: "" },
    //ROW TWO
    //5
    { x: 1, y: 3, z: 1, player: "" },
    { x: 1, y: 3, z: 2, player: "" },
    { x: 1, y: 3, z: 3, player: "" },
    { x: 1, y: 3, z: 4, player: "" },
    //6
    { x: 2, y: 3, z: 1, player: "" },
    { x: 2, y: 3, z: 2, player: "" },
    { x: 2, y: 3, z: 3, player: "" },
    { x: 2, y: 3, z: 4, player: "" },
    //7
    { x: 3, y: 3, z: 1, player: "" },
    { x: 3, y: 3, z: 2, player: "" },
    { x: 3, y: 3, z: 3, player: "" },
    { x: 3, y: 3, z: 4, player: "" },
    //8
    { x: 4, y: 3, z: 1, player: "" },
    { x: 4, y: 3, z: 2, player: "" },
    { x: 4, y: 3, z: 3, player: "" },
    { x: 4, y: 3, z: 4, player: "" },
    //ROW THREE
    //9
    { x: 1, y: 2, z: 1, player: "" },
    { x: 1, y: 2, z: 2, player: "" },
    { x: 1, y: 2, z: 3, player: "" },
    { x: 1, y: 2, z: 4, player: "" },
    //10
    { x: 2, y: 2, z: 1, player: "" },
    { x: 2, y: 2, z: 2, player: "" },
    { x: 2, y: 2, z: 3, player: "" },
    { x: 2, y: 2, z: 4, player: "" },
    //11
    { x: 3, y: 2, z: 1, player: "" },
    { x: 3, y: 2, z: 2, player: "" },
    { x: 3, y: 2, z: 3, player: "" },
    { x: 3, y: 2, z: 4, player: "" },
    //12
    { x: 4, y: 2, z: 1, player: "" },
    { x: 4, y: 2, z: 2, player: "" },
    { x: 4, y: 2, z: 3, player: "" },
    { x: 4, y: 2, z: 4, player: "" },
    //ROW FOUR
    //13
    { x: 1, y: 1, z: 1, player: "" },
    { x: 1, y: 1, z: 2, player: "" },
    { x: 1, y: 1, z: 3, player: "" },
    { x: 1, y: 1, z: 4, player: "" },
    //14
    { x: 2, y: 1, z: 1, player: "" },
    { x: 2, y: 1, z: 2, player: "" },
    { x: 2, y: 1, z: 3, player: "" },
    { x: 2, y: 1, z: 4, player: "" },
    //15
    { x: 3, y: 1, z: 1, player: "" },
    { x: 3, y: 1, z: 2, player: "" },
    { x: 3, y: 1, z: 3, player: "" },
    { x: 3, y: 1, z: 4, player: "" },
    //16
    { x: 4, y: 1, z: 1, player: "" },
    { x: 4, y: 1, z: 2, player: "" },
    { x: 4, y: 1, z: 3, player: "" },
    { x: 4, y: 1, z: 4, player: "" },
]

let cellColor;

app.checkCells = function (xVal, yVal, zVal) {

    console.log(`conditions for call - x: ${xVal}; y: ${yVal}; z: ${zVal}`);

    let arrayY=[];
    let arrayX=[];

    for (let i = 0; i <= 63; i++) {
        if (app.cells[i].x == xVal && app.cells[i].y == yVal && app.cells[i].player != "" ) {

            console.log('top check');

            cellColor = i;

        }
        if (app.cells[i].x == xVal && app.cells[i].z == zVal && app.cells[i].player != "" ){
            console.log('left/right side check');

            arrayY.push(app.cells[i].y);
            arrayX.push(app.cells[i].x);

            // console.log(cellColor);
        
        }
        if (app.cells[i].y == yVal && app.cells[i].z == zVal && app.cells[i].player != "" ) {
            console.log('front/back side check');
            
            // console.log(app.cells[i])

            arrayY.push(app.cells[i].y);
            arrayX.push(app.cells[i].x);

            
            
        }

        
    }

        // console.log(cellColor);
        let maxX = Math.max(...arrayX);
        // console.log('maxX');
        // console.log(maxX);
        let minX = Math.min(...arrayX);
        // console.log('minX');
        // console.log(minX);
        let maxY = Math.max(...arrayY);
        // console.log('maxY');
        // console.log(maxY);
        let minY = Math.min(...arrayY);
        // console.log('minY');
        // console.log(minY);

        if (app.cells[cellColor].y >= maxY) {
            // console.log('change right');
            $(`.x${app.cells[cellColor].x}z${app.cells[cellColor].z}.right-box`).css('background', turnColor);
            // console.log(`.x${app.cells[cellColor].x}z${app.cells[cellColor].z}.right-box`);

        } if (app.cells[cellColor].y <= minY) {

            // console.log('change left');
            $(`.x${app.cells[cellColor].x}z${app.cells[cellColor].z}.left-box`).css('background', turnColor);
            // console.log(`.x${app.cells[cellColor].x}z${app.cells[cellColor].z}.left-box`);

        }

        if (app.cells[cellColor].x >= maxX) {

            // console.log('change front');
            // console.log(`.y${app.cells[cellColor].y}z${app.cells[cellColor].z}.front-box`);

            $(`.y${app.cells[cellColor].y}z${app.cells[cellColor].z}.front-box`).css('background', turnColor);

        } if (app.cells[cellColor].x <= minX) {

            // console.log('change back');
            $(`.y${app.cells[cellColor].y}z${app.cells[cellColor].z}.back-box`).css('background', turnColor);
            // console.log(`.y${app.cells[cellColor].y}z${app.cells[cellColor].z}.back-box`);

        }  

}


// check for styling - css
app.counters = [
    //1
    { count: 1, left: 4, bot:7 },
    //2
    { count: 1, left: 5, bot:6 },
    //3
    { count: 1, left: 6, bot:5 },
    //4
    { count: 1, left: 7, bot:4 },
    //5
    { count: 1, left: 3, bot:6 },
    //6
    { count: 1, left: 4, bot:5 },
    //7
    { count: 1, left: 5, bot:4 },
    //8
    { count: 1, left: 6, bot:3 },
    //9
    { count: 1, left: 2, bot:5 },
    //10
    { count: 1, left: 3, bot:4 },
    //11
    { count: 1, left: 4, bot:3 },
    //12
    { count: 1, left: 5, bot:2 },
    //13
    { count: 1, left: 1, bot:4 },
    //14
    { count: 1, left: 2, bot:3 },
    //15
    { count: 1, left: 3, bot:2 },
    //16
    { count: 1, left: 4, bot:1 }

]




app.runFunction = (variable) => {

    let zindex = ((buttonNum - 1) * 4) + app.counters[buttonNum - 1].count;


    // assign the cell number a string of red/blue
    app.cells[zindex -1].player = turn;

    // console.log(app.cells[zindex -1].player);
    
    
    let botVal = app.counters[buttonNum - 1].bot;
    
    let leftVal = app.counters[buttonNum - 1].left;


    let item = `<div class="box box--${turn} box--left--${leftVal} box--bot--${botVal} ${zindex}">`;

    // console.log(buttonNum);

    // STILL IN THE WORKS - check before values change
    app.checkCells(app.cells[cellNum - 1].x, app.cells[cellNum - 1].y, app.cells[cellNum - 1].z);
    
     
    if (variable == 1) {
        $(`.button--text--${buttonNum}`).text(variable);   
        gameContainer.append(item);
        variable = variable + 1;
        app.turnswap();     
    } else if (variable == 2) {
        $(`.button--text--${buttonNum}`).text(variable);
        gameContainer.append(item);
        variable = variable + 1;
        app.turnswap();
    } else if (variable == 3) {
        $(`.button--text--${buttonNum}`).text(variable);
        gameContainer.append(item);
        variable = variable + 1;
        app.turnswap();
    } else if (variable == 4) {
        $(`.button--text--${buttonNum}`).text(variable);
        gameContainer.append(item);
        variable = 0;
    } else {
        //
    }

    //add a z-index
    $(`.${zindex}`).css('z-index', `${zindex}`)

    // increase count
    app.counters[buttonNum - 1].count = app.counters[buttonNum - 1].count + 1;
    
    // increase botVal
    app.counters[buttonNum - 1].bot = app.counters[buttonNum - 1].bot + 2;

} 

app.takeTurn = function () {
    button.on('click', function () {

        buttonNum = parseInt($(this).attr('id'));
        // console.log(buttonNum);
        // console.log('button number');

        cellNum = ((buttonNum - 1) * 4) + app.counters[buttonNum - 1].count;

            $(this).css('background', turnColor);

        // RUN APPEND FUNCTION
        app.runFunction(app.counters[buttonNum - 1].count);

        app.checkWin();
        
    })
}



gameContainer = $('.gameContainer');

const button = $('.button');

let buttonNum = $(``);





// put in doc reeady / init
app.takeTurn();


app.checkWin = function(){
    
    for (i = 1; i <= 20; i++){
        let arrayBlue = [];
        let arrayRed = [];
        $(`.c${i}`).each(function () {

            let winCondition = $(this).css('background-color');
            
            if (winCondition == 'rgb(30, 144, 255)'){                
                // console.log(`c${i} blue`);   
                arrayBlue.push('blue');
                // console.log(arrayBlue);   
                // console.log(arrayBlue.length);   
                if (arrayBlue.length == 4){
                    app.gameWin('blue');   
                }    
            } if (winCondition == 'rgb(255, 99, 71)') {
                // console.log(`c${i} red`);  
                arrayRed.push('red');
                // console.log(arrayRed);    
                if (arrayRed.length == 4) {
                    app.gameWin('red');
                } 
            }
            
            
            
            
        })
    }

    for (i = 1; i <= 20; i++) {
        let arrayBlue = [];
        let arrayRed = [];
        $(`.r${i}`).each(function () {

            let winCondition = $(this).css('background-color');

            if (winCondition == 'rgb(30, 144, 255)') {
                // console.log(`r${i} blue`);
                arrayBlue.push('blue');
                // console.log(arrayBlue);   
                // console.log(arrayBlue.length);
                if (arrayBlue.length == 4) {
                    app.gameWin('blue');
                }
            } if (winCondition == 'rgb(255, 99, 71)') {
                // console.log(`r${i} red`);
                arrayRed.push('red');
                // console.log(arrayRed);    
                if (arrayRed.length == 4) {
                    app.gameWin('red');
                }
            }




        })
    }

    for (i = 1; i <= 10; i++) {
        let arrayBlue = [];
        let arrayRed = [];
        $(`.d${i}`).each(function () {

            let winCondition = $(this).css('background-color');

            if (winCondition == 'rgb(30, 144, 255)') {
                // console.log(`d${i} blue`);
                arrayBlue.push('blue');
                // console.log(arrayBlue);   
                // console.log(arrayBlue.length);
                if (arrayBlue.length == 4) {
                    app.gameWin('blue');
                }
            } if (winCondition == 'rgb(255, 99, 71)') {
                // console.log(`d${i} red`);
                arrayRed.push('red');
                // console.log(arrayRed);    
                if (arrayRed.length == 4) {
                    app.gameWin('red');
                    console.log(turn);
                    
                }
            }




        })
    }

    


}

app.gameWin = function(player){
    alert(`${player} player wins`)
}









// notes - should have kept them from the start...

// console.log('z-index');
// console.log(((parseInt($(this).attr('id')) - 1) * 4) + app.counters[buttonNum - 1].count)
// zindex = ((parseInt($(this).attr('id')) - 1) * 4) + app.counters[buttonNum - 1].count - 1;
// console.log(zindex);


// original count
// console.log(app.counters[buttonNum - 1].count);
// new count
// console.log(app.counters[buttonNum - 1].count);
  



// 64 cells with empty string values - match x,y,z cooridinates to the cell, assign value (red/blue) - game check conditions
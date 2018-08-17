

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

// 64 empty strings 
// app.winCondition = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]


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



// checking left-right or bottom-top (x/y)
// 32 possible channels to check
// app.checkCells = function(xVal, yVal, view){
   
//     console.log(`${view} view at x: ${xVal} and y: ${yVal}`); 

//     for ( let i = 0; i<= 63; i ++ ){
//         if (app.cells[i].x == xVal && app.cells[i].y == yVal) {
//             // this checks the top
//             console.log(app.cells[i]);
            
//         }
//     }

// }
// DECLARE DEFAULT
currentOrderY = 0;
// let NewOrderY;
// create array
// let yArray = []

app.checkCells = function (xVal, yVal, zVal) {

    console.log(`conditions for call - x: ${xVal}; y: ${yVal}; z: ${zVal}`);

    let arrayY=[];
    let arrayX=[];

    for (let i = 0; i <= 63; i++) {
        if (app.cells[i].x == xVal && app.cells[i].y == yVal && app.cells[i].player != "" ) {
            // this checks the top
            // it's stil selecting them all
            console.log('top check');
            
            console.log(app.cells[i]);
            // $(`.x${app.cells[i].x}y${app.cells[i].y}z${app.cells[i].z}`).css('background', turnColor);
            // console.log(`.x${app.cells[i].x}y${app.cells[i].y}z${app.cells[i].z}`);
            
            

        }
        if (app.cells[i].x == xVal && app.cells[i].z == zVal && app.cells[i].player != "" ){
            console.log('left/right side check');

            // makes both sides change
            $(`.x${app.cells[i].x}z${app.cells[i].z}`).css('background', turnColor);

            arrayY.push(app.cells[i].y);
            // push except current clicked value
            // get the largest number
            // get the smallest number
            // check if greater or equal to
            // check if smaller or equal to
            console.log(arrayY);
            
            
            
            

            
            
            
            
            
            console.log(app.cells[i])
            
            // if (currentOrderY == 0){
            //     $(`.x${app.cells[i].x}z${app.cells[i].z}`).css('background', turnColor);
            // }
            // NewOrderY = app.cells[i].y;
            // console.log(NewOrderY);
            
            // if (NewOrderY > currentOrderY) {
            //     $(`.x${app.cells[i].x}z${app.cells[i].z}.side-box-right`).css('background', turnColor);
            //     currentOrderY = app.cells[i].y;
            // } else {
            //     $(`.x${app.cells[i].x}z${app.cells[i].z}.side-box-left`).css('background', turnColor);
            //     currentOrderY = app.cells[i].y;
            // }


            // currentOrderY = app.cells[i].y;
            // if y is low - left
            // if y is high - right

            // set another class for y - check the y value in the if satement
            // eg - y-order1

            // $(`.x${app.cells[i].x}z${app.cells[i].z}`).css('background', turnColor);

        }
        if (app.cells[i].y == yVal && app.cells[i].z == zVal && app.cells[i].player != "" ) {
            console.log('front/back side check');
            
            console.log(app.cells[i])
            
            // if x is low - back
            // if x is high - right

            // set another class for x - check the x value in the if satement
            $(`.y${app.cells[i].y}z${app.cells[i].z}`).css('background', turnColor);
        }
    }

}


// check the input fields (all sides)



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


    // console.log(app.cells[zindex-1]);


    // assign the cell number a string of red/blue
    app.cells[zindex -1].player = turn;

    console.log(app.cells[zindex -1].player);
    
    
    

    let botVal = app.counters[buttonNum - 1].bot;
    
    let leftVal = app.counters[buttonNum - 1].left;


    let item = `<div class="box box--${turn} box--left--${leftVal} box--bot--${botVal} ${zindex}">`;

    console.log(buttonNum);

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


    // for each - check each side and see if the cells have changed


    // then check if win condition is met
} 

app.takeTurn = function () {
    button.on('click', function () {

        buttonNum = parseInt($(this).attr('id'));
        console.log(buttonNum);
        console.log('button number');

        cellNum = ((buttonNum - 1) * 4) + app.counters[buttonNum - 1].count;

            $(this).css('background', turnColor);

        // Change colour of tile, only if the count is below 4
        // if (app.counters[cellNum].count < 4){
        //     $(this).css('background', turnColor);
        // }

        // $(this `.button--text`).text(zindex);

        // RUN APPEND FUNCTION
        app.runFunction(app.counters[buttonNum - 1].count);
        
        // // STILL IN THE WORKS
        // app.checkCells(app.cells[cellNum - 1].x, app.cells[cellNum - 1].y, app.cells[cellNum - 1].z);

        


    })
}



gameContainer = $('.gameContainer');

const button = $('.button');

let buttonNum = $(``);






// put in doc reeady / init
app.takeTurn();









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
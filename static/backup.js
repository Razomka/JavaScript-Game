let canvas;
let context;

let fpsInterval = 1000/30;
let now;
let then = Date.now();

// Images
let bomberpersonImage = new Image();
let backgroundImage = new Image();
let titleImage = new Image();
let tutorialImage = new Image();
let boxImage = new Image();
let rimImage = new Image();
let textImage = new Image();
let portalImage1 = new Image();
let portalImage2 = new Image();
let bossImage = new Image();
let enemyOneImage = new Image();
let enemyTwoImage = new Image();
let enemyThreeImage = new Image();
let enemyFourImage = new Image();
let wallImage = new Image();
let dirtImage = new Image();
let bombImage = new Image();
let fireImage = new Image();

// Dynamic objects like the PC/NPC and bombs etc
let bomberperson = 
{
    x : 0,
    y : 0,
    imageX : 0,
    imageY : 0,
    size : 32,
    frameX : 1,
    frameY : 0,
    xChange : 0,
    yChange : 0,
    movement : 32,
    direction : "S"
}

let bomb =
{
    x : 0,
    y : 0,
    imageX : 0,
    imageY : 0,
    size : 32,
    frame : 0
}

let portal = 
{
    x : 0,
    y : 0,
    imageX : 0,
    imageY : 0,
    size: 32,
    frameX : 0,
    frameY : 0
}

// This needs an update
let explosionOb =
{
    x : 0,
    y : 0,
    imageX : 0,
    imageY : 0,
    size : 64,
    frame : 0 
}

// Creating enemies stuff
let enemyList = [];
class enemies{
    constructor(x,y,imageX,imageY,size,frameX,frameY,xChange,yChange,movement,pict)
    {
        this.x = x;
        this.y = y;
        this.imageX = imageX;
        this.imageY = imageY;
        this.size = size;
        this.frameX = frameX;
        this.frameY = frameY;
        this.xChange = xChange;
        this.yChange = yChange;
        this.movement = movement;
        this.pict = pict;
    }
};

// Creating Dirt
let dirtDone = false;
let dirtList = [];
class dirtBlocks{
    constructor(x,y,imageX,imageY,size,frameX,frameY,pictSize)
    {
        this.x = x;
        this.y = y;
        this.imageX = imageX;
        this.imageY = imageY;
        this.size = size;
        this.frameX = frameX;
        this.frameY = frameY;
        this.pictSize = pictSize;
    }
};

// Explosion Logic
let explosionArray = [];


let dirtMap = 
[
    [3,1],[3,3],[3,5],[3,7],[4,0],[5,0],[6,0],[8,0],[9,0],[10,0],[12,0],[13,0],
    [2,1],[2,2],[4,1],[6,1],[7,1],[8,1],[10,1],[11,1],[12,1],
    [1,2],[2,2],[4,2],[5,2],[6,2],[8,2],[9,2],[10,2],[12,2],[13,2],
    [0,3],[2,3],[2,4],[4,3],[6,3],[7,3],[8,3],[10,3],[11,3],[12,3],
    [0,4],[1,4],[2,4],[2,5],[4,4],[5,4],[6,4],[8,4],[9,4],[10,4],[12,4],[13,4],
    [0,5],[2,5],[2,6],[4,5],[6,5],[7,5],[8,5],[10,5],[11,5],[12,5],
    [0,6],[1,6],[2,6],[2,7],[4,6],[5,6],[6,6],[8,6],[9,6],[10,6],[12,6],[13,6],
    [0,7],[2,7],[4,7],[6,7],[7,7],[8,7],[10,7],[11,7],[12,7]
];

// Non Dynamic Objects like Walls/Maps
let walls = 
{
    x : 0,
    y : 0,
    width : 32,
    height : 32,
    frameX : 2,
    frameY : 35,
}
let wallObject = {};

let startLocation =
[
    [0,0],[1,0],[2,0],
    [0,1],[0,2]
];

let wallMap =
[
    [3,0],[7,0],[11,0],
    [1,1],[5,1],[9,1],[13,1],
    [3,2],[7,2],[11,2],
    [1,3],[5,3],[9,3],[13,3],
    [3,4],[7,4],[11,4],
    [1,5],[5,5],[9,5],[13,5],
    [3,6],[7,6],[11,6],
    [1,7],[5,7],[9,7],[13,7]
];

let bombMap = [];

// Additional variables
let moveLeft = false;
let moveRight = false;
let moveDown = false;
let moveUp = false;
let pressEnter = false;
let dropBomb = false;
let bombWarning = false;
let enemyAppear = false;
let portalCheck = false;
let bombRemoval = 0;
let explosion = false;
let enemiesEmpty = true;
let clock = 0;
let title_id;
let draw_id;
let tutorial_id;

let background_tutorial = 
{
    map : 
    [
        [-1,-1,-1,-1,-1,-1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,6,0,0,1,2,3,4,5,6,70,68,69,70,104,105,70,104,105,6],
        [-1,-1,-1,-1,-1,-1,6,0,18,19,20,21,22,23,24,70,86,87,70,122,123,70,122,123,6],
        [-1,-1,-1,-1,-1,-1,6,0,36,37,38,39,40,41,42,70,70,70,70,14,15,0,0,0,6],
        [-1,-1,-1,-1,-1,-1,6,0,54,55,56,57,58,59,60,0,16,17,0,32,33,0,70,0,6],
        [-1,-1,-1,-1,-1,-1,6,0,72,73,74,75,76,77,78,0,34,35,0,50,51,0,0,0,6],
        [-1,-1,-1,-1,-1,-1,6,0,90,91,92,93,94,95,96,0,0,0,0,0,10,11,12,13,6],
        [-1,-1,-1,-1,-1,-1,6,0,108,109,110,111,112,113,114,70,0,0,26,27,28,29,30,31,6],
        [-1,-1,-1,-1,-1,-1,6,0,126,127,128,129,130,131,132,70,0,43,44,45,46,47,48,49,6],
        [-1,-1,-1,-1,-1,-1,6,0,70,0,68,69,70,68,69,70,0,61,62,63,64,65,66,67,6],
        [-1,-1,-1,-1,-1,-1,6,0,104,105,86,87,0,86,87,0,0,79,80,81,82,83,84,85,6],
        [-1,-1,-1,-1,-1,-1,6,0,122,123,0,0,0,0,0,0,0,97,98,99,100,101,102,103,6],
        [-1,-1,-1,-1,-1,-1,6,0,0,0,0,0,0,0,0,0,0,115,116,117,118,119,120,121,6],
        [-1,-1,-1,-1,-1,-1,6,0,0,0,0,0,0,0,0,0,0,133,134,135,136,137,138,139,6],
        [-1,-1,-1,-1,-1,-1,6,0,0,0,0,0,0,0,0,0,0,0,152,153,154,155,156,157,6],
        [-1,-1,-1,-1,-1,-1,6,0,0,0,0,0,0,0,0,0,0,0,0,171,172,173,0,0,6,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,6,1,72,44,2,79,77,66,69,82,75,78,73,71,72,84,46,114,6],
        [-1,-1,-1,-1,-1,-1,-1,25,79,85,114,65,82,69,114,65,87,65,75,69,46,114,115,116,-10,-10,-10,-10,-10,-10,-10],
        [-1,-1,-1,-1,-1,-1,-2,45,13,69,82,76,73,78,114,173,178,146,114,114,114,114,114,114,-10,-10,-10,-10,-10,-10,-10,-10],
        [-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,5,78,84,69,82,114,114,114,144,114,114,-10,-10,-10,-10,-10,-10,-10,-10]
    ],
    tilesPerRow : 18,
    tileSize : 16,
    tilesPerRow_1 : 8,
    tileSize_1 : 16,
    tilesPerRow_2 : 16,
    charWidth : 16,
    charHeight : 17
}

let background_game = 
{
    map :
    [
        [68,80,64,64,64,64,64,64,64,64,64,64,64,64,81,69],
        [67,36,51,37,35,37,51,36,35,36,51,37,35,37,51,67],
        [82,51,35,51,36,51,35,51,36,51,35,51,37,51,35,82],
        [82,52,51,52,35,37,51,37,35,52,51,36,35,36,51,82],
        [82,51,35,51,52,51,35,51,52,51,35,51,52,51,35,82],
        [82,36,51,37,35,36,51,52,35,37,51,36,35,36,51,82],
        [82,51,35,51,52,51,35,51,37,51,35,51,52,51,35,82],
        [82,37,51,36,35,52,51,37,35,52,51,52,35,52,51,82],
        [83,51,35,51,37,51,35,51,36,51,35,51,52,51,35,83],
        [84,80,64,64,64,64,64,64,64,64,64,64,64,64,81,85]
    ],
    tilesPerRow : 16,
    tileSize : 32
}

document.addEventListener("DOMContentLoaded", init, false);
window.addEventListener("keydown", startGame, false);
window.addEventListener("keyup", startGame, false);
window.addEventListener("keydown", droppedBomb, false);
window.addEventListener("keyup", droppedBomb, false);
window.addEventListener("keydown", moveBomberperson, false);
window.addEventListener("keyup", stopBomberperson, false);

function init() 
{
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    bomberperson.imageX = 32;
    bomberperson.imageY = 32;
    bomberpersonImage.src = "../static/Soldier 01-1.png"
    backgroundImage.src = "../static/sci-fi-platformer-tiles-32x32-extension.png"
    titleImage.src = "../static/title.png"
    tutorialImage.src = "../static/trees-and-bushes.png"
    boxImage.src = "../static/14.jpg"
    rimImage.src = "../static/simpleGraphics_tiles16x16.png"
    textImage.src = "../static/white_font_by_onixgames.com.png"
    portalImage1.src = "../static/portalRings2.png"
    portalImage2.src = "../static/portalRings1.png"
    bossImage.src = "../static/Boss 01.png"
    enemyOneImage.src = "../static/Enemy/Enemy 04-1.png"
    enemyTwoImage.src = "../static/Enemy/Enemy 05-1.png"
    enemyThreeImage.src = "../static/Enemy/Enemy 06-1.png"
    enemyFourImage.src = "../static/Enemy/Enemy 15-1.png"
    wallImage.src = "../static/sci-fi-platformer-tiles-32x32-extension.png"
    bombImage.src = "../static/bomb_01.png"
    fireImage.src = "../static/fire5_64.png"
    dirtImage.src = "../static/simpleGraphics_tiles16x16.png"
    draw();
}

function draw()
{
    pressEnter = false;
    draw_id = window.requestAnimationFrame(draw);
    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);

    context.clearRect(0,0,canvas.width,canvas.height);

    // Drawing the level
    for (let r = 0; r < 10; r += 1)
        {
        for (let c = 0; c < 16; c += 1)
            {
                let tile = background_game.map[r][c];
                if (tile >= 0) 
                    {
                        let tileRow = Math.floor(tile / background_game.tilesPerRow);
                        let tileCol = Math.floor(tile % background_game.tilesPerRow);
                        context.drawImage(backgroundImage,
                            tileCol * background_game.tileSize, tileRow * background_game.tileSize, background_game.tileSize, background_game.tileSize,
                            c * background_game.tileSize, r * background_game.tileSize, background_game.tileSize, background_game.tileSize);
                    }
            }
        }

    // Framework 
    if (moveLeft || moveRight || moveDown || moveUp)
        {
            bomberperson.frameX = (bomberperson.frameX + 1) % 3
        }


    // Drawing Bomberknight
    context.drawImage(bomberpersonImage,
        bomberperson.frameX*bomberperson.size, bomberperson.frameY*bomberperson.size, bomberperson.size, bomberperson.size,
        bomberperson.imageX,bomberperson.imageY,bomberperson.size,bomberperson.size);

    // Drawing the Exit
    if (portalCheck === false)
    {
        portalPlacement();
    } 
    else
    {
        context.drawImage(portalImage1,portal.frameX*portal.size,portal.frameY*portal.size,portal.size,portal.size,portal.imageX,portal.imageY,portal.size,portal.size)
        portal.frameX = (portal.frameX + 1) % 4
    }

    // Drawing the Enemies
    if (enemiesEmpty)
    {
        enemiesGeneration(8);
    }
    else
    {
        for (let unit of enemyList)
        {
            context.drawImage(unit[0].pict,unit[0].frameX,unit[0].frameY,unit[0].size,unit[0].size,unit[0].imageX,unit[0].imageY,unit[0].size,unit[0].size)
        }
    }

    // Drawing Dirt
    if (dirtDone === false)
    {
        dirtPlacement();
    }
    else
    {
        for (let dirt of dirtList)
        {
            context.drawImage(dirtImage,dirt[0].frameX,dirt[0].frameY,dirt[0].pictSize,dirt[0].pictSize,dirt[0].imageX,dirt[0].imageY,dirt[0].size,dirt[0].size)
        }
    }

    // Drawing the bomb
    if (dropBomb)
    {
        context.drawImage(bombImage,bomb.frame,bomb.frame,bomb.size,bomb.size,bomb.imageX,bomb.imageY,bomb.size,bomb.size)
    }
    else if (dropBomb === false && explosion === true)
    {
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX+bomb.size,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX+bomb.size+bomb.size,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY+bomb.size,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY+bomb.size+bomb.size,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX-bomb.size,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY-bomb.size,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX-bomb.size-bomb.size,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY-bomb.size-bomb.size,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY,bomb.size,bomb.size)
    }
    clock += 1;
    moveEnemies();

    // Checking if Won
    if(bomberperson.x === portal.x && bomberperson.y === portal.y || enemyList.length === 0)
    {
        nextScreen(draw_id);
        winnerScreen();
    }
}

function startGame(event)
{
    let key = event.key;
    if (key === "Enter" && pressEnter == false)
    {
        pressEnter = true;
    } else
    {
        pressEnter = false;
    }
}

function droppedBomb(event)
{
    let key = event.key;
    if (key === " " && dropBomb == false)
    {
        if (bomberperson.direction === "N")
        {
            bombTimer(bomb,bomberperson.x,bomberperson.y-1);
        }
        else if (bomberperson.direction === "E")
        {
            bombTimer(bomb,bomberperson.x+1,bomberperson.y);
        }
        else if (bomberperson.direction === "S")
        {
            bombTimer(bomb,bomberperson.x,bomberperson.y+1);
        }
        else if (bomberperson.direction === "W")
        {
            bombTimer(bomb,bomberperson.x-1,bomberperson.y);
        }
    } 
    else
    {
        return;
    }
}

function moveBomberperson(event)
{
    let key = event.key;
        if(event.repeat)
        {
            return
        }

        if (key === "ArrowLeft")
        {
            if (bomberperson.direction === "W")
            {
                moveLeft = true;
                moveRight = false;
                moveUp = false;
                moveDown = false;
                movementFunc(bomberperson,-1,0);
            }
            else
            {
                bomberperson.direction = "W"
                bomberperson.frameY = 1
            }
        } 
        else if (key === "ArrowRight")
        {
            if (bomberperson.direction === "E")
            {
                moveLeft = false;
                moveRight = true;
                moveUp = false;
                moveDown = false;
                movementFunc(bomberperson,1,0);
            }
            else
            {
                bomberperson.direction = "E"
                bomberperson.frameY = 2
            }
        }
        else if (key === "ArrowUp")
        {
            if (bomberperson.direction === "N")
            {
            moveLeft = false;
            moveRight = false;
            moveUp = true;
            moveDown = false;
            movementFunc(bomberperson,0,-1);
            }
            else
            {
                bomberperson.direction = "N"
                bomberperson.frameY = 3
            }
        } else if (key === "ArrowDown")
        {
            if (bomberperson.direction === "S")
            {
                moveLeft = false;
                moveRight = false;
                moveUp = false;
                moveDown = true;
                movementFunc(bomberperson,0,1);
            }
            else
            {
                bomberperson.direction = "S"
                bomberperson.frameY = 0
            }
        }

}


function movementFunc(object,x,y)
{
    // Checking if Right movement.
    if (y === 0 && x === 1)
    {
        object.direction = "E"
        object.frameY = 2
        if ((object.x + x) === 14)
        {
            return
        }
    for (let unit of dirtList) 
        {
            let newArray = [object.x+1,object.y]
            if (unit[0].x === newArray[0])
            {
                if (unit[0].y === newArray[1])
                {
                return
                }
            }
        }
    for (let X_Y of bombMap)
        {
            let newArray = [object.x+1,object.y]
            if (X_Y[0] === newArray[0])
            {
                if (X_Y[1] === newArray[1])
                {
                return
                }
            }
        }
    for (let X_Y of wallMap)
            {
                let newArray = [object.x+1,object.y]
                if (X_Y[0] === newArray[0])
                {
                    if (X_Y[1] === newArray[1])
                    {
                    return
                    }
                }
            }
    object.x = object.x + x
    object.imageX = object.imageX + object.movement
    }
    // Checking for Left Movement
    else if (y === 0 && x === -1)
    {
        object.direction = "W"
        object.frameY = 1
        if ((object.x + x) === -1)
        {
            return
        }
        for (let unit of dirtList) 
        {
            let newArray = [object.x-1,object.y]
            if (unit[0].x === newArray[0])
            {
                if (unit[0].y === newArray[1])
                {
                return
                }
            }
        }
    for (let X_Y of bombMap)
        {
            let newArray = [object.x-1,object.y]
            if (X_Y[0] === newArray[0])
            {
                if (X_Y[1] === newArray[1])
                {
                return
                }
            } 
        }
    for (let X_Y of wallMap)
        {
            let newArray = [object.x-1,object.y]
            if (X_Y[0] === newArray[0])
            {
                if (X_Y[1] === newArray[1])
                {
                return
                }
            } 
        }
        object.x = object.x + x
        object.imageX = object.imageX - object.movement
    } 
    // Checking for Down Movement
    else if (y === 1 && x === 0)
    {
        object.direction = "S"
        object.frameY = 0
        if ((object.y + y) === 8)
        {
            return
        }
        for (let unit of dirtList) 
        {
            let newArray = [object.x,object.y+1]
            if (unit[0].x === newArray[0])
            {
                if (unit[0].y === newArray[1])
                {
                return
                }
            }
        }
        for (let X_Y of bombMap)
        {
            let newArray = [object.x,object.y+1]
            if (X_Y[0] === newArray[0])
            {
                if (X_Y[1] === newArray[1])
                {
                return
                }
            }
        }
        for (let X_Y of wallMap)
        {
            let newArray = [object.x,object.y+1]
            if (X_Y[0] === newArray[0])
            {
                if (X_Y[1] === newArray[1])
                {
                return
                }
            }
        }
    object.y = object.y + y
    object.imageY = object.imageY + object.movement
    }
    // Checking for Up Movement
    else if (y === -1 && x === 0)
    {
        object.direction = "N"
        object.frameY = 3
        if ((object.y + y) === -1)
        {
            return
        }
        for (let unit of dirtList) 
        {
            let newArray = [object.x,object.y-1]
            if (unit[0].x === newArray[0])
            {
                if (unit[0].y === newArray[1])
                {
                return
                }
            }
        }
        for (let X_Y of bombMap) 
        {
            let newArray = [object.x,object.y-1]
            if (X_Y[0] === newArray[0])
            {
                if (X_Y[1] === newArray[1])
                {
                return
                }
            }
        }
        for (let X_Y of wallMap) 
        {
            let newArray = [object.x,object.y-1]
            if (X_Y[0] === newArray[0])
            {
                if (X_Y[1] === newArray[1])
                {
                return
                }
            }
        }
        object.y = object.y + y
        object.imageY = object.imageY - object.movement
    } 
}

function bombTimer(object,x,y)
{
    if ((object.x + x) > 13)
        {
            return
        }
    else if ((object.x + x) < 0)
        {
            return
         }
    else if ((object.y + y) > 7)
        {
            return
        }
    else if ((object.y + y) < 0)
        {
            return
        }
    let newArray = [x,y]
    for (let unit of dirtList) 
    {
        if (unit[0].x === newArray[0])
        {
            if (unit[0].y === newArray[1])
            {
            return
            }
        }
    }
    for (let unit of enemyList)
    {
        if (unit[0].x === newArray[0])
        {
            if (unit[0].y === newArray[1])
            {
            return
            }
        }
    }
    for (let X_Y of wallMap)
    {
        if (X_Y[0] === newArray[0])
        {
            if (X_Y[1] === newArray[1])
            {
            return
            }
        }
    }
    dropBomb = true;
    object.imageX = (x*object.size) + object.size;
    object.imageY = (y * object.size) + object.size;
    explosionOb.x = x
    explosionOb.y = y
    explosionOb.imageX = bomb.imageX;
    explosionOb.imageY = bomb.imageY;
    bombMap.push([x,y])
    bombRemoval = setTimeout(removeBomb,1000);
}

function removeBomb()
{
    console.log("boom")
    bombMap = [];
    objectHit();
    dropBomb = false;
    explosion = true;
    let fireRemoval = setTimeout(removeFire,500);
}

function removeFire()
{
    explosionArray = [];
    explosion = false;
}

function objectHit()
{
    let wallRemoval = false;
    for (let unit of dirtList)
    {
        let newDirtList = [];
        if (unit[0].x === explosionOb.x && unit[0].y === explosionOb.y 
            || unit[0].x === explosionOb.x+1 && unit[0].y === explosionOb.y 
            || unit[0].x === explosionOb.x+2 && unit[0].y === explosionOb.y 
            || unit[0].x === explosionOb.x-1 && unit[0].y === explosionOb.y
            || unit[0].x === explosionOb.x-2 && unit[0].y === explosionOb.y
            || unit[0].x === explosionOb.x && unit[0].y+1 === explosionOb.y
            || unit[0].x === explosionOb.x && unit[0].y+2 === explosionOb.y
            || unit[0].x === explosionOb.x && unit[0].y-1 === explosionOb.y
            || unit[0].x === explosionOb.x && unit[0].y-2 === explosionOb.y)
        {
            wallRemoval = true;
            let index = dirtList.indexOf(unit)
            dirtList.forEach((element,index1) => {
                if(index!==index1)
                {
                    newDirtList.push(element);
                }
            console.log("A Dirt removed")
                dirtList = enemyList;
                dirtList = newDirtList;
            })
        }
    }
    if (wallRemoval === false)
    {
        for (let unit of enemyList)
        {
                let newEnemyList = [];
                if (unit[0].x === explosionOb.x && unit[0].y === explosionOb.y 
                    || unit[0].x === explosionOb.x+1 && unit[0].y === explosionOb.y 
                    || unit[0].x === explosionOb.x+2 && unit[0].y === explosionOb.y 
                    || unit[0].x === explosionOb.x-1 && unit[0].y === explosionOb.y
                    || unit[0].x === explosionOb.x-2 && unit[0].y === explosionOb.y
                    || unit[0].x === explosionOb.x && unit[0].y+1 === explosionOb.y
                    || unit[0].x === explosionOb.x && unit[0].y+2 === explosionOb.y
                    || unit[0].x === explosionOb.x && unit[0].y-1 === explosionOb.y
                    || unit[0].x === explosionOb.x && unit[0].y-2 === explosionOb.y)
                {
                    let index = enemyList.indexOf(unit)
                    enemyList.forEach((element,index1) => {
                        if(index!==index1)
                        {
                            newEnemyList.push(element);
                        }
                    enemyList = enemyList;
                    enemyList = newEnemyList;
                    })
                }
            }
    }
}

function stopBomberperson(event)
{
    let key = event.key;
    if (key === "ArrowLeft")
    {
        moveLeft = false;
    } else if (key === "ArrowRight")
    {
        moveRight = false;
    } else if (key === "ArrowUp")
    {
        moveUp = false;
    } else if (key === "ArrowDown")
    {
        moveDown = false;
    }
}

function portalPlacement()
{
    let i = 0
    while (i < 1)
    {
        i += 1
        let x = randint(0,13);
        let y = randint(0,7);
        portal.x = x;
        portal.y = y;
        portal.imageX = x*portal.size + portal.size;
        portal.imageY = y*portal.size + portal.size;
        for (let X_Y of startLocation)
        {
            if (X_Y[0] === x && X_Y[1] === y)
            {
                portal.x = null;
                portal.y = null;
                portal.imageX = null;
                portal.imageY = null;
                i -= 1
            }
        }
        for (let X_Y of wallMap)
        {
            if (X_Y[0] === x && X_Y[1] === y)
            {
                portal.x = null;
                portal.y = null;
                portal.imageX = null;
                portal.imageY = null;
                 i -= 1
            }
        }
    }
    portalCheck = true;
}


function nextScreen(idName)
{
    window.cancelAnimationFrame(idName)
    pressEnter == false;
}

function enemiesGeneration(num)
{
    let i = 0
    while (i < num)
    {
        let choice = randint(1,5)
        let pict = null;
        let drawn = false;
        switch(choice)
        {
            case 1:
            pict = enemyOneImage;
            break;
            case 2:pict = enemyTwoImage;
            break;
            case 3:pict = enemyThreeImage;
            break;
            case 4:pict = enemyFourImage;
            break;
            default: pict = enemyOneImage;
        }    
        let x = randint(0,13);
        let y = randint(0,7);
        let enemy = new enemies(x,y,x*32+32,y*32+32,32,0,0,0,0,32,pict);
        enemyList.push([enemy]);
        i += 1;
        for (let X_Y of startLocation)
        {
            if (X_Y[0] === enemy.x && X_Y[1] === enemy.y)
                {
                    enemyList.pop();
                    i -= 1
                }
        }
        for (let X_Y of wallMap)
        {
            if (X_Y[0] === x && X_Y[1] === y)
            {
                enemyList.pop();
                 i -= 1
            }
        }
    }
    enemiesEmpty = false;
}

function dirtPlacement()
{
    for (let X_Y of dirtMap)
    {
        let dirt = new dirtBlocks(X_Y[0],X_Y[1],X_Y[0]*32+32,X_Y[1]*32+32,32,32,32,16);
        dirtList.push([dirt]);
    }
    dirtDone = true;
}

function moveEnemies()
{
    if (clock === 20)
    {
        for (let unit of enemyList)
        {
            if (unit[0].x === bomberperson.x)
            {
                let diff = bomberperson.y - unit[0].y
                if (diff < 0 )
                {
                    movementFunc(unit[0],0,-1)
                }
                else
                {
                    movementFunc(unit[0],0,1)
                }
            }
            else if (unit[0].y === bomberperson.y)
            {
                let diff = bomberperson.x - unit[0].x
                if (diff < 0 )
                {
                    movementFunc(unit[0],-1,0)
                }
                else
                {
                    movementFunc(unit[0],1,0)
                }
            }
            else
                {
                    movementFunc(unit[0],randint(-1,1),randint(-1,1))
                }
        }
    clock = 0
    }
}

function randint(min, max)
{
    return Math.round(Math.random() * (max - min)) + min;
}


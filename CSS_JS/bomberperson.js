let canvas;
let context;

let fpsInterval = 1000/30;
let now;
let then = Date.now();

// Variables for images.
let bomberpersonImage = new Image();
let merlinImage = new Image();
let backgroundImage = new Image();
let title1Image = new Image();
let title2Image = new Image();
let portalScene1Image = new Image();
let portalScene2Image = new Image();
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
let winnerImage = new Image();
let loserImage = new Image();
let rulesImage = new Image();

// Dynamic objects like the PC/NPC and bombs, their varibles change within the game.
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

let explosionOb =
{
    x : 0,
    y : 0,
    imageX : 0,
    imageY : 0,
    size : 64,
    frame : 0 
}

// Creating a enemy class, so I fill it in and cycle through it with various loops. I was told by a friend who explained it and suggested it. 
// I take no credit but it was extremely helpful.
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

// Creating the walls that can be exploded. Copied the above logic. 
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

// Non Dynamic Objects like Walls/Maps - Contains information that is referenced but never changed.

let merlin = 
{
    imageX : 0,
    imageY : 0,
    size : 32,
    frameX : 1,
    frameY : 0,
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

let walls = 
{
    x : 0,
    y : 0,
    width : 32,
    height : 32,
    frameX : 2,
    frameY : 35,
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

// Various 2D arrays that contain X/Y co-ordinates. Refered a lot and sometimes dynamic like bombMap


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

let startLocation =
[
    [0,0],[1,0],[2,0],
    [0,1],[0,2],[0,3],
    [1,2],[2,1],[2,2],
    [2,3]
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

// Additional variables - Mainly Booleans
let isTutorial = false;
let moveLeft = false;
let moveRight = false;
let moveDown = false;
let moveUp = false;
let pressEnter = false;
let dropBomb = false;
let bombWarning = false;
let enemyAppear = false;
let renderBoss = false;
let tutorialDone = false;
let portalCheck = false;
let explosion = false;
let enemiesEmpty = true;
let titleCheck = false;
let portalSceneCheck = false;
let clock = 0;
let title_id;
let draw_id;
let tutorial_id;
let portal_id;
let rules_id;
let winner_id;
let loser_id;

// Tutorial objects/arrays that aren't used for the main game.
let tutorialMap =
[
    [0,0],[0,1],[-1,1],[-1,0],[1,0]
]
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


// Event listeners
document.addEventListener("DOMContentLoaded", init, false);
window.addEventListener("keydown", startGame, false);
window.addEventListener("keydown", droppedBomb, false);
window.addEventListener("keyup", droppedBomb, false);
window.addEventListener("keydown", moveBomberperson, false);
window.addEventListener("keyup", stopBomberperson, false);

// The function that creates all the images,canvas and sets a few parameters for the tutorial then starts the title function.
function init() 
{
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    bomberperson.x = 4;
    bomberperson.y = 5;
    bomberperson.imageX = 160;
    bomberperson.imageY = 192;
    bomberperson.frameY = 2;
    bomberperson.direction = "E";
    merlin.imageX = 224;
    merlin.imageY = 192;
    merlin.frameY = 1;
    bomberpersonImage.src = "../images/Soldier 01-1.png"
    merlinImage.src = "../images/Male 04-1.png"
    backgroundImage.src = "../images/sci-fi-platformer-tiles-32x32-extension.png"
    portalScene1Image.src = "../images/portalScene1.png"
    portalScene2Image.src = "../images/portalScene2.png"
    title1Image.src = "../images/title1.png"
    title2Image.src = "../images/title2.png"
    tutorialImage.src = "../images/trees-and-bushes.png"
    boxImage.src = "../images/14.jpg"
    rimImage.src = "../images/simpleGraphics_tiles16x16.png"
    textImage.src = "../images/white_font_by_onixgames.com.png"
    portalImage1.src = "../images/portalRings2.png"
    portalImage2.src = "../images/portalRings1.png"
    bossImage.src = "../images/Boss 01.png"
    enemyOneImage.src = "../images/Enemy/Enemy 04-1.png"
    enemyTwoImage.src = "../images/Enemy/Enemy 05-1.png"
    enemyThreeImage.src = "../images/Enemy/Enemy 06-1.png"
    enemyFourImage.src = "../images/Enemy/Enemy 15-1.png"
    wallImage.src = "../images/sci-fi-platformer-tiles-32x32-extension.png"
    bombImage.src = "../images/bomb_01.png"
    fireImage.src = "../images/fire5_64.png"
    dirtImage.src = "../images/simpleGraphics_tiles16x16.png"
    winnerImage.src = "../images/winner.png"
    loserImage.src = "../images/loser.png"
    rulesImage.src = "../images/rules.png"
    title();
}

// Title Screen Middleman
function title()
{
    if (pressEnter === false)
    {
    drawTitle();
    }
    else
    {
        pressEnter == false;
        tutorial();
        nextScreen(title_id);
    }
}

// Tutorial Screen Middleman
function tutorial()
{
    pressEnter = false;
    isTutorial = true;
    if (tutorialDone === false)
    {
    drawTutorial();
    }
    else
    {
        pressEnter = false;
        bomberperson.x = 0;
        bomberperson.y = 0;
        bomberperson.imageX = 32;
        bomberperson.imageY = 32;
        bomberperson.frameY = 0;
        bomberperson.direction = "S";
        portalScene();
    }
}

// Portal Screen Middleman
function portalScene()
{
    isTutorial = false;
    if (pressEnter === false)
    {
        drawPortalScene();
    }
    else
    {
        pressEnter = false;
        nextScreen(portal_id);
        rulesScene();
    }
}

// Rules Middleman
function rulesScene()
{
    if (pressEnter === false)
    {
        drawRulesScene();
    }
    else
    {
        nextScreen(rules_id);

        draw();
    }
}

// Draws the Title Screen.
function drawTitle()
{
    title_id = window.requestAnimationFrame(drawTitle);

    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);

    context.clearRect(0,0,canvas.width,canvas.height);
    // Tracks the clock, to give a flicker "Press Enter" Effect.
    if (titleCheck === false && clock === 20)
    {
        context.drawImage(title1Image,0,0)
        titleCheck = true;
        clock = 0
    }
    else
    {
        context.drawImage(title2Image,0,0)
        titleCheck = false;
    }
    clock += 1
    if (pressEnter)
    {
        title();
    }
}

// Draws the Tutorial Map. Gets modified often during it's course.
function drawTutorial()
{
    tutorial_id = window.requestAnimationFrame(drawTutorial);

    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);

    context.clearRect(0,0,canvas.width,canvas.height);
    // Drawing the Wall Rim.
    for (let r = 0; r < 20; r += 1)
        {
        for (let c = 0; c < 32; c += 1)
            {
            let tile = background_tutorial.map[r][c];
            if (tile >= 0) 
                {
                let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_1);
                let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_1);
                context.drawImage(rimImage,
                    tileCol * background_tutorial.tileSize_1, tileRow * background_tutorial.tileSize_1, background_tutorial.tileSize_1, background_tutorial.tileSize_1,
                    c * background_tutorial.tileSize_1, r * background_tutorial.tileSize_1, background_tutorial.tileSize_1, background_tutorial.tileSize_1);
                }
            }
        }
    // Then drawing the Grass and Trees
    for (let r = 1; r < 20; r += 1)
        {
        for (let c = 7; c < 24; c += 1)
            {
            let tile = background_tutorial.map[r][c];
            if (tile >= 0) 
                {
                let tileRow = Math.floor(tile / background_tutorial.tilesPerRow);
                let tileCol = Math.floor(tile % background_tutorial.tilesPerRow);
                context.drawImage(tutorialImage,
                    tileCol * background_tutorial.tileSize, tileRow * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize,
                    c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                }
            }
        }

    // Then adding the text box
    for (let r = 16; r < 20; r += 1)
        {
        for (let c = 7; c < 24; c += 1)
            {
            let tile = background_tutorial.map[r][c];
            if (tile >= 0) 
                {
                let tileRow = Math.floor(tile / background_tutorial.tilesPerRow);
                let tileCol = Math.floor(tile % background_tutorial.tilesPerRow);
                context.drawImage(boxImage,
                    tileCol * background_tutorial.tileSize, tileRow * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize,
                    c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                }
            }
        }

        // Then adding the text itself.
        for (let r = 16; r < 20; r += 1)
            {
            for (let c = 7; c < 24; c += 1)
                {
                let tile = background_tutorial.map[r][c];
                if (tile >= 0) 
                    {
                    let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_2);
                    let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_2);
                    context.drawImage(textImage,
                        tileCol * background_tutorial.charWidth, tileRow * background_tutorial.charHeight, background_tutorial.tileSize, background_tutorial.tileSize,
                        c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                    }
                }
            }

    // Framework for bomberknight during tutorial.
    if (moveLeft || moveRight || moveDown || moveUp)
    {
        bomberperson.frameX = (bomberperson.frameX + 1) % 3
    }

    // Drawing Bomberknight in tutorial
    context.drawImage(bomberpersonImage,
        bomberperson.frameX*bomberperson.size, bomberperson.frameY*bomberperson.size, bomberperson.size, bomberperson.size,
        bomberperson.imageX,bomberperson.imageY,bomberperson.size,bomberperson.size);

    // Drawing Merlin - A static character.
    context.drawImage(merlinImage,
        merlin.frameX*merlin.size, merlin.frameY*bomberperson.size, merlin.size, merlin.size,
        merlin.imageX,merlin.imageY,merlin.size,merlin.size);

        // When you drop the bomb in the tutorial, it will trigger this.
        if (dropBomb)
        {
            context.drawImage(bombImage,bomb.frame,bomb.frame,bomb.size,bomb.size,bomb.imageX,bomb.imageY,bomb.size,bomb.size)
        }
        else if (dropBomb === false && explosion === true)
        {
            context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY,bomb.size,bomb.size)
            context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX+bomb.size,explosionOb.imageY,bomb.size,bomb.size)
            context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY+bomb.size,bomb.size,bomb.size)
            context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX-bomb.size,explosionOb.imageY,bomb.size,bomb.size)
            context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY-bomb.size,bomb.size,bomb.size)
        }

        // Changing of the scenes - This is scripted. So if the player follows the instructions then it should work perfectly.
        if (pressEnter && bombWarning === false && enemyAppear === false && renderBoss === false)
        {
            changeScene(1);
        }
        else if (moveDown)
        {
            changeScene(2);
        }
        else if (moveUp)
        {
            changeScene(3);
        }
        else if (moveRight)
        {
            changeScene(4);
        }
        else if(dropBomb)
        {
            changeScene(5);
        }
        else if(bombWarning && pressEnter && enemyAppear === false)
        {
            changeScene(6);
        }
        else if(enemyAppear && pressEnter && bombWarning && renderBoss == false)
        {
            changeScene(7);
        }
        if (enemyAppear && bombWarning && renderBoss)
        {
            // This muddles the trees and bushes and then starts drawing the boss. That muddle is a little shame but gonna keep it for now.
            for (let r = 1; r < 3; r += 1)
            {
                for (let c = 15; c < 21; c += 1)
                {
                    let tile = background_tutorial.map[r][c];
                    if (tile >= 0) 
                        {
                            let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_2);
                            let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_2);
                            context.drawImage(portalImage1,
                                tileCol * background_tutorial.charWidth, tileRow * background_tutorial.charHeight, background_tutorial.tileSize, background_tutorial.tileSize,
                                c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                        }
                }
            }
            for (let r = 3; r < 9; r += 1)
            {
                for (let c = 15; c < 21; c += 1)
                {
                    let tile = background_tutorial.map[r][c];
                    if (tile >= 0) 
                        {
                            let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_2);
                            let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_2);
                            context.drawImage(bossImage,
                                tileCol * background_tutorial.charWidth, tileRow * background_tutorial.charHeight, background_tutorial.tileSize, background_tutorial.tileSize,
                                c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                        }
                }
            }
        }
        if (pressEnter && renderBoss)
        {
        changeScene(8)
        }
        // Final scene gives you the pass to move onto the next screen.
        if (tutorialDone)
        {
            nextScreen(tutorial_id);
            tutorial();
        }
}

// Draws the portal Scene - Nothing new here.
function drawPortalScene()
{
    portal_id = window.requestAnimationFrame(drawPortalScene);

    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);

    context.clearRect(0,0,canvas.width,canvas.height);
    if (portalSceneCheck === false && clock === 20)
    {
        context.drawImage(portalScene1Image,0,0)
        portalSceneCheck = true;
        clock = 0
    }
    else
    {
        context.drawImage(portalScene2Image,0,0)
        portalSceneCheck = false;
    }
    clock += 1
    if (pressEnter)
    {
        portalScene();
    }
}

// Displays the Rules
function drawRulesScene()
{
    rules_id = window.requestAnimationFrame(drawRulesScene);

    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(rulesImage,0,0)
    if (pressEnter)
    {
        rulesScene();
    }
}

// Main draw function that is drawing all the parts to our game.
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

    // Drawing the level map.
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

    // Framework for bomberknight movement.
    if (moveLeft || moveRight || moveDown || moveUp)
        {
            bomberperson.frameX = (bomberperson.frameX + 1) % 3
        }

    // Drawing Bomberknight in main game.
    context.drawImage(bomberpersonImage,
        bomberperson.frameX*bomberperson.size, bomberperson.frameY*bomberperson.size, bomberperson.size, bomberperson.size,
        bomberperson.imageX,bomberperson.imageY,bomberperson.size,bomberperson.size);

    // Drawing the Exit - Checks if the portal is placed on map, if not, places it via the called function then starts repeated drawing it.
    if (portalCheck === false)
    {
        portalPlacement();
    } 
    else
    {
        context.drawImage(portalImage1,portal.frameX*portal.size,portal.frameY*portal.size,portal.size,portal.size,portal.imageX,portal.imageY,portal.size,portal.size)
        // Loops through the image for a cool effect.
        portal.frameX = (portal.frameX + 1) % 4
    }

    // Creating and Drawing the enemies. Generates X amount where X is the parameter called. In this case - 8.
    // After placement, it then repeatedly draws them via context.
    if (enemiesEmpty)
    {
        enemiesGeneration(4);
    }
    else
    {
        for (let unit of enemyList)
        {
            context.drawImage(unit[0].pict,unit[0].frameX,unit[0].frameY,unit[0].size,unit[0].size,unit[0].imageX,unit[0].imageY,unit[0].size,unit[0].size)
        }
    }

    // Same logic as the enemies. Places the dirt via the dirtMap and then repeatedly draws them.
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

    // Drawing the bomb - If the bomb gets dropped, it becomes true. Draws the bomb. 
    if (dropBomb)
    {
        context.drawImage(bombImage,bomb.frame,bomb.frame,bomb.size,bomb.size,bomb.imageX,bomb.imageY,bomb.size,bomb.size)
    }
    // After bomb pops, it switches to explosions.
    else if (dropBomb === false && explosion === true)
    {
        // This is lazy but I couldn't think of anything better. It just draws the X/Y of the explosionOb then adds the size in a positive/negative x/y.
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX+bomb.size,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY+bomb.size,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX-bomb.size,explosionOb.imageY,bomb.size,bomb.size)
        context.drawImage(fireImage,explosionOb.frame,explosionOb.frame,explosionOb.size,explosionOb.size,explosionOb.imageX,explosionOb.imageY-bomb.size,bomb.size,bomb.size)
    }
    // increase the clock for enemy movement.
    clock += 1;
    // Goto our move enemies function.
    moveEnemies();
    // Checking if Won - Kill all bad guys or find the portal.
    if(bomberperson.x === portal.x && bomberperson.y === portal.y || enemyList.length === 0)
    {
        nextScreen(draw_id);
        winner();
    }
    // Checking if Lost - If an enemy walks into your square. You lose.
    for (let unit of enemyList)
    {
        if (bomberperson.x === unit[0].x && bomberperson.y === unit[0].y)
        {
            nextScreen(draw_id);
            loser();
        }
    }

}

// This function checks for enter pressing. Stops repeats by checking if enter is false.
function startGame(event)
{
    let key = event.key;
    if (key === "Enter" && pressEnter == false)
    {
        pressEnter = true;
    }
}

// Drops the bomb by listening for spacebar and if the bomb doesn't exist. 
function droppedBomb(event)
{
    let key = event.key;
    if (key === " " && dropBomb == false)
    {
        // Tutorial bomb has no parameters. It just spawns where I want it.
        if (isTutorial)
        {
            bombTut(bomb,bomberperson.x+1,bomberperson.y);
        }
        // If you are facing north, we need to check the space above your character. This logic is mirrored in all directional checks.
        else if (bomberperson.direction === "N")
        {
            // It gives the x/y of bomberperson and the bomb object.
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
    // If you try to drop more than one bomb. It just returns.
    else
    {
        return;
    }
}

// Movement function. Listens for arrow keys
// Checks for tutorial first as the tutorial has no boundaries. You can move anywhere on that map - not great but that's your choice.
// In game, movement is limited to the play area.
function moveBomberperson(event)
{
    let key = event.key;
        if(event.repeat)
        {
            return
        }

        if (key === "ArrowLeft")
        {
            // You need to be facing west to move west.
            if (bomberperson.direction === "W")
            {
                moveLeft = true;
                moveRight = false;
                moveUp = false;
                moveDown = false;
                if (isTutorial)
                    {
                        movementTut(bomberperson,-1,0);
                    }
                    else
                    {
                        // Because we know we are moving West then you are moving negatively Y and keeping the same X.
                        // This logic is used for all directions.
                        movementFunc(bomberperson,-1,0);
                    }

            }
            // Otherwise, you turn west first. This is intentional and gives a slower gameplay. Also allows you to drop bombs in corners.
            else
            {
                bomberperson.direction = "W"
                // Change frameY so you face that direction in game.
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
                if (isTutorial)
                    {
                        movementTut(bomberperson,1,0);
                    }
                    else
                    {
                        movementFunc(bomberperson,1,0);
                    }
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
                if (isTutorial)
                    {
                        movementTut(bomberperson,0,-1);
                    }
                    else
                    {
                        movementFunc(bomberperson,0,-1);
                    }
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
                if (isTutorial)
                    {
                    movementTut(bomberperson,0,1);
                    }
                    else
                    {
                    movementFunc(bomberperson,0,1);
                    }
            }
            else
            {
                bomberperson.direction = "S"
                bomberperson.frameY = 0
            }
        }

}

// This function checks for legal moves then moves you if possible.
// This also doubles as the movement function for the enemies. Hence why it is object parameter and not bomberknight.
function movementFunc(object,x,y)
{
    // Checking if East movement. 
    // First you can only come here if facing the right direction but changes it anyway.
    // The if statement checks for the correct parameters passed in. East movement is always X+1 and Y+0.
    if (y === 0 && x === 1)
    {
        object.direction = "E"
        object.frameY = 2
        // First check, are you moving out of bounds? i.e into the pipe wall? Then illegal move, return.
        if ((object.x + x) === 14)
        {
            return
        }
    // Checks all the explosive walls and see if you are trying to move into them. Illegal move, return.
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
    // Checks the bombMap and if you are trying to walk into your own bomb. Illegal Move, return.
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
    // Finally checks the wallMap and if you are trying to walk into a wall space. illegal move, return.
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
    // Oh? You made it? Then change your X co-ords and your imageX to your new destination.
    // We don't change the Y because we were only moving east.
    object.x = object.x + x
    object.imageX = object.imageX + object.movement
    }
    // Same checks for West Movement.
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
    // Same checks for South Movement.
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
    // Same checks for North Movement.
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

// Free movement in the tutorial. Have fun.
function movementTut(object,x,y)
{
    // Checking if Right movement.
    if (y === 0 && x === 1)
    {
        object.direction = "E"
        object.frameY = 2
        object.x = object.x + x
        object.imageX = object.imageX + object.movement
    }
    // Checking for Left Movement
    else if (y === 0 && x === -1)
    {
        object.direction = "W"
        object.frameY = 1
        object.x = object.x + x
        object.imageX = object.imageX - object.movement
    } 
    // Checking for Down Movement
    else if (y === 1 && x === 0)
    {
        object.direction = "S"
        object.frameY = 0
        object.y = object.y + y
        object.imageY = object.imageY + object.movement
    }
    // Checking for Up Movement
    else if (y === -1 && x === 0)
    {
        object.direction = "N"
        object.frameY = 3
        object.y = object.y + y
        object.imageY = object.imageY - object.movement
    } 
}

// This is the legal bomb placement checker and timer.
// This functions very similarly to the movement checker.
function bombTimer(object,x,y)
{
    // Checks if bomb is out of bounds. i.e on the pipe wall.
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
    // Checks a local array with the x,y passed in.
    let newArray = [x,y]
    // Goes through our dirtlist/enemylist/wallMap to see if the placement is legal. If not, return.
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
    // You passed the checks. Then bomb placement is true.
    dropBomb = true;
    // Change the imageX and imageY
    object.imageX = (x*object.size) + object.size;
    object.imageY = (y * object.size) + object.size;
    // Plot the flames/explosion x,y and the imageX/imageY
    explosionOb.x = x
    explosionOb.y = y
    explosionOb.imageX = bomb.imageX;
    explosionOb.imageY = bomb.imageY;
    // Put this array value into our bombMap so it can be checked by the movement function.
    bombMap.push([x,y])
    // After 1ms. Run the removal of the bomb.
    let bombRemoval = setTimeout(removeBomb,1000);
}

// Tutorial bomb is pre-set and just needs to explode. No checks on this.
function bombTut(object,x,y)
{
    dropBomb = true;
    object.imageX = (x*object.size) + object.size;
    object.imageY = (y * object.size) + object.size;
    explosionOb.imageX = bomb.imageX;
    explosionOb.imageY = bomb.imageY;
    bombMap.push([x,y])
    let bombRemoval = setTimeout(removeBomb,1000);
}

// The function called after 1ms. Removes the bomb. Sets the explosions.
function removeBomb()
{
    // reset our bomb 2D array.
    bombMap = [];
    // Runs this function to see if we hit anything.
    objectHit();
    // Allows you to drop another bomb.
    dropBomb = false;
    // Allows for drawing of flames/explosion.
    explosion = true;
    // Remove those fires after .5ms.
    let fireRemoval = setTimeout(removeFire,500);
}

// Literally removes the flames.
function removeFire()
{
    explosion = false;
}

// This function checks for what has been hit and removes it. Contains code from a friend.
function objectHit()
{
    // First create a local boolean to check.
    let wallRemoval = false;
    // Go through our dirtList. If we find that the X/Y of a piece of dirt matches the X/Y of our explosion. Remove the dirt.
    for (let unit of dirtList)
    {
        // Create a local list to be checked then wiped.
        let newDirtList = [];
        // Does the explosion or it's expanding flames touch a wall?
        if (unit[0].x === explosionOb.x && unit[0].y === explosionOb.y 
            || unit[0].x === explosionOb.x+1 && unit[0].y === explosionOb.y 
            || unit[0].x === explosionOb.x-1 && unit[0].y === explosionOb.y
            || unit[0].x === explosionOb.x && unit[0].y+1 === explosionOb.y
            || unit[0].x === explosionOb.x && unit[0].y-1 === explosionOb.y)
        {
            // Wall is being removed. This gives priority to walls not enemies.
            wallRemoval = true;
            // Finds the index of the wall that was hit.
            let index = dirtList.indexOf(unit)
            // Goes through our dirt list and if the index does not match then move that piece of dirt into our new array.
            // This effectively creates a new array containing all the dirt apart from the one that was hit. 
            // This works with multiples dirt being hit.
            // This code was given by my friend. I take no credit. It works well.
            dirtList.forEach((element,index1) => {
                if(index!==index1)
                {
                    newDirtList.push(element);
                }
                // Set our dirtList to the old dirtList then instantly set it to the new dirtList
                dirtList = dirtList;
                dirtList = newDirtList;
            })
        }
    }
    // If you didn't hit dirt. Did you hit an enemy?
    // This works the same as the dirt. Nothing new here.
    // This was given by a friend first and I reused it for the dirt logic. 
    if (wallRemoval === false)
    {
        for (let unit of enemyList)
        {
            let newEnemyList = [];
            if (unit[0].x === explosionOb.x && unit[0].y === explosionOb.y 
                || unit[0].x === explosionOb.x+1 && unit[0].y === explosionOb.y 
                || unit[0].x === explosionOb.x-1 && unit[0].y === explosionOb.y
                || unit[0].x === explosionOb.x && unit[0].y+1 === explosionOb.y
                || unit[0].x === explosionOb.x && unit[0].y-1 === explosionOb.y)
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

// function for tracking key ups. 
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

// Randomly places the portal.
function portalPlacement()
{
    let i = 0
    while (i < 1)
    {
        // i becomes 1 so we don't drop into negatives.
        i += 1
        // generate random x/y
        let x = randint(0,13);
        let y = randint(0,7);
        // assign those values
        portal.x = x;
        portal.y = y;
        portal.imageX = x*portal.size + portal.size;
        portal.imageY = y*portal.size + portal.size;
        // Go through our startlocation 2D array.
        for (let X_Y of startLocation)
        {
            // if the X/Y falls in the 2D array then reset the values and take away one.
            if (X_Y[0] === x && X_Y[1] === y)
            {
                portal.x = null;
                portal.y = null;
                portal.imageX = null;
                portal.imageY = null;
                i -= 1
            }
        }
        // WallMap and starting location don't share any boxes. Therefore it is unlikely to go to i = -1.
        // This does the same, checks X/Y of the walls to the generated X/Y
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
    // After it completes, set this boolean.
    portalCheck = true;
}

// This takes the id of the animationFrame and cancels it. Saves repeating code.
function nextScreen(idName)
{
    window.cancelAnimationFrame(idName)
}

// Generate our enemies with random pictures and random spaces.
function enemiesGeneration(num)
{
    let i = 0
    // while less then the parameter passed in. In our case, 8.
    while (i < num)
    {
        // Picks a random number for our switch/case. 
        // This was also code given by my friend. 
        // It allows for random images to be chosen so we don't have all the same enemy.
        let choice = randint(1,4)
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
        // generate a random X/Y for the enemy
        let x = randint(0,13);
        let y = randint(0,7);
        // Create the enemy using our class.
        // Code from friend.
        let enemy = new enemies(x,y,x*32+32,y*32+32,32,0,0,0,0,32,pict);
        // Add this to our list.
        enemyList.push([enemy]);
        // increment i so we don't go to negative i.
        i += 1;
        // Illegal space? Then remove the enemy created and decrease i.
        for (let X_Y of startLocation)
        {
            if (X_Y[0] === enemy.x && X_Y[1] === enemy.y)
                {
                    enemyList.pop();
                    i -= 1
                }
        }
        // Same logic applied here. Once again startLocation and WallMap don't cross over.
        for (let X_Y of wallMap)
        {
            if (X_Y[0] === x && X_Y[1] === y)
            {
                enemyList.pop();
                 i -= 1
            }
        }
    }
    // Boolean logic allows us to draw the generated enemies.
    enemiesEmpty = false;
}

// Place dirt where we said to place dirt.
function dirtPlacement()
{
    // Just loops over the map we made. Places dirt there.
    for (let X_Y of dirtMap)
    {
        let dirt = new dirtBlocks(X_Y[0],X_Y[1],X_Y[0]*32+32,X_Y[1]*32+32,32,32,32,16);
        dirtList.push([dirt]);
    }
    dirtDone = true;
}

// Movement for the enemies.
// This is called by the draw function repeatedly while increasing the clock.
function moveEnemies()
{
    // Only works if clock is 40. Faster clock, harder game etc.
    if (clock === 40)
    {
        // Goes through our enemyList
        for (let unit of enemyList)
        {
            // If the enemy is on the same X as bomberknight then increase/decrease enemy y towards them.
            // This gives the illusion of chasing while line of sight of bomberknight.
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
            // Checks if on same Y and does the same thing.
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
            // If not on same X or Y then just random move. Can be -1/-1,-1/0,-1/+1 or 1/-1,1/0,1/+1 or 0/-1,0/0,0/+1 or +1/+1,+1/0,+1/-1
            else
                {
                    movementFunc(unit[0],randint(-1,1),randint(-1,1))
                }
        }
    // reset our clock, so we do it every 20 ticks.
    clock = 0
    }
}

// A horribly long function that uses if statements to change the scene in the tutorial. Very clunky and easily skipped through.
// But this works and as long as the player follows the instructions, then no issues.
// Works by updating the tutorial map with new arrays that contain xFrame/yFrame information.
function changeScene(n)
{
    if(n === 1)
    {
        pressEnter = false;
        background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,12,69,84,83,114,84,82,65,73,78,114,78,79,87,46,114,114,6]
        background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,16,82,69,83,83,114,68,79,87,78,114,84,79,114,114,114,114,-1]
        background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,84,85,82,78,114,65,78,68,114,77,79,86,69,46,114,114,114,-1]
        background_tutorial.map[19] = [-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,4,79,87,78,114,114,114,114,114,114,114,-10,-10,-10,-10,-10,-10]
    }
    else if (n === 2)
    {
        pressEnter = false;
        background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,16,69,82,70,69,67,84,46,114,114,114,114,114,114,114,114,114,6]
        background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,14,79,87,114,77,79,86,69,114,76,69,70,84,114,114,114,114,-1]
        background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,84,72,69,78,114,85,80,46,114,114,114,114,114,114,114,114,114,-1]
        background_tutorial.map[19] = [-1,-1,-1,-1,-1,-1,-2,16,82,69,83,83,114,12,69,70,84,114,45,114,21,80,114,114,-10,-10,-10,-10,-1,-1,-1]
    }
    else if (n === 3)
    {
        moveDown = false;
        background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,14,79,87,114,77,79,86,69,114,82,73,71,72,84,114,114,114,6]
        background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,66,65,67,75,114,84,79,114,77,69,46,114,114,114,114,114,114,-1]
        background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,-1]
        background_tutorial.map[19] = [-1,-1,-1,-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,18,73,71,72,84,114,114,114,-10,-10,-10,-10,-10,-10,-10]
    }
    else if (n === 4)
    {
        moveUp = false;
        background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,9,114,65,83,83,85,77,69,114,89,79,85,114,114,114,114,114,6]
        background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,82,69,77,69,77,66,69,82,114,72,79,87,114,84,79,114,114,-1]
        background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,68,82,79,80,114,65,114,66,79,77,66,46,114,114,114,114,114,-1]
        background_tutorial.map[19] = [-1,-1,-1,-1,-1,-1,-2,114,114,16,82,69,83,83,114,19,80,65,67,69,66,65,82,114,-10,-10,-10,-10,-10,-10,-10]
    }
    else if (n === 5)
    {
        bombWarning = true;
        background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,14,15,20,114,8,5,18,5,114,25,15,21,114,6,15,15,12,6]
        background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,1,12,1,11,1,26,1,13,33,114,114,114,114,114,114,114,114,-1]
        background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,-1]
        background_tutorial.map[19] = [-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,5,78,84,69,82,114,114,114,144,114,114,-10,-10,-10,-10,-10,-10,-10,-10]
    }
    else if (n === 6)
    {
        enemyAppear = true;
    }
    else if (n === 7)
    {
        pressEnter = false;
        renderBoss = true;
        background_tutorial.map[1][15] = [0]
        background_tutorial.map[1][16] = [1]
        background_tutorial.map[1][17] = [0]
        background_tutorial.map[1][18] = [1]
        background_tutorial.map[1][19] = [0]
        background_tutorial.map[1][20] = [1]


        background_tutorial.map[2][15] = [16]
        background_tutorial.map[2][16] = [17]
        background_tutorial.map[2][17] = [16]
        background_tutorial.map[2][18] = [17]
        background_tutorial.map[2][19] = [16]
        background_tutorial.map[2][20] = [17]

        background_tutorial.map[3][15] = [96]
        background_tutorial.map[3][16] = [97]
        background_tutorial.map[3][17] = [98]
        background_tutorial.map[3][18] = [99]
        background_tutorial.map[3][19] = [100]
        background_tutorial.map[3][20] = [101]

        background_tutorial.map[4][15] = [112]
        background_tutorial.map[4][16] = [113]
        background_tutorial.map[4][17] = [114]
        background_tutorial.map[4][18] = [115]
        background_tutorial.map[4][19] = [116]
        background_tutorial.map[4][20] = [117]

        background_tutorial.map[5][15] = [128]
        background_tutorial.map[5][16] = [129] 
        background_tutorial.map[5][17] = [130]
        background_tutorial.map[5][18] = [131]
        background_tutorial.map[5][19] = [132]
        background_tutorial.map[5][20] = [133]

        background_tutorial.map[6][15] = [144]
        background_tutorial.map[6][16] = [145] 
        background_tutorial.map[6][17] = [146]
        background_tutorial.map[6][18] = [147]
        background_tutorial.map[6][19] = [148]
        background_tutorial.map[6][20] = [149]

        background_tutorial.map[7][15] = [160]
        background_tutorial.map[7][16] = [161] 
        background_tutorial.map[7][17] = [162]
        background_tutorial.map[7][18] = [163]
        background_tutorial.map[7][19] = [164]
        background_tutorial.map[7][20] = [165]

        background_tutorial.map[8][15] = [176]
        background_tutorial.map[8][16] = [177] 
        background_tutorial.map[8][17] = [178]
        background_tutorial.map[8][18] = [179]
        background_tutorial.map[8][19] = [0]
        background_tutorial.map[8][20] = [0]

        background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,15,72,114,78,79,114,65,78,114,69,86,73,76,114,114,114,114,6]
        background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,77,65,71,69,46,9,39,76,76,114,72,65,78,68,76,69,114,-1]
        background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,84,72,73,83,33,114,26,9,16,114,26,1,16,33,114,114,114,-1]
        background_tutorial.map[19] = [-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,5,78,84,69,82,114,114,114,144,114,114,-10,-10,-10,-10,-10,-10,-10,-10]
    }
    else
    {
        tutorialDone = true;
    }
}

// Find portal or kill all enemies? You won.
function winner()
{
    winner_id = window.requestAnimationFrame(winner);

    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);

    if (pressEnter === false)
    {
        context.drawImage(winnerImage,0,0)
    }
    else
    {
        // moveLeft = false;
        // moveRight = false;
        // moveDown = false;
        // moveUp = false;
        // dropBomb = false;
        // bombWarning = false;
        // enemyAppear = false;
        // renderBoss = false;
        // tutorialDone = false;
        // portalCheck = false;
        // explosion = false;
        // enemiesEmpty = true;
        // titleCheck = false;
        // portalSceneCheck = false;
        // clock = 0;
        // pressEnter = false;
        hardReset();
        nextScreen(winner_id)
        init();
    }
}

// Died to an enemy? You lose.
function loser()
{
    loser_id = window.requestAnimationFrame(loser);

    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);

    if (pressEnter === false)
    {
        context.drawImage(loserImage,0,0)
    }
    else
    {
        // moveLeft = false;
        // moveRight = false;
        // moveDown = false;
        // moveUp = false;
        // dropBomb = false;
        // bombWarning = false;
        // enemyAppear = false;
        // renderBoss = false;
        // tutorialDone = false;
        // portalCheck = false;
        // explosion = false;
        // enemiesEmpty = true;
        // titleCheck = false;
        // portalSceneCheck = false;
        // clock = 0;
        // pressEnter = false;
        hardReset();
        nextScreen(loser_id)
        init();
    }
}

// This resets all the parameters for another play.
function hardReset()
{
    fpsInterval = 1000/30;
    then = Date.now();
    bomberpersonImage = new Image();
    merlinImage = new Image();
    backgroundImage = new Image();
    title1Image = new Image();
    title2Image = new Image();
    portalScene1Image = new Image();
    portalScene2Image = new Image();
    tutorialImage = new Image();
    boxImage = new Image();
    rimImage = new Image();
    textImage = new Image();
    portalImage1 = new Image();
    portalImage2 = new Image();
    bossImage = new Image();
    enemyOneImage = new Image();
    enemyTwoImage = new Image();
    enemyThreeImage = new Image();
    enemyFourImage = new Image();
    wallImage = new Image();
    dirtImage = new Image();
    bombImage = new Image();
    fireImage = new Image();
    winnerImage = new Image();
    loserImage = new Image();
    rulesImage = new Image();
    bomberperson = 
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
    bomb =
    {
        x : 0,
        y : 0,
        imageX : 0,
        imageY : 0,
        size : 32,
        frame : 0
    }
    explosionOb =
    {
        x : 0,
        y : 0,
        imageX : 0,
        imageY : 0,
        size : 64,
        frame : 0 
    }
    enemyList = [];
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
    dirtDone = false;
    dirtList = [];
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
      merlin = 
        {
            imageX : 0,
            imageY : 0,
            size : 32,
            frameX : 1,
            frameY : 0,
        }

        portal = 
        {
            x : 0,
            y : 0,
            imageX : 0,
            imageY : 0,
            size: 32,
            frameX : 0,
            frameY : 0
        }

        walls = 
        {
            x : 0,
            y : 0,
            width : 32,
            height : 32,
            frameX : 2,
            frameY : 35,
        }

        background_game = 
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

              dirtMap = 
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

      startLocation =
    [
        [0,0],[1,0],[2,0],
        [0,1],[0,2],[0,3],
        [1,2],[2,1],[2,2],
        [2,3]
    ];

      wallMap =
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

      bombMap = [];

        isTutorial = false;
          moveLeft = false;
          moveRight = false;
          moveDown = false;
          moveUp = false;
          pressEnter = false;
          dropBomb = false;
          bombWarning = false;
          enemyAppear = false;
          renderBoss = false;
          tutorialDone = false;
          portalCheck = false;
          explosion = false;
          enemiesEmpty = true;
          titleCheck = false;
          portalSceneCheck = false;
          clock = 0;
          title_id;
          draw_id;
          tutorial_id;
          portal_id;
          rules_id;
          winner_id;
          loser_id;


        tutorialMap =
[
    [0,0],[0,1],[-1,1],[-1,0],[1,0]
]
  background_tutorial = 
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

}


// Generate random number.
function randint(min, max)
{
    return Math.round(Math.random() * (max - min)) + min;
}


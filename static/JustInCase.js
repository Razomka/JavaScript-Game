JustInCase



// walls.x,walls.y,walls.frameX,walls.frameY,32,32

// my playergrid = 
// North box = (bomberperson.x && (bomberperson.y-bomberperson.size),((bomberperson.x + bomberperson.size) && (bomberperson.y-bomberperson.size),
// East box = ((bomberperson.x+bomberperson.size+bomberperson.size) && bomberperson.y), ((bomberperson.x+bomberperson.size+bomberperson.size) && (bomberperson.y + bomberperson.size))
// south box = (bomberperson.x && (bomberperson.y+bomberperson.size+bomberperson.size)),((bomberperson.x+bomberperson.size) && (bomberperson.y+bomberperson.size+bomberperson.size))
// west box = ((bomberperson.x-bomberperson.size) && bomberperson.y), ((bomberperson.x-bomberperson.size) && (bomberperson.y + bomberperson.size))
// function wall_collide(wall)
// {
//     // North Detection
//     if ((bomberperson.x === wall[0]) && (bomberperson.y === wall[1]+wall[4]))
//     {
//         bomberperson.yMovementNegi = 0
//         // console.log("You cannot go up")
//     }
//     if ((bomberperson.x+bomberperson.size) === wall[0] && bomberperson.y === wall[1])
//     {

//         bomberperson.xMovementPosi = 0
//         // console.log("You cannot go right")
//     }
//     if ((bomberperson.x) === wall[0] && (bomberperson.y+bomberperson.size) === wall[1])
//     {
//         bomberperson.yMovementPosi = 0
//         // console.log("You cannot go down")
//     }
//     if (bomberperson.x === (wall[0]+wall[4]) && (bomberperson.y+bomberperson.size) === (wall[1] + wall[4]))
//     {
//         bomberperson.xMovementNegi = 0
//         // console.log("you cannot go left")
//     }
    // East Detection

    // if ((bomberperson.x + bomberperson.size) === wall[0] && (bomberperson.y + bomberperson.size) === wall[1])
    // {
    //     console.log("Stuck forever")
    // }
    // if (!(bomberperson.x + bomberperson.size) === wall[0] && !(bomberperson.y + bomberperson.size) === wall[1])
    //     {
    //         console.log("Free Movement")
    //         bomberperson.xMovementNegi = 32
    //         bomberperson.xMovementPosi = 32
    //         bomberperson.yMovementPosi = 32
    //         bomberperson.yMovementNegi = 32
    //     }
    // else if ((bomberperson.x + bomberperson.size) === wall[0] && !(bomberperson.y + bomberperson.size) === wall[1])
    //     {
    //         console.log("X+ is blocked")
    //         bomberperson.xMovementPosi = 0
    //         if (bomberperson.x - bomberperson.size === wall[0])
    //         {
    //             console.log("X- also is blocked")
    //             bomberperson.xMovementNegi = 0
    //         }
    //         else
    //         {
    //             bomberperson.xMovementNegi = 32
    //         }
    //     } 
    // else if ((bomberperson.y + bomberperson.size) === wall[1] && !(bomberperson.x + bomberperson.size) === wall[0])
    //     {
    //         console.log("Y+ is blocked")
    //         bomberperson.yMovementPosi = 0
    //         if ((bomberperson.y - bomberperson.size) === wall[1])
    //         {
    //             console.log("Y- also is blocked")
    //             bomberperson.yMovementNegi = 0
    //         }
    //         else
    //         {
    //             bomberperson.yMovementNegi = 32
    //         }
    //     }
    //     else if ((bomberperson.x - bomberperson.size) === wall[0] && !(bomberperson.y + bomberperson.size) === wall[1])
    //     {
    //         console.log("X- is blocked")
    //         bomberperson.xMovementPosi = 0
    //         if (bomberperson.x + bomberperson.size === wall[0])
    //         {
    //             console.log("X+ also is blocked")
    //             bomberperson.xMovementNegi = 0
    //         }
    //         else
    //         {
    //             bomberperson.xMovementNegi = 32
    //         }
    //     } 
    //     else if ((bomberperson.y - bomberperson.size) === wall[1] && !(bomberperson.x + bomberperson.size) === wall[0])
    //     {
    //         console.log("Y- is blocked")
    //         bomberperson.yMovementPosi = 0
    //         if ((bomberperson.y - bomberperson.size) === wall[1])
    //         {
    //             console.log("Y+ also is blocked")
    //             bomberperson.yMovementNegi = 0
    //         }
    //         else
    //         {
    //             bomberperson.yMovementNegi = 32
    //         }
    //     }
// }


    // if (bomberperson.x === wall[0] && bomberperson.y === wall[1])
    // {
    //     bomberperson.x = bomberperson.x - 32
    //     bomberperson.y = bomberperson.y - 32
    // }
    // else if (!bomberperson.x === wall[0] && !bomberperson.y === wall[1])
    // {
    //     bomberperson.xMovement = 32
    //     bomberperson.yMovement = 32
    // }
    // else if (bomberperson.x === wall[0] && !bomberperson.y === wall[1] )
    // {
    //     bomberperson.x = bomberperson.x - 32
    // }
    // else if (!bomberperson.x === wall[0] && bomberperson.y === wall[1]){
    //     bomberperson.y = bomberperson.y - 32
    // }
    // else if (!bomberperson.x  === wall[0])
    //     {    
    //         if (bomberperson.x + bomberperson.size === wall[0])
    //         {
    //             bomberperson.xMovement = 0
    //         }
    //         else
    //         {
    //             bomberperson.xMovement = 32
    //         }
    //     }
    // else if (!bomberperson.y === wall[1])
    // {
    //     if (bomberperson.y + bomberperson.size === wall[1])
    //     {
    //         bomberperson.yMovement = 0
    //     }
    //     else
    //     {
    //         bomberperson.yMovement = 32
    //     }

    // if (bomberperson.x + bomberperson.size < wall[0] ||
    //     wall[0] + wall[5] < bomberperson.x ||
    //     bomberperson.y > wall[1] + wall[5] ||
    //     wall[1] > bomberperson.y + bomberperson.size){
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }


    
// imageX : 0,
// imageY : 0,


    // setTimeout(() => 
    // {
    // },1000)


    

            // for (let X_Y of background_game.wallMap)
            // {  
            //     console.log(X_Y[0],X_Y[1])
            //     console.log(bomberperson.x+1,bomberperson.y)
            //     if (X_Y[0] !== (bomberperson.x+1) && X_Y[1] !== (bomberperson.y))
            //     {
            //     console.log("The little shit moved")
            //     bomberperson.x += 1;
            //     bomberperson.imageX += bomberperson.movement;
            //     bomberperson.frameY = 2;
            //     }
            // }






                

    
    // if (bomberperson.x < 32 || bomberperson.x + bomberperson.size > 480)
    //     {
    //         bomberperson.x = -32
    //     }
    //     else
    //     {
    //         bomberperson.x = 32
    //     }

    // if (bomberperson.y < 32 || bomberperson.y + bomberperson.size > 288)
    //     {
    //         bomberperson.y = -32
    //     }
    //     else
    //     {
    //         bomberperson.y = 32
    //     }

    // Framework 
    // if (moveLeft || moveRight || moveDown || moveUp)
    //     {
    //         bomberperson.frameX = (bomberperson.frameX + 1) % 3
    //     }

    // // Movement checking.
    // if (moveRight)
    //     {
    //         movementFunc(bomberperson,1,0)
    //         // for (let X_Y of background_game.wallMap)
    //         // {  
    //         //     console.log(X_Y[0],X_Y[1])
    //         //     console.log(bomberperson.x+1,bomberperson.y)
    //         //     if (X_Y[0] !== (bomberperson.x+1) && X_Y[1] !== (bomberperson.y))
    //         //     {
    //         //     console.log("The little shit moved")
    //         //     bomberperson.x += 1;
    //         //     bomberperson.imageX += bomberperson.movement;
    //         //     bomberperson.frameY = 2;
    //         //     }
    //         }
    //     }

    //     if (moveLeft)
    //     {
    //         movementFunc(bomberperson,1,0)
    //         bomberperson.x -= 1;
    //         bomberperson.imageX -= bomberperson.movement;
    //         bomberperson.frameY = 1;
    //     }
    //     if (moveDown)
    //     {
    //         movementFunc(bomberperson,1,0)
    //         bomberperson.y += 1;
    //         bomberperson.imageY += bomberperson.movement;
    //         bomberperson.frameY = 0;
    //     }
    //     if (moveUp)
    //     {
    //         bomberperson.y -= 1;
    //         bomberperson.imageY -= bomberperson.movement;
    //         bomberperson.frameY = 3;
    //     }

    
    //Checking for walls
    // for (let wall in wallObject)
    //     {
    //        for (let id in wallObject[wall])
    //        {
    //             wall_collide(wallObject[wall][id])
    //        }

    //     }

    // for (let X_Y of background_game.wallMap)
    // {
    //     console.log(X_Y)
    //     console.log([bomberperson.x,bomberperson.y])
    //     let newArray = [bomberperson.x+1,bomberperson.y]
    //     if (X_Y[0] === newArray[0])
    //     {
    //         if (X_Y[1] === newArray[1])
    //         {
    //         console.log("true")
    //         }
    //         else
    //         {
    //             console.log("false")
    //         }
    //     }
    // }



        // Plotting all our walls
    if (Object.keys(wallObject).length < 9)
    {
        let y = 0;
        if (y < 9)
            {
                for (let row of background_game.map )
                {

                    let x = 0
                    let z = 0
                    for (let number of row)
                    {
                        if (number === 35 || number === 80 || number === 64 || number === 81 || number === 67 || number === 82 || number === 83)
                        {
                            let wallList = []
                            walls.x = (x*32)
                            walls.y = (y*32)
                            context.drawImage(wallImage,walls.x,walls.y,walls.frameX,walls.frameY)
                            wallList.push(walls.x,walls.y,walls.frameX,walls.frameY,32)
                            if (y in wallObject)
                            {
                                wallObject[y][z] = wallList
                            }
                            else
                            {
                                wallObject[y] = {[z]:wallList}
                            }
                            z += 1
                        }
                        x += 1
                    }
                    y += 1
                }
            }
        } 




    function tutorial()
{
    tutorial_id = window.requestAnimationFrame(tutorial);

    let now = Date.now();
    let elasped = now - then;
    if (elasped <= fpsInterval)
    {
        return;
    }
    then = now - (elasped % fpsInterval);

    context.clearRect(0,0,canvas.width,canvas.height);
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
if (pressEnter == false && moveDown == false && moveUp == false && moveRight == false && dropBomb == false)
    {
        pressEnter = false;
        console.log("I am in the first loop")
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

    }
            else if (pressEnter == true && bombWarning == false && enemyAppear == false)
            {
                console.log("I have moved to second loop")
                background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,12,69,84,83,114,84,82,65,73,78,114,78,79,87,46,114,114,6]
                background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,16,82,69,83,83,114,68,79,87,78,114,84,79,114,114,114,114,-1]
                background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,77,79,86,69,46,114,114,114,114,114,114,114,114,114,114,114,114,-1]
                background_tutorial.map[19] = [-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,4,79,87,78,114,114,114,114,114,114,114,-10,-10,-10,-10,-10,-10]
            }
            else if (moveDown == true && pressEnter == false)
            {
                console.log("I have moved to third loop")
                pressEnter == false;
                background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,16,69,82,70,69,67,84,46,114,114,114,114,114,114,114,114,114,6]
                background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,14,79,87,114,80,82,69,83,83,114,76,69,70,84,114,114,114,-1]
                background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,84,72,69,78,114,85,80,46,114,114,114,114,114,114,114,114,114,-1]
                background_tutorial.map[19] = [-1,-1,-1,-1,-1,-1,-2,16,82,69,83,83,114,12,69,70,84,114,45,114,21,80,114,114,-10,-10,-10,-10,-1,-1,-1]
            }
            else if (moveUp == true && pressEnter == false)
            {
                console.log("I have moved to fourth loop")
                background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,14,79,87,114,80,82,69,83,83,114,82,73,71,72,84,114,114,6]
                background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,66,65,67,75,114,84,79,114,77,69,46,114,114,114,114,114,114,-1]
                background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,-1]
                background_tutorial.map[19] = [-1,-1,-1,-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,18,73,71,72,84,114,114,114,-10,-10,-10,-10,-10,-10,-10]
            }
            else if (moveRight == true && pressEnter == false)
            {
                console.log("Fifth loop")
                background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,9,114,65,83,83,85,77,69,114,89,79,85,114,114,114,114,114,6]
                background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,82,69,77,69,77,66,69,82,114,72,79,87,114,84,79,114,114,-1]
                background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,68,82,79,80,114,65,114,66,79,77,66,46,114,114,114,114,114,-1]
                background_tutorial.map[19] = [-1,-1,-1,-1,-1,-1,-2,114,114,16,82,69,83,83,114,19,80,65,67,69,66,65,82,114,-10,-10,-10,-10,-10,-10,-10]
            }
            else if (dropBomb == true && pressEnter == false)
            {
                console.log("a bomb loop")
                bombWarning = true;
                console.log(bombWarning)
                background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,14,15,20,114,8,5,18,5,114,25,15,21,114,6,15,15,12,6]
                background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,1,12,1,11,1,26,1,13,33,114,114,114,114,114,114,114,114,-1]
                background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,-1]
                background_tutorial.map[19] = [-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,5,78,84,69,82,114,114,114,144,114,114,-10,-10,-10,-10,-10,-10,-10,-10]
            }
            else if (pressEnter == true && enemyAppear == true)
            {
                bombWarning = false;
                console.log("Enemy appears")
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

                background_tutorial.map[7][21] = [0]
                background_tutorial.map[8][21] = [0]
                // background_tutorial.map[4][17] = [48]
                // background_tutorial.map[4][18] = [49]


                for (let r = 1; r < 3; r += 1)
                {
                    for (let c = 15; c < 21; c += 1)
                    {
                        let tile = background_tutorial.map[r][c];
                        if (tile >= 0) 
                            {
                                let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_2);
                                let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_2);
                                context.drawImage(portalImage,
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
                for (let r =  9; r < 11; r += 1)
                {
                    for (let c = 21; c < 23; c += 1)
                    {
                        let tile = background_tutorial.map[r][c];
                        if (tile >= 0) 
                            {
                                let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_2);
                                let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_2);
                                context.drawImage(enemyOne,
                                    tileCol * background_tutorial.charWidth, tileRow * background_tutorial.charHeight, background_tutorial.tileSize, background_tutorial.tileSize,
                                    c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                            }
                    }
                }
                for (let r =  9; r < 11; r += 1)
                {
                    for (let c = 22; c < 23; c += 1)
                    {
                        let tile = background_tutorial.map[r][c];
                        if (tile >= 0) 
                            {
                                let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_2);
                                let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_2);
                                context.drawImage(enemyTwo,
                                    tileCol * background_tutorial.charWidth, tileRow * background_tutorial.charHeight, background_tutorial.tileSize, background_tutorial.tileSize,
                                    c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                            }
                    }
                }
                for (let r =  9; r < 11; r += 1)
                {
                    for (let c = 22; c < 23; c += 1)
                    {
                        let tile = background_tutorial.map[r][c];
                        if (tile >= 0) 
                            {
                                let tileRow = Math.floor(tile / background_tutorial.tilesPerRow_2);
                                let tileCol = Math.floor(tile % background_tutorial.tilesPerRow_2);
                                context.drawImage(enemyThree,
                                    tileCol * background_tutorial.charWidth, tileRow * background_tutorial.charHeight, background_tutorial.tileSize, background_tutorial.tileSize,
                                    c * background_tutorial.tileSize, r * background_tutorial.tileSize, background_tutorial.tileSize, background_tutorial.tileSize);
                            }
                    }
                }

            }
            else if(pressEnter == true && bombWarning == true)
            {
                console.log("saved by merlin")
                enemyAppear = true;
                background_tutorial.map[16] = [-1,-1,-1,-1,-1,-1,6,16,72,69,87,114,77,89,114,83,80,69,76,76,114,114,114,114,6]
                background_tutorial.map[17] = [-1,-1,-1,-1,-1,-1,-1,87,79,82,75,69,68,46,114,25,79,85,82,114,79,87,78,114,-1]
                background_tutorial.map[18] = [-1,-1,-1,-1,-1,-1,-1,66,79,77,66,83,114,72,85,82,84,114,89,79,85,46,114,114,-1]
                background_tutorial.map[19] = [-1,-1,-1,-2,114,114,114,16,82,69,83,83,114,5,78,84,69,82,114,114,114,144,114,114,-10,-10,-10,-10,-10,-10,-10,-10]
            }

}




// keepies
                // enemy1.x = x;
                // enemy1.y = y;
                // enemy1.imageX = x*enemy1.size + enemy1.size;
                // enemy1.imageY = y*enemy1.size + enemy1.size;
                // enemyList.push([x,y])


    // title();
    // tutorial();

    // Drawing a rectangle cause bomberknight ain't drawing
    // context.fillStyle = "black"
    // context.fillRect(0,0,canvas.width,canvas.height)
    // context.fillStyle  = "green"
    // context.fillRect(bomberperson.imageX,bomberperson.imageY,bomberperson.size,bomberperson.size)

}
if (i === 1)
{
    let x = randint(0,13);
    let y = randint(0,7);
    for (let X_Y of enemyList)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
    }
    for (let X_Y of startLocation)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
    }
    for (let X_Y of wallMap)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
        else
        {
            enemy2.x = x;
            enemy2.y = y;
            enemy2.imageX = x*enemy1.size + enemy1.size;
            enemy2.imageY = y*enemy1.size + enemy1.size;
            enemyList.push([x,y])
        }
    }
}
if (i === 2)
{
    let x = randint(4,13);
    let y = randint(3,7);
    for (let X_Y of enemyList)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
    }
    for (let X_Y of startLocation)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
    }
    for (let X_Y of wallMap)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
        else
        {
            enemy3.x = x;
            enemy3.y = y;
            enemy3.imageX = x*enemy1.size + enemy1.size;
            enemy3.imageY = y*enemy1.size + enemy1.size;
            enemyList.push([x,y])
        }
    }
}
if (i === 3)
{
    let x = randint(4,13);
    let y = randint(3,7);
    for (let X_Y of enemyList)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
    }
    for (let X_Y of startLocation)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
    }
    for (let X_Y of wallMap)
    {
        if (X_Y[0] === x && X_Y[1] === y)
        {
            i -= 1;
        }
        else
        {
            enemy4.x = x;
            enemy4.y = y;
            enemy4.imageX = x*enemy1.size + enemy1.size;
            enemy4.imageY = y*enemy1.size + enemy1.size;
            enemyList.push([x,y])
        }
    }
}





// while (i < 79)
// {
//     // let x = randint(0,13);
//     // let y = randint(0,7);
//     // if (dirtList.length !== 0 )
//     // {
//     //     console.log("Into the loop")
//     //     for (let unit of dirtList)
//     //     {
//     //         if (unit[0].x === x && (unit[0].y === y))
//     //         {
//     //             break;
//     //         }
//     //     }
//     // }
//     // else
//     // {
//         let dirt = new dirtBlocks(x,y,x*32+32,y*32+32,32,32,32,16);
//         i += 1;

//         {
//             console.log("I came here")
//             for (let unit of dirtList)
//             {
//                 if (unit[0].x == x && unit[0].y == y)
//                 {
//                     dirtList.pop(dirt)
//                     i -= 1
//                 }
//             }
//         }
//         dirtList.push([dirt]);
//         for (let X_Y of startLocation)
//         {
//             if (X_Y[0] === dirt.x && X_Y[1] === dirt.y)
//                 {
//                     dirtList.pop();
//                     i -= 1
//                 }
//         }
//         for (let X_Y of wallMap)
//         {
//             if (X_Y[0] === dirt.x && X_Y[1] === dirt.y)
//             {
//                 dirtList.pop();
//                 i -= 1
//             }
//         }nemyList.push([x,y]


explosionArray.push([x,y])
explosionArray.push([x+1,y])
explosionArray.push([x+2,y])
explosionArray.push([x-1,y])
explosionArray.push([x-2,y])
explosionArray.push([x,y+1])
explosionArray.push([x,y+2])
explosionArray.push([x,y-1])
explosionArray.push([x,y-2])

let newExplosionArray = [];
for (let XY of explosionArray)
{
    console.log(XY[0],XY[1])
    if (wallMap.includes(XY[0]))
    {
        let index = explosionArray.indexOf(XY)
        explosionArray.forEach((element,index1) =>
        {
            if(index!==index1)
            {
                newExplosionArray.push(element);
            }
        explosionArray = explosionArray;
        explosionArray = newExplosionArray;
        })
    }
}
console.log(explosionArray)
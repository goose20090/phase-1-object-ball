function gameObject(){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7

                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15

                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5

                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1

                }

            }
        },
        away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            'Brendan Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
                    }
         }
    }
}


function homeTeamName(){
    let object = gameObject()
    return object['home']['teamName']
  }

function numPointsScored(playerName){
    if (gameObject().home.players[playerName] !== undefined){
        return gameObject().home.players[playerName].points
    }
    else return gameObject().away.players[playerName].points

}

function shoeSize(playerName){
    if (gameObject().home.players[playerName] !== undefined){
        return gameObject().home.players[playerName].shoe
    }
    else return gameObject().away.players[playerName].shoe

}

function teamColors(teamName){
    if (gameObject().home.teamName === teamName){
        return gameObject().home.colors
    }
    else if(gameObject().away.teamName ===teamName){
        return gameObject().away.colors
    }

}

function teamNames(){
    let object = gameObject();
    let arr= []
   arr.push(object.home.teamName)
   arr.push(object.away.teamName)
   return arr
}


function playerNumbers(teamName){
    let object = gameObject();
    let arr = [];
    if (object.home[teamName]!== false){
        let players = Object.entries(object.home.players)
        for (let i = 0; i< players.length; i++){
            arr.push(players[i][1].points)
        }
        return arr
    }
    else {
        let players = Object.entries(object.away.players)
        for (let i = 0; i< players.length; i++){
            arr.push(players[i][1].points)
        }
        return arr
    }
}

function playerStats(playerName){
    if (gameObject().home.players[playerName] !== undefined){
        return gameObject().home.players[playerName]
    }
    else return gameObject().away.players[playerName]

}

function bigShoeRebounds(){

    let object = gameObject();
    let homePlayers = Object.entries(object.home.players) 
    let awayPlayers = Object.entries(object.away.players)
    let allPlayers = homePlayers.concat(awayPlayers);
    let shoeSizeVariable = 0;
    let playerRebounds
    for (let i = 0; i< allPlayers.length; i++){
        if (allPlayers[i][1].shoe > shoeSizeVariable){
            shoeSizeVariable = allPlayers[i][1].shoe
            playerRebounds = allPlayers[i][1].rebounds
            
        }
        
    }
    return playerRebounds
 }

 function mostPointsScored(){
    let object = gameObject();
    let homePlayers = Object.entries(object.home.players);
    let awayPlayers = Object.entries(object.away.players);
    let allPlayers = homePlayers.concat(awayPlayers);
    let pointsScored = 0;
    let pointScorer
    for (let i = 0; i< allPlayers.length; i++){
        if (allPlayers[i][1].points> pointsScored){
            pointsScored = allPlayers[i][1].points
            pointScorer = allPlayers[i][0]
        }
    }
    return pointScorer
 }

 function winningTeam(){  
    let object = gameObject();
    let homePlayers = Object.entries(object.home.players);
    let awayPlayers = Object.entries(object.away.players);
    let homeTotal= 0;
    let awayTotal = 0;

    for (let i = 0; i< homePlayers.length; i++){
        homeTotal+= homePlayers[i][1].points
    }
    for (let i = 0; i< awayPlayers.length; i++){
        awayTotal+= awayPlayers[i][1].points
    }

    if (homeTotal === awayTotal){
        return "It's a draw!"
    }

    else if (homeTotal> awayTotal){
        return object.home.teamName
    }

    else if (awayTotal> homeTotal){
        return object.away.teamName
    }


 }

 function playerWithLongestName(){
    let object = gameObject();
    let homePlayers = Object.entries(object.home.players);
    let awayPlayers = Object.entries(object.away.players);
    let allPlayers = homePlayers.concat(awayPlayers);
    let nameLength = 0;
    let mrLongName;

    for (let i = 0; i< allPlayers.length; i++){
        if (allPlayers[i][0].length> nameLength){
            nameLength = allPlayers[i][0].length;
            mrLongName = allPlayers[i][0]
        }
    }
    return mrLongName

 }

 function doesLongNameStealATon(){
    let object = gameObject();
    let homePlayers = Object.entries(object.home.players);
    let awayPlayers = Object.entries(object.away.players);
    let allPlayers = homePlayers.concat(awayPlayers);
    let nameLength = 0;
    let mrLongName;
    let rebounds = 0;
    let mrRebounds;

    for (let i = 0; i< allPlayers.length; i++){
        if (allPlayers[i][0].length> nameLength){
            nameLength = allPlayers[i][0].length;
            mrLongName = allPlayers[i][0]
        }
        if (allPlayers[i][1].rebounds> rebounds){
            rebounds = allPlayers[i][1].rebounds
            mrRebounds = allPlayers[i][0]
        }
    }
    return mrRebounds === mrLongName

 }




console.log(gameObject())
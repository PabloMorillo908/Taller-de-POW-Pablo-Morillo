const gamesService = {};

let games = [];
let counterID= 1;

gamesService.getGames = () => {
    return games;
}

gamesService.getGame = (id) => {
    for (let game of games) {
        if (game.id == id) return game
    }
    return null;
}

gamesService.addGame = (name, playersMinMax, gameDuration, gameDate, gameCondition) => {
    const NewGame  = {
        id: counterID,
        name: name,
        playersMinMax: playersMinMax,
        gameDuration: gameDuration,
        gameDate: gameDate,
        gameCondition: gameCondition
    }
    counterID++;
    games.push(NewGame);
    return NewGame;
}

gamesService.deleteGame = (id) => {
    for (let i = 0; i < games.length; i++) {
        if (games[i].id == id) {
            return games.splice(i, 1)[0];
        }
    }
    return null;
}

gamesService.patchGame = (id, name, playersMinMax, gameDate, gameCondition) => {
    for (let game of games) {
        if (game.id == id) {
            if (name) game.name = name;
            if (playersMinMax) game.playersMinMax = playersMinMax;
            if (gameDate) game.gameDate = gameDate;
            if (gameCondition) game.gameCondition = gameCondition;
            return game;
        }
    }
    return null;
}

export default gamesService;
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

gamesService.addGame = (name, playersMinMax, gameDuration, gameDate, gameState) => {
    const NewGame  = {
        id: counterID,
        name: name,
        playersMinMax: playersMinMax,
        gameDuration: gameDuration,
        gameDate: gameDate,
        gameState: gameState
    }
    counterID++;
    games.push(NewGame);
    return NewGame;
}

export default gamesService;
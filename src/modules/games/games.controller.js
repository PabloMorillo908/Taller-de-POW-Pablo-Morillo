import teamsService from './games.service.js';

const gamesController = {};

gamesController.getGames= (req, res) => {
    const games = gamesService.getGames();
    res.status(200).send ({
        games: games
    })
}

gamesController.getGame= (req, res) => {
    const idGame = req.params.idGame;
    const game = gamesService.getGame(idGame);
    res.status(200).send ({
        game: game
    })
}

gamesController.addGame = (req, res) => {
    const name = req.body.name;
    const playersMinMax = req.body.playersMinMax;
    const gameDuration = req.body.gameDuration;
    const gameDate = req.body.gameDate;
    const gameState = req.body.gameState;

    const game = gamesService.addGame(name, playersMinMax, gameDuration, gameDate, gameState);

    res.status(200).send({
        msg: "Done :)", 
        game: game
    })

}

export default gamesController;
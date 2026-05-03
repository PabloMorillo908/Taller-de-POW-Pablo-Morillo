import gamesService from './games.service.js';

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
    const gameCondition = req.body.gameCondition;

    const game = gamesService.addGame(name, playersMinMax, gameDuration, gameDate, gameCondition);

    res.status(200).send({
        msg: "Done :)", 
        game: game
    })

}

gamesController.deleteGame = (req, res) => {
    const idGame = req.params.idGame;
    const game = gamesService.deleteGame(idGame);
    
    res.status(200).send({
        msg: "The game was deleted from the catalog successfully :)", 
        game: game
    })
}

gamesController.patchGame = (req, res) => {
    const idGame = req.params.idGame;
    const name = req.body.name;
    const playersMinMax = req.body.playersMinMax;
    const gameDate = req.body.gameDate;
    const gameCondition = req.body.gameCondition;
    const game = gamesService.patchGame(idGame, name, playersMinMax, gameDate, gameCondition);

    res.status(200).send({  
        msg: "The game was patched successfully :)", 
        game: game
    })
}


export default gamesController;
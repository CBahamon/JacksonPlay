const router = require("express").Router();
const VideoGame = require("../models/VideoGames");

//create a videogame
router.post("/", async (req, res) => {
    const newGame = new VideoGame(req.body);
    try{
        const saveGame = await newGame.save();
        res.status(200).json(saveGame);
    }catch (err){
        res.status(500).json(err);
    }
});

//get all video game
router.get("/", async( req, res) =>{
    try {
        const games = await VideoGame.find();
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get One VideoGame
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const getOneVideoGame = await VideoGame.findById({_id: id})
		res.status(200).json(getOneVideoGame);
	} catch (err) {
		res.status(500).json(err);
	}
});
//updateVideoGame
router.put("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const updateVideoGame = await VideoGame.updateOne({_id: id}, req.body)
		res.status(200).json(updateVideoGame);
	} catch (err) {
		res.status(500).json(err);
	}
});

// deleteVideoGame
router.delete("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteVideoGame = await VideoGame.remove({_id: id})
		res.status(200).json(deleteVideoGame);
	} catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router
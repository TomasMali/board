

const Board = require('./boardModel')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


// First route, get all visiting
/**Da chiamare
 * http://localhost:3000/visiting/
 * 
 */
// First route, get all Menu
router.get('/', (req, res, next) => {
    //  const id = req.params.telegramId;
    Board.find().sort( { color: 1 } )
        .exec().
        then(doc => {
            if (doc.length) {
                //   console.log(doc.length)
                res.status(200).json({
                    message: doc
                })
            }
            else
                res.status(200).json({
                    message: false
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'err:: ' + err })
        })
})


// 
/**
 * http://localhost:3000/board/getBoard/33453
 */
router.get('/getBoard/:wi', (req, res, next) => {
    const wi_ = req.params.wi;
    console.log("il valore è: " + wi_)
    Board.find({ wi: wi_ })
        .exec().
        then(doc => {
            if (doc.length) {
                res.status(200)
                    .json({ message: doc });
            }
            else
                res.status(200)
                    .json({ message: "Nessun risultato trovao" });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
})


/**
 *  POST REQUEST Inserisce un menu solo se non esiste. 
 * // Da chimare  
{
	"piva": "MLATMS92P09Z100C",
	"docname" : "tomas.C20"
}

 */
router.post('/insert', (req, res, next) => {
    const wi_ = req.body.wi;
    const storyPoint_ = req.body.storyPoint;
    const owner_ = req.body.owner;
    const description_ = req.body.description;
    const state_ = req.body.state;
    const color_ = req.body.color;


    Board.find({ wi: wi_ }, function (err, docs) {
        if (docs.length) {

            // se non modifico il colore, modifico lo stato
if(color_ == null){
    console.log("valore_colore:: " + color_)
    console.log("valore_state:: " + state_)

            Board.updateOne(
                { wi: wi_ },
                { $set: { "state": state_ } }
            ).exec()
                .then(result => {
                    if (result.nModified != 0)
                        res.status(200)
                            .json({ message: "Work Item: " + wi_ + "  modificato correttamente" });
                    else
                        res.status(200)
                            .json({ message: false });

                })
            } else{
                console.log("valore_colore22222:: " + color_)
                console.log("valore_state2222:: " + state_)

                Board.updateOne(
                    { wi: wi_ },
                    { $set: { "color": color_ } }
                ).exec()
                    .then(result => {
                        if (result.nModified != 0)
                            res.status(200)
                                .json({ message: "Work Item: " + wi_ + "  modificato correttamente" });
                        else
                            res.status(200)
                                .json({ message: false });
    
                    })
            }





        } else {
            // Lo creo nuovo
            const workItem = new Board({
                _id: new mongoose.Types.ObjectId(),
                wi: wi_,
                storyPoint: storyPoint_,
                owner: owner_,
                description: description_,
                state: state_,
                color: color_
            });


            workItem.save()
                .then(result => {
                    //      console.log("Menu " + result + " inserted correctly!")
                    res.send("New inserted correctly!")
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ error: err })
                });

        }
    });

})




// DELETE  the single user 
router.delete('/delete_one', (req, res, next) => {
    const wi_ = req.body.wi;

    Board.remove({ wi: wi_ })
        .exec()
        .then(result => {
            res.status(200).json({
                message: " rimosso correttamente!"
            })
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json({
                error: err
            })
        })
});

// DELETE ALL the user 
router.delete('/delete_all', (req, res, next) => {
    Board.deleteMany({})
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json({
                error: err
            })
        })
});




























module.exports = router;
var express = require('express');
var router = express.Router();
var Battle = require('../behaviour/battle');
/* GET users listing. */
router.get('/', function (req, res) {
        res.send('this is battle index');
    }
);

router.get('/:id1/:id2/record', function (req, res){
    var id1 = req.params.id1;
    var id2 = req.params.id2;
    var battle = new Battle(id1,id2);
    var send_data = battle.generatedata();
    res.send(req.params.id1 + req.params.id2+send_data);
    }
)

module.exports = router;
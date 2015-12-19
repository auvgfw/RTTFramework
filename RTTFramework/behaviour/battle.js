var db_config=
 {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'armygirl',
};
var mysql = require('mysql');

/*
function generatedata()
 {

    console.log('datagenerator');
    var sql = 'select * from user_info where user_id=' + player1id;
    connection.query
        (
        sql, function selectusers(err, results, fields) {
            if (err) {
                throw err;
            }
            for (var i = 1; i <= 6; i++) {
                //console.log('query finish');
                player1Group[i]['instance_id'] = results[0]['position_' + i + '_instance_id'];
                //data += 'instance_id: ' + player1Group[i]['instance_id']+'<br>';
                data += results[0]['position_' + i + '_instance_id'] + '<br>';
                console.log(data);
            }
        } 
    );

     return "it is data";
}
*/



var Battle = function (player1id, player2id) {
    this.generatedata = function () {
        return "it is data";
    };
};
module.exports = Battle;
var jayson = require('jayson');

var port = 3333;

// create a server
var server = jayson.server({
    miner_getstat1: function(args, callback) {
    callback(null, {"result": ["9.3 - ETH", "21", "182724;51;0", "30502;30457;30297;30481;30479;30505", "1827240;100;0", "305020;304570;302970;304810;304790;305050", "53;71;57;67;61;72;55;70;59;71;61;70", "eth-eu1.nanopool.org:9999;dcr.supernova.org:9999", "0;0;0;0"]});
  }
});

server.tcp().listen(port);


// create a client
var client = jayson.client.tcp({
    port: port
  });
  
  // invoke "add"
  client.request('miner_getstat1', null, function(err, response) {
    if(err) throw err;
    console.log(response.result); // 2
  });


var jayson = require('jayson');

var port = 3333;

// create a server
var server = jayson.server({
    miner_getstat1: function(args, callback) {
    callback(null, '{"result": ["9.3 - ETH", "21", "182724;51;0", "30502;30457;30297;30481;30479;30505", "1827240;100;0", "305020;304570;302970;304810;304790;305050", "53;71;57;67;61;72;55;70;59;71;61;70", "eth-eu1.nanopool.org:9999;dcr.supernova.org:9999", "0;0;0;0"]}\n');
  },
  getstat: function(args, callback) {
    callback(null, '{"method":"getstat", "error":null, "start_time":1506614470, "current_server":"asia1-zcash.flypool.org:3333", "available_servers":3, "server_status":2, "result":[{"gpuid":0, "cudaid":0, "busid":"0000:01:00.0", "name":"GeForce GTX 1080 Ti", "gpu_status":2, "solver":0, "temperature":67, "gpu_power_usage":178, "speed_sps":628, "accepted_shares":109, "rejected_shares":0, "start_time":1506614471}]}\n');    
  }
});

server.tcp().listen(port);
console.log('Tcp Server is running..');
/*
var client = jayson.client.tcp({
  port: port
});

// invoke "add"
client.request('miner_getstat1', null, 0, function(err, response) {
  if(err) throw err;
  
  console.log(response.result); // 2
});
*/

/*
setInterval(function() {

  // create a client
var client = jayson.client.tcp({
  port: port
});

// invoke "add"
client.request('miner_getstat1', null, function(err, response) {
  if(err) throw err;
  console.log(response.result); // 2
});



}, 2000);
*/
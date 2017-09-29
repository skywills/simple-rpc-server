var jayson = require('jayson');

var port = 42000;

var client = jayson.client.tcp({
    port: port
  });
  
  // invoke "add"
  client.request('getstat', null, function(err, response) {
    if(err) throw err;
    console.log(response); // 2
  });
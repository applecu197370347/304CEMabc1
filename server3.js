var http = require('http');

http.createServer(function (req, res) {
	
	
	if(req.url === "/123"){
		console.log("Requested URL is url" +req.url);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + req.url);
	}
	
	if(req.url === "/123456"){
		console.log("Requested URL is url" +req.url);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("123456");
	}

	
 
  
  
}).listen(9000);
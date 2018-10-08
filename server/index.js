
const http = require("http");
const fs = require("fs");
let numb = 0;
http.createServer(function (request ,response){
		let file;
		if (request.url === "/") {
			 file = fs.readFileSync("../index.html","utf8");
		}else {
			 file = fs.readFileSync(".." + request.url);
		};
		console.log(request.url);
		response.write(file);
		numb++;
		response.end();

	}
).listen(80);
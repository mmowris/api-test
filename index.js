var cors = require('cors'),
	express = require('express'),
	request = require('request');

let app = express();
app.use(cors());
//app.options('*', cors());


app.use('/', function(req,res) {
	var opts = {
	host: 'https://api.einstein.ai/v2/vision/predict',
	post: 80,
	path: '/camera',
	method: 'POST'
};

var request = http.request(options, function(response) {
	console.log('status: ' + response.statusCode);
	console.log('headers: '+ JSON.stringify(response.headers));
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
		console.log('body: '+ chunk);
	});
	request.end();
})
})
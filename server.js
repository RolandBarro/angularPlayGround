var express = require('express');
var app = express();
var port = process.env.PORT || 7070;
var env = process.env.NODE_ENV;
var dirPath = __dirname;

//define our environment
env = 'development';

//initial page 
app.get('/', (req, res) => {
	res.sendFile(`${dirPath}/assets/views/index.html`);
});

app.listen(port);

console.log(`server running at port ${port}`);

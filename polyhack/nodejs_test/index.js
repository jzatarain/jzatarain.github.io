var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
	'/': requestHandlers.init,
	'/init': requestHandlers.init,
	'/upload': requestHandlers.upload
};

server.init(router.route, handle);

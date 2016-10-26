function init(response){
	console.log('init request');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("init function");
	response.end();
}
function upload(response){
	console.log("Manipulador de petición 'subir' fue llamado.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hola Subir");
	response.end();
}

exports.init = init;
exports.upload = upload;
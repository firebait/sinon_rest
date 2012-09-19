sinonRest = function(baseUrl, attributes){
	var server = sinon.fakeServer.create();

	// Create
	server.respondWith('POST', new RegExp(baseUrl), function(xhr){
		new_attributes = attributes;
		new_attributes['id'] = Math.floor(Math.random()*1000);
		xhr.respond( 201, { "Content-Type": "application/json" }, JSON.stringify(new_attributes));
	});

	// Update
	server.respondWith('PUT', new RegExp(baseUrl + '/([0-9]+)'), function(xhr, id){
		xhr.respond( 200, { "Content-Type": "application/json" }, '{}');
	});

	// Delete 
	server.respondWith('DELETE', new RegExp(baseUrl + '/([0-9]+)'), function(xhr, id){
		xhr.respond( 200, { "Content-Type": "application/json" },'{}');
	});

	return server;
};
sinonRest = function(baseUrl, attributes){
	var id = 0;
	var server = sinon.fakeServer.create();

	// Create
	server.respondWith('POST', new RegExp(baseUrl), function(xhr){
		id++;
		new_attributes = _.clone(attributes);
		new_attributes['id'] = id;
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
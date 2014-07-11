'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

var mapper = function(request, callback){
  //error, response
  callback(null, 'http://www.google.com/')
};
  
exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    //'proxy' is not *necessary* at the end of this path but it's here to remind me that 
    //I'm not using an API, just a proxy
    path: '/iteles/',

    handler: function(request, reply) {
      reply.proxy({
        redirects:2,
        //looking for /proxy so use the mapUri to map it to the mapper variable we created above
        mapUri: mapper
      });
    } //end of handler
  });

  next();
};

exports.register.attributes = {
  name: 'iteles',
  version: '0.0.1'
};

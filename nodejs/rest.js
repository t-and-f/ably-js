"use strict";
var fs   = require('fs');
var path = require('path');
var vm   = require('vm');

var context = vm.createContext({
	require:require,
	console:console,
	process:process,
	Buffer:Buffer,
	setTimeout:setTimeout,
	setInterval:setInterval,
	clearTimeout:clearTimeout,
	clearInterval:clearInterval,
	global:global
});

fs.readdirSync(__dirname).forEach(file => {
 console.log(file);
});

/* include libraries */
var filename = path.resolve(__dirname, './platform.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, './lib/util/defaults.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, './lib/util/bufferutils.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/util/utils.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, './lib/util/http.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/util/defaults.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/util/eventemitter.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/util/logger.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/util/multicaster.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, './lib/util/crypto.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/errorinfo.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/message.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/presencemessage.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/stats.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/devicedetails.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/pushchannelsubscription.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/resource.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/paginatedresource.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/auth.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/presence.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/push.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/channel.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/rest.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

var Rest = module.exports = context.Rest;
Rest.BufferUtils = context.BufferUtils;
Rest.Crypto = context.Crypto;
Rest.Defaults = context.Defaults;
Rest.Http = context.Http;
Rest.Resource = context.Resource;
Rest.Utils = context.Utils;
Rest.Message = context.Message;
Rest.PresenceMessage = context.PresenceMessage;

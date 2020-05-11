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

filename = path.resolve(__dirname, '../common/lib/types/protocolmessage.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/stats.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/devicedetails.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/types/pushchannelsubscription.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/transport/connectionerror.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/transport/messagequeue.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/transport/protocol.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/transport/connectionmanager.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/transport/transport.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/transport/websockettransport.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/transport/comettransport.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/resource.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/paginatedresource.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/auth.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/connectionstatechange.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/channelstatechange.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/connection.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/presence.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/push.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/channel.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/realtimechannel.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/realtimepresence.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/rest.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, '../common/lib/client/realtime.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);

filename = path.resolve(__dirname, './lib/transport/nodecomettransport.js');
vm.runInContext(fs.readFileSync(filename, 'utf8'), context, filename);


var Realtime = module.exports = context.Realtime;
Realtime.BufferUtils = context.BufferUtils;
Realtime.Crypto = context.Crypto;
Realtime.Defaults = context.Defaults;
Realtime.Http = context.Http;
Realtime.Utils = context.Utils;
Realtime.Message = context.Message;
Realtime.PresenceMessage = context.PresenceMessage;
Realtime.ProtocolMessage = context.ProtocolMessage;
Realtime.ConnectionManager = context.ConnectionManager;

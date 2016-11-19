var grpc = require('grpc');


var PROTO_PATH = __dirname + '/hello.proto';

var helloProto = grpc.load(PROTO_PATH).helloworld;

function summator(meta, callback) {
  console.log('Request with ' + JSON.stringify(meta.request));
  callback(null, {
    res: meta.request.a + meta.request.b
  });
}

function main() {
  var server = new grpc.Server();
  server.addProtoService(helloProto.Summer.service, {sumThem: summator});
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();


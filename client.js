var PROTO_PATH = __dirname + '/hello.proto';

var grpc = require('grpc');
var helloProto = grpc.load(PROTO_PATH).helloworld;

function main() {
  var client = new helloProto.Summer('localhost:50051',
    grpc.credentials.createInsecure());
  
  var num1 = process.argv.length >= 3 ? parseInt(process.argv[2]) : 0;
  var num2 = process.argv.length >= 4 ? parseInt(process.argv[3]) : 1;
  
  client.sumThem({a: num1, b: num2}, (err, answer) => {
    console.log('Calculation:', answer.res);
  });
}

main();

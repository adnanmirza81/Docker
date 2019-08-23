var os = require("os");
var hostname = os.hostname();

require("appdynamics").profile({
       controllerHostName: 'mycontroller.saas.demo.appdynamics.com',
       controllerPort: 8090,
       accountName: 'customer1',
       accountAccessKey: '<key>',
       applicationName: 'SomeApp',
       tierName: 'MyTier',
       nodeName: hostname,
       controllerSslEnabled: false,
       analytics: {
          host: "172.17.0.6",
          port: 9090
      }
});


var http = require("http");
var appd = require("appdynamics");

http.createServer(function (req, res) {

  http.get('http://httpbin.org/ip', (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
      console.log(body);

    });
  });

  var names = ['Rob', 'Kevin', 'Dan', 'Andy', 'Bob', 'Andrew', 'Butch', ''];
  var random_index = parseInt(Math.random() * ((names.length - 1) - 0) + 0);
  console.log("Random Index is: " + random_index);
  var name = names[random_index];
  console.log("We choose: " + name);
  //var tnx = appd.getTransaction(req);
  //tnx.addAnalyticsData("tesco_name", name);

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.write("This is a simple Kubernetes Node Example.");

  res.end();
}).listen(5000);
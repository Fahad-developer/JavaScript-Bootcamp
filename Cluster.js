// cluster-example.js
import cluster from "cluster";
import http from "http";
import os from "os";

if (cluster.isPrimary) {
  // Master process
  const numCPUs = os.cpus().length;
  console.log(`Primary process PID: ${process.pid}`);
  console.log(`Starting ${numCPUs} workers...`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Worker exit event
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  // Worker process
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello! Response from worker PID: ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker started PID: ${process.pid}`);
}

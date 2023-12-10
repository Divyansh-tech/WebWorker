const worker = new SharedWorker("sharedWorker.js");

worker.port.postMessage({ command: "store_port", scriptNo: 2 });

worker.port.postMessage({ command: "get_data", scriptNo: 2 });

worker.port.onmessage = function (mes) {
  console.log(mes.data);
};

function send() {
  worker.port.postMessage({
    command: "send_data",
    scriptNo: 2,
    text: "message from script 2",
  });
}

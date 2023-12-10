const worker = new SharedWorker("sharedWorker.js");

worker.port.postMessage({ command: "store_port", scriptNo: 1 });

worker.port.postMessage({ command: "get_data", scriptNo: 1 });

worker.port.onmessage = function (mes) {
  console.log(mes.data);
};

function send() {
  worker.port.postMessage({
    command: "send_data",
    scriptNo: 1,
    text: "message from script 1",
  });
}

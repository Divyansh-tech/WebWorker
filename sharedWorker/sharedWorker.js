let port1, port2;

self.onconnect = (event) => {
  const port = event.ports[0];

  port.onmessage = function (mes) {
    switch (mes.data.command) {
      case "store_port":
        if (mes.data.scriptNo === 1) {
          port1 = port;
        } else {
          port2 = port;
        }
        break;

      case "get_data":
        if (mes.data.scriptNo === 1) port.postMessage("script 1");
        else port.postMessage("script 2");
        break;

      case "send_data":
        if (mes.data.scriptNo === 1) {
          port2.postMessage(mes.data.text);
        } else {
          port1.postMessage(mes.data.text);
        }
        break;
    }
  };
};

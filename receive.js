var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = "hello";
    channel.assertQueue(queue, {
      durable: false,
    });

    console.log(" [x] Waiting for messages in %s. %o exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {
      noAck: true
    });
  });
});

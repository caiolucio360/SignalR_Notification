import { Card, CardHeader, Heading, CardBody } from '@chakra-ui/react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import React, { useEffect, useState } from 'react';

const NotificationBell = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7025/hubs/notification")
      .build();

    connection.on('ReceiveNotification', () => {
      setCount(count => count + 1);
    });

    connection.start().catch(err => console.error(err.toString()));

    return () => {
      connection.stop();
    };

  }, []);


  return (
    <Card align='center'>
      <CardHeader>
        <Heading size='md'> Contagem de notificações</Heading>
      </CardHeader>
      <CardBody>
        <h2>{count}</h2>
      </CardBody>
    </Card>
  );
};

export default NotificationBell;

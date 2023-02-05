import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import * as signalR from "@microsoft/signalr";
import axios from 'axios';

export class SignalRClient {
  private connection: HubConnection;

  constructor() {
    this.connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7025/hubs/notification")
    .withAutomaticReconnect()
    .build();
  }

  public start() {
     return this.connection.start();
  }

  public onNotification(callback) { 
    this.connection.on("ReceiveNotification", callback);
  }
}

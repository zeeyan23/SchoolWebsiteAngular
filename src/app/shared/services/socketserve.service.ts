import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
const SOCKET_ENDPOINT = 'localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class SocketserveService {
  socket;

  constructor() { }
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
 }
}
import { EventEmitter, Injectable } from '@angular/core';
import axios from 'axios';
import { ChatLineInterface } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  constructor() {
    this.getChatsList();
  }

  private _chatsList: ChatLineInterface[] = [];

  dataChanged = new EventEmitter<ChatLineInterface[]>();

  async getChatsList() {
    const res = await axios.get('/angular-app/chats/getChatsList');

    let data = res.data;
    console.log(data, 'service');

    this.dataChanged.emit(data);
  }

  async userEnteredChat(userName: string| undefined){
    console.log(userName)
    const res = await axios.post('/angular-app/chats/userEnteredChat', {
      userName,
    });
  }

  public get chatsList() {
    return this._chatsList;
  }
}

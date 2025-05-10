import { Injectable } from '@angular/core';
import axios from 'axios';
import { ChatLineInterface } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  constructor() {
    this.getChatsList();
  }

  private _chatsList: ChatLineInterface[] | null = null;

  async getChatsList(): Promise<ChatLineInterface[]> {
    const res = await axios.get('/angular-app/chats/getChatsList');

    let data = res.data;
    console.log(data, 'service');

    this._chatsList = data
    return data;
  }

  public get chatsList() {
    return this._chatsList;
  }
}

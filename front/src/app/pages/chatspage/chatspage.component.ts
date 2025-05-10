import { Component } from '@angular/core';
import { ChatsService } from '../../services/chats/chats.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatlineComponent } from '../../chatline/chatline.component';
import { AuthService } from '../../services/auth/auth.service';
import { ChatLineInterface } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-chatspage',
  imports: [CommonModule, FormsModule, ChatlineComponent],
  templateUrl: './chatspage.component.html',
  styleUrl: './chatspage.component.css',
})
export class ChatspageComponent {
  constructor(private chatsServise: ChatsService) {}

  // altChatsList: ChatLineInterface[] = [
  //   { chatID: 'C1', chatWith: '2', messages: [] },
  // ];

  chatsList: ChatLineInterface[] | null = [];

  ngOnInit(): void {
    console.log(this.chatsServise.chatsList, 'component');
    this.chatsList = this.chatsServise.chatsList;
  }
}

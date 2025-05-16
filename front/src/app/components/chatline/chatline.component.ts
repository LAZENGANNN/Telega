import { Component, Input } from '@angular/core';
import { ChatsService } from '../../services/chats/chats.service';
import { ChatLineInterface } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-chatline',
  imports: [],
  templateUrl: './chatline.component.html',
  styleUrl: './chatline.component.css',
})
export class ChatlineComponent {
  constructor(private chatsService: ChatsService) {}

  @Input() chatLine?: ChatLineInterface;


  data = this.chatLine

  clickOnChatLine(event: Event) {
    console.log(event, event.target)

    console.log(`|||`, this.chatLine?.chatWith)

    const userName = (event.target as HTMLInputElement).value;

    this.chatsService.userEnteredChat(this.chatLine?.chatWith);
  }
}

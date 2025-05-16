import { Component } from '@angular/core';
import { ChatsService } from '../../services/chats/chats.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatlineComponent } from '../../components/chatline/chatline.component';
import { AuthService } from '../../services/auth/auth.service';
import { ChatLineInterface } from '../../../interfaces/interfaces';
import { ChatComponent } from '../../components/chat/chat.component';
import { ProfilePanelComponent } from "../../components/profile-panel/profile-panel.component";

@Component({
  selector: 'app-chatspage',
  imports: [CommonModule, FormsModule, ChatlineComponent, ChatComponent, ProfilePanelComponent],
  templateUrl: './chatspage.component.html',
  styleUrl: './chatspage.component.css',
})
export class ChatspageComponent {
  constructor(private chatsServise: ChatsService) {
    this.chatsServise.dataChanged.subscribe((data) => {
      this.chatsList = data;
    });
  }

  chatsList: ChatLineInterface[] = [];

  // ngOnInit(): void {
  //   this.chatsList = this.chatsServise.chatsList;
  //   console.log(this.chatsServise.chatsList, 'component');
  // }

  ngOnDestroy(){
    this.chatsServise.dataChanged.unsubscribe();
  }
}

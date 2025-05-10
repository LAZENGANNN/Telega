import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatline',
  imports: [],
  templateUrl: './chatline.component.html',
  styleUrl: './chatline.component.css'
})
export class ChatlineComponent {
 @Input() chatLine?: any;
}

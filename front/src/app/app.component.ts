import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegPageComponent } from './pages/reg-page/reg-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'telega';
}

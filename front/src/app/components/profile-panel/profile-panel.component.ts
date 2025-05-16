import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-profile-panel',
  imports: [],
  templateUrl: './profile-panel.component.html',
  styleUrl: './profile-panel.component.css'
})
export class ProfilePanelComponent {
  constructor(private authService: AuthService){}

  clickLogoutButton(){
    this.authService.logout()
  }

}

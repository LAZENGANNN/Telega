import { Routes } from '@angular/router';
import { RegPageComponent } from './pages/reg-page/reg-page.component';
import { ChatspageComponent } from './pages/chatspage/chatspage.component';
import { AuthGuard } from './services/auth/auth.guard';

export const routes: Routes = [
  { path: '', component: RegPageComponent, pathMatch: 'full' },
  { path: 'chats', component: ChatspageComponent, canActivate: [AuthGuard] },
];

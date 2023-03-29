import { Component } from '@angular/core';
import { globalConstanst } from './shared/globals/global-constanst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AloDeskSite';
  whatsAppChat = globalConstanst.whatsAppChat;
}

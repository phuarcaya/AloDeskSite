import { Component, OnInit } from '@angular/core';
import { globalConstanst } from 'src/app/shared/globals/global-constanst';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  phoneContact = '';
  emailContact = '';
  whatsAppChat = '';

  constructor() {
    this.phoneContact = globalConstanst.phoneContact;
    this.emailContact = globalConstanst.emailContact;
    this.whatsAppChat = globalConstanst.whatsAppChat;
  }

  ngOnInit(): void {
    this.loadJsFile('assets/js/main.js');
  }

  public loadJsFile(url: any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}

import { Component, OnInit } from '@angular/core';
import { globalConstanst } from '../../globals/global-constanst';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  phoneContact = '';
  emailContact = '';
  constructor() {
    this.phoneContact = globalConstanst.phoneContact;
    this.emailContact = globalConstanst.emailContact;
  }

  ngOnInit(): void {}
}

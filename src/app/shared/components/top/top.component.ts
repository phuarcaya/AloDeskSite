import { Component, OnInit } from '@angular/core';
import { globalConstanst } from '../../globals/global-constanst';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  phoneContact = '';
  emailContact = '';
  facebookPage = '';
  instagramPage = '';
  webSite = '';

  constructor() {
    this.phoneContact = globalConstanst.phoneContact;
    this.emailContact = globalConstanst.emailContact;
    this.facebookPage = globalConstanst.facebookPage;
    this.instagramPage = globalConstanst.instagramPage;
    this.webSite = globalConstanst.webSite;
  }

  ngOnInit(): void {}
}

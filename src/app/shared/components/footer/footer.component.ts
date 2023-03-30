import { Component, OnInit } from '@angular/core';
import { globalConstanst } from '../../globals/global-constanst';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  phoneContact = '';
  emailContact = '';
  facebookPage = '';
  instagramPage = '';
  webSite = '';
  titleSite = '';
  currentYear = '';
  urlBillarsoft = '';
  urlOlineShop = '';
  urlElefac = '';

  constructor() {
    this.phoneContact = globalConstanst.phoneContact;
    this.emailContact = globalConstanst.emailContact;
    this.facebookPage = globalConstanst.facebookPage;
    this.instagramPage = globalConstanst.instagramPage;
    this.webSite = globalConstanst.webSite;
    this.titleSite = globalConstanst.titleSite;
    this.urlBillarsoft = globalConstanst.urlBillarsoft;
    this.urlOlineShop = globalConstanst.urlOlineShop;
    this.urlElefac = globalConstanst.urlElefac;

    this.currentYear = new Date().getFullYear().toString();
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implementation-page',
  templateUrl: './implementation-page.component.html',
  styleUrls: ['./implementation-page.component.css']
})
export class ImplementationPageComponent implements OnInit {

  constructor() { }

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

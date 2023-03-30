import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-page',
  templateUrl: './function-page.component.html',
  styleUrls: ['./function-page.component.css']
})
export class FunctionPageComponent implements OnInit {

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

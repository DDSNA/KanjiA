import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  allowFormRefresh = false;

constructor() { 
  setTimeout(() => {
    this.allowFormRefresh = true;
    }, 2000);
  }
  ngOnInit(): void {
      
  }
}

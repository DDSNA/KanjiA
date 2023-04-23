import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  allowFormRefresh = false;
  handleClick(){
    setTimeout(() => {
      this.allowFormRefresh = false;
    }, 2000);
    console.log('Button Clicked');
  }

constructor() { 
  setTimeout(() => {
    this.allowFormRefresh = true;
    }, 2500);
  }
  ngOnInit(): void {
      
  }
}

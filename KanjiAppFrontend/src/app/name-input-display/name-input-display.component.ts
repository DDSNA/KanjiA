import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-input-display',
  templateUrl: './name-input-display.component.html',
  styleUrls: ['./name-input-display.component.css']
})
export class NameInputDisplayComponent implements OnInit {

  Username='Bia';

  onUpdateUsername(event: Event) {
    this.Username= (<HTMLInputElement>event.target).value;
  }
  
  ngOnInit() {
  }

}

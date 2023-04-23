import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-input-display',
  templateUrl: './name-input-display.component.html',
  styleUrls: ['./name-input-display.component.css']
})
export class NameInputDisplayComponent implements OnInit {
  usernameInputEmpty=true;
  Username='Bia';

  handleClick() {
    this.Username='';
  }
  onUpdateUsername(event: Event) {
    this.Username= (<HTMLInputElement>event.target).value;
  }
  
  ngOnInit() {
  }

  usernameIsEmpty(){
    if (this.Username.length>0){
      this.usernameInputEmpty=false;
    }
    else{
      this.usernameInputEmpty=true;
    }


}

}

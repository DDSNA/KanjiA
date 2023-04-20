import { Component } from '@angular/core';

@Component({
  selector: 'app-debugstatuscomponent',
  templateUrl: './debugstatuscomponent.component.html',
  styleUrls: ['./debugstatuscomponent.component.css']
})
export class DebugstatuscomponentComponent {
  serverid = 10;
  serverstatus = 'offline';

  getServerStatus(){
    return this.serverstatus;
  }
  
  constructor() { 
    setTimeout(() => {
      this.serverstatus='online';
    }, 2000);
  }
}

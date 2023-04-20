import { Component, OnInit } from '@angular/core';
import { Int32 } from 'mongodb';

@Component({
  selector: 'app-debugstatuscomponent',
  templateUrl: './debugstatuscomponent.component.html',
  styleUrls: ['./debugstatuscomponent.component.css']
})

export class DebugstatuscomponentComponent {
  serverId: number = 10;
  serverStatus: string ="online";

  getServerStatus(){
    return this.serverStatus;
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
  appName = "My first app in Angular 8"; 
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanji-list',
  templateUrl: './kanji-list.component.html',
  styleUrls: ['./kanji-list.component.css']
})

export class KanjiListComponent implements OnInit {
  title!: string;
  constructor() { }
  ngOnInit() {
      this.title= "User stats (related to kanji)"
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-law',
  templateUrl: './assign-law.component.html',
  styleUrls: ['./assign-law.component.scss']
})
export class AssignLawComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LawList : LawElement[] = [
    {title:'Law1',announcedate:'1/2/65',enforcedate:'1/3/65',canceldate:'-',fileUrl:'Law1.pdf'},
    {title:'Law2',announcedate:'2/2/65',enforcedate:'2/3/65',canceldate:'-',fileUrl:'Law2.pdf'}
  ]

}

export interface LawElement {
  title: string;
  announcedate: string;
  enforcedate: string;
  canceldate: string;
  fileUrl: string;
}
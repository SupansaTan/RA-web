import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-location',
  templateUrl: './config-location.component.html',
  styleUrls: ['./config-location.component.scss']
})
export class ConfigLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LocationList: LocationElement[] = [
    {name: 'โรงงาน A', buType: 'Farm', IU: 'ธุรกิจสุกร', buLine: 'สายงานเลี้ยงสุกร'},
    {name: 'โรงงาน B', buType: 'Feed', IU: 'ธุรกิจผลิตอาหารสัตว์บก', buLine: 'สายงานผลิตอาหารสุกร'}
  ]

}

export interface LocationElement {
  name: string;
  buType: string;
  IU: string;
  buLine: string;
}

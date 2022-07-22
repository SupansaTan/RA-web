import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assign-detail',
  templateUrl: './assign-detail.component.html',
  styleUrls: ['./assign-detail.component.scss'],
})

export class AssignDetailComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  LocationData: LocationElement[] = [
    {id: 1, checked: false, location: 'A', business: 'Farm', businessLine: 'สายงานเลี้ยงสุกร A'},
    {id: 2, checked: false, location: 'B', business: 'Farm', businessLine: 'สายงานเลี้ยงสุกร B'},
    {id: 3, checked: false, location: 'C', business: 'Farm', businessLine: 'สายงานเลี้ยงสุกร C'},
    {id: 4, checked: false, location: 'D', business: 'Farm', businessLine: 'สายงานเลี้ยงสุกร D'},
    {id: 5, checked: false, location: 'E', business: 'Farm', businessLine: 'สายงานเลี้ยงสุกร E'},
  ];

  BusinessLineData: BusinessLineElement[] = [
    {id: 1, checked: false, businessLine: 'สายงานเลี้ยงสุกร A'},
    {id: 2, checked: false, businessLine: 'สายงานเลี้ยงสุกร B'},
    {id: 3, checked: false, businessLine: 'สายงานเลี้ยงสุกร C'},
    {id: 4, checked: false, businessLine: 'สายงานเลี้ยงสุกร D'},
    {id: 5, checked: false, businessLine: 'สายงานเลี้ยงสุกร E'},
  ];



  // ------------ Modal ----------
  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.LocationData.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.LocationData.every(p => p.checked);
	}

  // ------ Multiselect ----------
  // Default selection
  systemModel: number[] = [];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default',
    containerClasses: 'container p-3 my-3 border',
    displayAllSelectedText: true,
    showCheckAll:true,
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
  };

  systemOptions: IMultiSelectOption[] = [
    { id: 1, name: 'CPF SHE & En MS'},
    { id: 2, name: 'ISO 14001'},
    { id: 3, name: 'OSHAS 18001'},
    { id: 4, name: 'ISO50001'},
  ];

  onChange() {
    console.log(this.systemModel);
  }


}



export interface LocationElement {
  id: number;
  checked: boolean;
  location: string;
  business: string;
  businessLine: string;
}

export interface BusinessLineElement {
  id: number;
  checked: boolean;
  businessLine: string;
}





import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-add-law',
  templateUrl: './add-law.component.html',
  styleUrls: ['./add-law.component.scss']
})
export class AddLawComponent implements OnInit {

  // Default selection
  systemModel: number[] = [];
  businessModel: number[] = [];

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

 businessOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Food'},
    { id: 2, name: 'Farm'},
    { id: 3, name: 'Feed'},
    { id: 4, name: 'Trade'},
    { id: 6, name: 'Other'}
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

  onChange() {
    console.log(this.systemModel);
}

}

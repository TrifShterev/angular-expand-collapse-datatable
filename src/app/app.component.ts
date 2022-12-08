import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {

  isTableExpanded = false;

  FRAME_DATA = [
    {
      "time": "12.12.2021 12:22",
      "changes": "Change made to practice positions and basic information ",
      "by": "Firstname.Lastname@email.com",      
      "isExpanded": false,
      "details": [
        {
          "nameifrs": "IFRS",
          "field": "label",
          "old": "something",
          "new": "something else"
        },
        {
          "namepp": "Price positions",
          "oldpp": {"currency":"GBP", "vat":"22%","quantity": 1},
          "newpp": {"currency":"EUR", "vat":"24%","quantity": 2}
        }
      ]
    },
    {
      "time": "12.11.2022 12:22",
      "changes": "Change made to Basic information ",
      "by": "Firstname.Lastname@email.com",
      "isExpanded": false,
      "details": [
        {
          "nameifrs": "IFRS",
          "field": "label",
          "old": "something has been changed",
          "new": "something new"
        },
        {
          "namepp": "Price positions",
          "oldpp": {"currency":"BG", "vat":"20%","quantity": 2},
          "newpp": {"currency":"EUR", "vat":"24%","quantity": 1}
        }
      ]
    },
    {
      "time": "12.11.2022 12:22",
      "changes": "Change made to Basic information ",
      "by": "Firstname.Lastname@email.com",
      "isExpanded": false,
      "details": [
        {
          "nameifrs": "IFRS",
          "field": "label",
          "old": "something has been changed",
          "new": "something new"
        },
        {
          "namepp": "Price positions",
          "oldpp": {"currency":"BG", "vat":"20%","quantity": 2},
          "newpp": {"currency":"EUR", "vat":"24%","quantity": 1}
        }
      ]
    }
  ];


  dataList = new MatTableDataSource();
  displayedColumnsList: string[] = ['Time', 'Changes', 'By', 'Details'];


  ngOnInit() {
    this.dataList.data = this.FRAME_DATA;
  }

  // Toggle All Rows
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

}
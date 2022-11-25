import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Siti', 'Affandi', 'siti@gmail.com', 50000),
    new SalesPerson('Alice', 'Heart', 'alice@gmail.com', 40000),
    new SalesPerson('Jane', 'Doe', 'jane@gmail.com', 90000),
    new SalesPerson('John', 'Doe', 'john@gmail.com', 60000),
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: any[] = [
  {POSITION: 'Web developer', NAME: 'Hydrogen', STATUS: 'SALE', DATE: new Date(), PRICE:'$24',COLOR:'#8dd675'},
  {POSITION: 'Web developer', NAME: 'Helium', STATUS: 'EXTENDED', DATE: new Date(), PRICE:'$2360',COLOR:'#1d4bce'},
  {POSITION: 'Web developer', NAME: 'Lithium', STATUS: 'EXTENDED', DATE: new Date(), PRICE:'$2360',COLOR:'#1d4bce'},
  {POSITION: 'Web developer', NAME: 'Beryllium', STATUS: 'TAX', DATE: new Date(), PRICE:'$2360',COLOR:'#ab1414'},
  {POSITION: 'Web developer', NAME: 'Boron', STATUS: 'SALE', DATE: new Date(), PRICE:'$2360',COLOR:'#8dd675'},
  // {POSITION: 'Web developer', NAME: 'Carbon', STATUS: 'SALE', DATE: new Date(), PRICE:'$2360',COLOR:'#8dd675'},
  // {POSITION: 'Web developer', NAME: 'Nitrogen', STATUS: 'MEMBER', DATE: new Date(), PRICE:'$236',COLOR:'#ab2'},
  // {POSITION: 'Web developer', NAME: 'Oxygen', STATUS: 'EXTENDED', DATE: new Date(), PRICE:'$2360',COLOR:'#1d4bce'},
  
];


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  displayedColumns: string[] = ['POSITION', 'NAME', 'STATUS','PRICE'];
  dataSource = ELEMENT_DATA;
  months=['January','February']
  imageSource='https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  constructor() { }

  ngOnInit(): void {
  }

}

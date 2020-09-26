import { Component, OnInit } from '@angular/core';



const ELEMENT_DATA: any[] = [
  {POSITION: 1, NAME: 'Hydrogen', STATUS: 'SALE', DATE: new Date(), PRICE:'$24',COLOR:'#8dd675'},
  {POSITION: 2, NAME: 'Helium', STATUS: 'EXTENDED', DATE: new Date(), PRICE:'$2360',COLOR:'#1d4bce'},
  {POSITION: 3, NAME: 'Lithium', STATUS: 'EXTENDED', DATE: new Date(), PRICE:'$2360',COLOR:'#1d4bce'},
  {POSITION: 4, NAME: 'Beryllium', STATUS: 'TAX', DATE: new Date(), PRICE:'$2360',COLOR:'#ab1414'},
  {POSITION: 5, NAME: 'Boron', STATUS: 'SALE', DATE: new Date(), PRICE:'$2360',COLOR:'#8dd675'},
  {POSITION: 6, NAME: 'Carbon', STATUS: 'SALE', DATE: new Date(), PRICE:'$2360',COLOR:'#8dd675'},
  {POSITION: 7, NAME: 'Nitrogen', STATUS: 'MEMBER', DATE: new Date(), PRICE:'$236',COLOR:'#ab2'},
  {POSITION: 8, NAME: 'Oxygen', STATUS: 'EXTENDED', DATE: new Date(), PRICE:'$2360',COLOR:'#1d4bce'},
  
];


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  displayedColumns: string[] = ['POSITION', 'NAME', 'STATUS', 'DATE','PRICE'];
  dataSource = ELEMENT_DATA;


  cards=[
    {
      title:'Meeting today',
      subtitle:'you can write anything',
      icon:'person',
      background:'#8dd675',
      time:'5pm',
      button:false
    },
    {
      title:'Send documents to clark',
      subtitle:'lorem ipsum',
      icon:'person',
      background:'#1d4bce',
      time:'',
      button:false
    },
    {
      title:'John doe',
      subtitle:'call today horrah',
      icon:'date_range',
      background:'#6c198e',
      time:'5pm',
      button:false
    },
    {
      title:'Go to the doctor',
      subtitle:'contracy etc etc',
      icon:'date_range',
      background:'#6c698e',
      time:'5 minutes ago',
      button:false
    },
    {
      title:'Hellow world',
      subtitle:'Approve meeting',
      icon:'settings',
      background:'#6b1814',
      time:'5 minutes ago',
      button:true
    }
  ];
  months=['January','February']
  constructor() { }

  ngOnInit(): void {
  }

}

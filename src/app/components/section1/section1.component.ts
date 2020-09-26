import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  cards=[
    {
      title:'$18090',
      subtitle:'Income',
      icon:'account_balance_wallet',
      background:'#8dd675'
    },
    {
      title:'$2690',
      subtitle:'Users',
      icon:'person',
      background:'#1d4bce'
    },
    {
      title:'20 March',
      subtitle:'My Birthday',
      icon:'date_range',
      background:'#6c198e'
    },
    {
      title:'$6540',
      subtitle:'Pending',
      icon:'settings',
      background:'#ab1414'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
